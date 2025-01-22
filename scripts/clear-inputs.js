function clearInputsById(idArray) {
  idArray.forEach((idStr) => {
    const input = document.getElementById(idStr);
    input.value = "";
  });
}
