function convertDegreesAndRadius(value, resInputId) {
  const given = isNaN(value) ? 0 : Number(value);
  if (!given) return;
  const res = Number(5729.57795 / given).toFixed(6);

  const resInput = document.getElementById(resInputId);
  resInput.value = res;
}

function convertDecimalDegreesToDMS(value) {
  // 1 deg = 60 min
  // 1 min = 60 sec
  const decDeg = isNaN(value) ? 0 : Number(value);
  if (!decDeg) return;

  const deg = Math.floor(decDeg);
  const degRemainder = Number(decDeg - deg).toFixed(6);
  const decMin = degRemainder * 60;
  const min = Math.floor(decMin);
  const minRemainder = Number(decMin - min).toFixed(6);
  const sec = Number(minRemainder * 60).toFixed(6);

  document.getElementById("dmsForm-degInput").value = deg;
  document.getElementById("dmsForm-minInput").value = min;
  document.getElementById("dmsForm-secInput").value = sec;
}

function convertDMSToDecimalDegrees() {
  // Get form values
  let formDeg = document.getElementById("dmsForm-degInput").value;
  formDeg = isNaN(formDeg) ? 0 : Number(formDeg);

  let formMin = document.getElementById("dmsForm-minInput").value;
  formMin = isNaN(formMin) ? 0 : Number(formMin);

  let formSec = document.getElementById("dmsForm-secInput").value;
  formSec = isNaN(formSec) ? 0 : Number(formSec);

  // Convert seconds to minutes, minutes to degrees
  const min = formMin + formSec / 60;
  const deg = Number(formDeg + min / 60).toFixed(6);

  // Update form values
  const resultInput = document.getElementById("dmsFrm-decDegInput");
  resultInput.value = deg;
}
