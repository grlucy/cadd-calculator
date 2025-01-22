function convertInchesToDecimalFeet() {
  // Get form values
  let formFt = document.getElementById("decFtFrm-ftInput").value;
  formFt = isNaN(formFt) ? 0 : Number(formFt);

  let formIn = document.getElementById("decFtFrm-inInput").value;
  formIn = isNaN(formIn) ? 0 : Number(formIn);

  let formFracDen = document.getElementById("decFtFrm-frcInput2").value;
  formFracDen =
    isNaN(formFracDen) || Number(formFracDen) === 0 ? 1 : Number(formFracDen);

  let formFracNum = document.getElementById("decFtFrm-frcInput1").value;
  formFracNum = formFracDen === 0 || isNaN(formFt) ? 0 : Number(formFracNum);

  // Convert inches to decimal inches
  const decIn = formIn + formFracNum / formFracDen;

  // Convert decimal inches to decimal feet
  const decFt = Number(formFt + decIn / 12).toFixed(6);

  const resultInput = document.getElementById("decFtFrm-decFtInput");
  resultInput.value = decFt;
}

function convertDecimalFeetToInches() {
  // Get form value
  let formDecFt = document.getElementById("decFtFrm-decFtInput").value;
  formDecFt = isNaN(formDecFt) ? 0 : Number(formDecFt);

  let feet = Math.floor(formDecFt);
  const ftRemainder = formDecFt - feet;
  const decInches = ftRemainder * 12;
  let inches = Math.floor(decInches);
  const inRemainder = decInches - inches;
  let numerator = "";
  let denominator = "";

  if (inRemainder > 0) {
    // force denominator of 16
    denominator = 16;
    // get numerator and round to whole number
    numerator = Math.round(inRemainder * denominator);
    // check if numerator is an even number
    while (numerator % 2 === 0) {
      denominator = denominator / 2;
      numerator = numerator / 2;
    }
  }

  if (numerator / denominator === 1) {
    numerator = "";
    denominator = "";

    inches++;
    if (inches >= 12) {
      inches = 0;
      feet++;
    }
  }

  // Update input values
  const ftInput = document.getElementById("decFtFrm-ftInput");
  ftInput.value = feet || "";
  const inInput = document.getElementById("decFtFrm-inInput");
  inInput.value = inches || "";
  const numInput = document.getElementById("decFtFrm-frcInput1");
  numInput.value = numerator;
  const denInput = document.getElementById("decFtFrm-frcInput2");
  denInput.value = denominator;
}

function convertInchesToFeetAndInches() {
  const resInput = document.getElementById("ftFrm-resInput");
  let formIn = document.getElementById("ftFrm-inInput").value;
  formIn = isNaN(formIn) ? 0 : Number(formIn);
  if (!formIn) {
    resInput.value = "";
    return;
  }

  const feet = Math.floor(formIn / 12);
  const inches = formIn % 12;
  const str = `${feet}'-${inches}"`;

  resInput.value = str;
}
