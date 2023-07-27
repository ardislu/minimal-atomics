addEventListener('message', async e => {
  const sab = e.data;
  const arr = new BigInt64Array(sab);
  const wait = Atomics.wait(arr, 0, 100n);
  console.log(wait);
  close();
});
