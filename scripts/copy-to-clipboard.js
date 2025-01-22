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
