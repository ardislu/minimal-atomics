async function hash(iterations) {
  let seed = new Uint8Array(64);
  crypto.getRandomValues(seed);

  for (let i = 0; i < iterations; i++) {
    seed = await crypto.subtle.digest('SHA-512', seed);
  }
}

addEventListener('message', async e => {
  const sab = e.data;
  const arr = new BigInt64Array(sab);
  await hash(arr[0]);
  Atomics.store(arr, 0, 0n);
  Atomics.notify(arr, 0);
  close();
});
