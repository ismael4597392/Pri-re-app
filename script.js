// Fonction pour charger les horaires d’une ville
function chargerHoraires(ville = "Karabuk") {

  const url = `https://api.aladhan.com/v1/timingsByCity?city=${ville}&country=Turkey&method=13`;

  fetch(url)
    .then(response => response.json())
    .then(data => {

      const timings = data.data.timings;

      document.getElementById("fajr").textContent = timings.Fajr;
      document.getElementById("dhuhr").textContent = timings.Dhuhr;
      document.getElementById("asr").textContent = timings.Asr;
      document.getElementById("maghrib").textContent = timings.Maghrib;
      document.getElementById("isha").textContent = timings.Isha;

      // Met à jour le nom de la ville
      document.getElementById("ville").textContent = ville + " - Turquie";
    })
    .catch(() => {
      alert("Ville introuvable");
    });
}

// Bouton "Valider la ville"
document.getElementById("villeBtn").addEventListener("click", () => {
  const ville = document.getElementById("villeInput").value;
  if (ville !== "") {
    chargerHoraires(ville);
  }
});

// Chargement au démarrage
chargerHoraires();
