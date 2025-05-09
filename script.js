const hcisRanges = [
  [1, 3], // Section A
  [5, 9], // B
  [10, 33], // C
  [35, 35], // D
  [36, 39], // E
  [41, 43], // F
  [45, 47], // G
  [49, 53], // H
  [68, 68], // L
];

function isHCIS(code) {
  const parsed = parseInt(code.slice(0, 2), 10);
  return hcisRanges.some(([min, max]) => parsed >= min && parsed <= max);
}

document.getElementById("checkButton").addEventListener("click", () => {
  const code = document.getElementById("naceCodeInput").value.trim();
  const resultEl = document.getElementById("result");

  if (!/^\d{2,4}$/.test(code)) {
    resultEl.textContent =
      "Please enter a valid 2- or 4-digit numeric NACE code.";
    resultEl.style.color = "red";
    return;
  }

  const hcStatus = isHCIS(code);
  resultEl.textContent = `NACE code ${code} ${
    hcStatus ? "IS" : "is NOT"
  } classified as High Climate Impact Sector (HCIS).`;
  resultEl.style.color = hcStatus ? "green" : "black";
});
