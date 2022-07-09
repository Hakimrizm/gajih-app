const btn = document.querySelector(".btn-submit");
const container = document.querySelector(".card-form");

function getValue(el) {
  const value = document.getElementById(el).value;
  return parseInt(value);
}

function countDate(date1, date2) {
  const oneDay = 24 * 60 * 60 * 1000; // Jam * Menit * Detik * Milisekon
  const firstDate = date1;
  const secondDate = date2;
  return Math.round(Math.abs((firstDate - secondDate) / oneDay));
}

function dateFormat(d) {
  const parse = d.split("-");
  let parseDate = new Date(parse[0], parse[1] - 1, parse[2]);
  return parseDate;
}

function setIdr(idr) {
  const arr = String(idr).split("").reverse();

  for (let i = 0; i < arr.length; i++) {
    if (i % 3 == 0) {
      arr[i] = `${arr[i]}.`;
    }
  }

  const result = arr.reverse().join("");
  return result;
}

function output(tanggal, nama, jabatan, dpp, gajih, lt, lembur, kasbon, total) {
  return `<div class="row">
            <div class="col">
              <div class="card mt-4">
                <div class="card-header bg-primary">
                  <h4 class="text-center">PT INTERNASIONAL GLOBALINDO</h4>
                </div>
                <div class="card-body">
                  <table>
                    <tr>
                      <th>Tanggal</th>
                      <td>:</td>
                      <td class="output">${tanggal}</td>
                    </tr>
                    <tr>
                      <th>Nama</th>
                      <td>:</td>
                      <td class="output">${nama}</td>
                    </tr>
                    <tr>
                      <th>Jabatan</th>
                      <td>:</td>
                      <td class="output">${jabatan}</td>
                    </tr>
                    <tr>
                      <th>Departement</th>
                      <td>:</td>
                      <td class="output">${dpp}</td>
                    </tr>
                    <tr>
                      <th>Gaji Pokok Periode</th>
                      <td>:</td>
                      <td class="output">${gajih}</td>
                    </tr>
                    <tr>
                      <th>Lembur Terusan</th>
                      <td>:</td>
                      <td class="output">${lt}</td>
                    </tr>
                    <tr>
                      <th>Lembur</th>
                      <td>:</td>
                      <td class="output">${lembur}</td>
                    </tr>
                    <tr>
                      <th>Kasbon</th>
                      <td>:</td>
                      <td class="output">${kasbon}</td>
                    </tr>
                  </table>

                  <div class="border mt-3"></div>

                  <div class="d-flex justify-content-between">
                    <p>Total</p>
                    <p>${total}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>`;
}

btn.addEventListener("click", function () {
  const waktu = document.getElementById("dariTanggal").value;
  const waktu2 = document.getElementById("sampaiTanggal").value;
  const tanggal = dateFormat(waktu);
  const tanggal2 = dateFormat(waktu2);
  const hasil = countDate(tanggal, tanggal2);
  const nama = document.getElementById("nama").value;
  const jabatan = document.getElementById("jabatan").value;
  const dpp = document.getElementById("ddp").value;

  const gajih = getValue("gpp") * hasil;
  const lt = getValue("lt");
  const lembur = getValue("lembur");
  const kasbon = getValue("kasbon");

  const hitung = setIdr(gajih + lt + lembur + kasbon);
  const parent = document.querySelector(".output");
  const updateUi = output(waktu, nama, jabatan, dpp, gajih, lt, lembur, kasbon, hitung);

  container.style.display = "none";

  parent.innerHTML = updateUi;
});
nama.value = "";
