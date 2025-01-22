function convertDegreesAndRadius(value, resInputId) {
  // TODO: allow for degrees value to be given in format XdX'X". Right now only decimal degrees is supported.
  const given = isNaN(value) ? 0 : Number(value);
  if (!given) return;
  const res = Number(5729.57795 / given).toFixed(6);

  const resInput = document.getElementById(resInputId);
  resInput.value = res;
}
