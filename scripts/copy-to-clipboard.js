const copyToast = document.getElementById("copyToast");
const toastBootstrap = bootstrap.Toast.getOrCreateInstance(copyToast);

function copyThisToClipboard(element) {
  navigator.clipboard.writeText(element.innerText);
  toastBootstrap.show();
}

function copyThatToClipboard(id) {
  const element = document.getElementById(id);
  navigator.clipboard.writeText(element.value);
  toastBootstrap.show();
}

function copyFeetAndInchesToClipboard(ftId, inId, fracNumId, fracDenId) {
  const ftElement = document.getElementById(ftId);
  const inElement = document.getElementById(inId);
  const fracNumElement = document.getElementById(fracNumId);
  const fracDenElement = document.getElementById(fracDenId);
  const fractionStr =
    fracNumElement?.value && fracDenElement?.value
      ? ` ${fracNumElement.value}/${fracDenElement.value}`
      : "";
  const copyStr = `${ftElement.value}'-${inElement.value}${fractionStr}"`;
  navigator.clipboard.writeText(copyStr);
  toastBootstrap.show();
}

function copyDegreesMinutesSecondsToClipboard(degId, minId, secId) {
  const degElement = document.getElementById(degId);
  const minElement = document.getElementById(minId);
  const secElement = document.getElementById(secId);

  const copyStr = `${degElement.value || 0}°${minElement.value || 0}'${
    secElement.value || 0
  }"`;

  navigator.clipboard.writeText(copyStr);
  toastBootstrap.show();
}
