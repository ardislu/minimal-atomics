async function hash(iterations) {
  let seed = new Uint8Array(64);
  crypto.getRandomValues(seed);

  for (let i = 0; i < iterations; i++) {
    seed = await crypto.subtle.digest('SHA-512', seed);
  }
}

addEventListener('message', async e => {
  const iterations = e.data;
  await hash(iterations);
  postMessage('done');
  close();
});
