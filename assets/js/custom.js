const forma = document.getElementById("contactForm");

forma.addEventListener("submit", function(event) {
  event.preventDefault();

  const duomenys = {
    vardas: document.getElementById("vardas").value,
    pavarde: document.getElementById("pavarde").value,
    email: document.getElementById("email").value,
    telefonas: document.getElementById("telefonas").value,
    adresas: document.getElementById("adresas").value,
    vertinimas1: Number(document.getElementById("vertinimas1").value),
    vertinimas2: Number(document.getElementById("vertinimas2").value),
    vertinimas3: Number(document.getElementById("vertinimas3").value)
  };

  console.log(duomenys);

  const vidurkis = (duomenys.vertinimas1 + duomenys.vertinimas2 + duomenys.vertinimas3) / 3;

  document.getElementById("rezultatas").innerText =
    "Vardas: " + duomenys.vardas + "\n" +
    "Pavardė: " + duomenys.pavarde + "\n" +
    "El. paštas: " + duomenys.email + "\n" +
    "Tel. numeris: " + duomenys.telefonas + "\n" +
    "Adresas: " + duomenys.adresas + "\n" +
    "Dizaino vertinimas: " + duomenys.vertinimas1 + "\n" +
    "Patogumo vertinimas: " + duomenys.vertinimas2 + "\n" +
    "Turinio vertinimas: " + duomenys.vertinimas3 + "\n\n" +
 duomenys.vardas + " " + duomenys.pavarde + ": " + vidurkis.toFixed(2);
});

const mygtukas = forma.querySelector("button");

function tikrintiForma() {
  mygtukas.disabled = !forma.checkValidity();
}

forma.addEventListener("input", tikrintiForma);

tikrintiForma();