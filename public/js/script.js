const btn = document.querySelector(".btn-submit");

function getValue(el) {
  const value = document.getElementById(el).value;
  return parseInt(value);
}

btn.addEventListener("click", function () {
  const waktu = document.getElementById("tanggal");
  const nama = document.getElementById("nama");
  const jabatan = document.getElementById("jabatan");
  const dpp = document.getElementById("dpp");

  const gajih = isIdr(getValue("gpp"));
  const lt = getValue("lt");
  const lembur = getValue("lembur");
  const kasbon = getValue("kasbon");
});

function isIdr(idr) {
  const arr = String(idr).split("").reverse();

  for (let i = 0; i < arr.length; i++) {
    if (i % 3 == 0) {
      arr[i] = `${arr[i]}.`;
    }
  }

  const result = arr.reverse().join("");
  return result;
}
