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
  const laukai = forma.querySelectorAll("input");

  laukai.forEach(function(laukas) {
    laukas.setCustomValidity("");

    if (laukas.value.trim() === "") {
      laukas.setCustomValidity("Privaloma užpildyti lauką");
    } else if (laukas.id === "vardas" || laukas.id === "pavarde") {
      if (!/^\p{L}+$/u.test(laukas.value)) {
        laukas.setCustomValidity("Galima naudoti tik raides");
      }
    } else if (laukas.id === "email" && laukas.validity.typeMismatch) {
      laukas.setCustomValidity("Neteisingas el. pašto formatas");
    } else if (laukas.id === "telefonas") {
    if (laukas.value.length < 14) {
    laukas.setCustomValidity("Per trumpas telefono numeris");
    } else if (!/^\+370 6\d{2} \d{5}$/.test(laukas.value)) {
    laukas.setCustomValidity("Netinkamas telefono numeris");
  }
  } else if (laukas.type === "number") {
      if (Number(laukas.value) < 1 || Number(laukas.value) > 10) {
        laukas.setCustomValidity("Įveskite skaičių nuo 1 iki 10");
      }
    }

    let klaida = laukas.parentElement.querySelector(".klaida");

if (!klaida) {
  klaida = document.createElement("div");
  klaida.className = "klaida";
  klaida.style.color = "#ff5555";
  klaida.style.fontSize = "14px";
  laukas.parentElement.appendChild(klaida);
}

if (!laukas.validity.valid && laukas.value !== "") {
  laukas.style.borderColor = "red";
  klaida.innerText = laukas.validationMessage;
} else {
  laukas.style.borderColor = "";
  klaida.innerText = "";
}
  });

  mygtukas.disabled = !forma.checkValidity();
}

forma.addEventListener("input", tikrintiForma);

tikrintiForma();

const telefonas = document.getElementById("telefonas");

telefonas.addEventListener("input", function() {
  let numeris = telefonas.value.replace(/\D/g, "");

  if (numeris.startsWith("370")) {
    numeris = numeris.slice(3);
  }

  numeris = numeris.slice(0, 8);

  let formatas = "+370";

  if (numeris.length > 0) {
    formatas += " " + numeris.slice(0, 3);
  }

  if (numeris.length > 3) {
    formatas += " " + numeris.slice(3);
  }

  telefonas.value = numeris.length > 0 ? formatas : "";
  tikrintiForma();
});

document.getElementById("isvalyti").addEventListener("click", function() {
  forma.reset();

  forma.querySelectorAll("input").forEach(function(laukas) {
    laukas.value = "";
  });

  document.getElementById("rezultatas").innerText = "";

  tikrintiForma();
});