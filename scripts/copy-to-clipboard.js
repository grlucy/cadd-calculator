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
