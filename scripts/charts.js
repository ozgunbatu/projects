// scripts/charts.js

document.addEventListener("DOMContentLoaded", () => {

  // EN/DE Toggle
  let de = false;
  const langBtn = document.getElementById('langBtn');
  const heroTitle = document.getElementById('heroTitle');
  const heroSub = document.getElementById('heroSub');

  langBtn.onclick = () => {
    de = !de;
    heroTitle.textContent = de ? 
      "SQL-basierte Analysen, Produktdenken & UX-Strategie" : 
      "SQL-Driven Analytics, Product Thinking & UX Strategy";
    heroSub.textContent = de ? 
      "MSc Business Student in Deutschland mit Fokus auf Werkstudent- und Junior-Rollen in Data, Operations, Product, UX und Digital Marketing." : 
      "MSc Business student in Germany targeting Werkstudent & Junior roles in Data, Operations, Product, UX and Digital Marketing.";
  };

  // EV Demand Chart
  const evCtx = document.getElementById('evChart').getContext('2d');
  const forecastData = [120, 150, 180, 240, 300, 360, 400, 420];
  const actualData = [110, 145, 170, 230, 310, 355, 390, 430];
  const labels = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug"];

  window.evChart = new Chart(evCtx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: "Forecast Demand",
          data: forecastData,
          borderColor: "rgb(34,197,94)",
          fill: false,
          tension: 0.2
        },
        {
          label: "Actual Demand",
          data: actualData,
          borderColor: "rgb(14,165,233)",
          fill: false,
          tension: 0.2
        }
      ]
    },
    options: {
      responsive: true,
      plugins: { legend: { position: 'top' } },
      scales: { y: { beginAtZero: true } }
    }
  });

});
