// EV Demand Chart – Chart.js
document.addEventListener("DOMContentLoaded", () => {
  const ctx = document.getElementById('evChart').getContext('2d');

  const forecastData = [120, 150, 180, 240, 300, 360, 400, 420];
  const actualData = [110, 145, 170, 230, 310, 355, 390, 430];
  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"];

  window.evChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: "Forecast Demand",
          data: forecastData,
          borderColor: "rgb(34,197,94)",
          backgroundColor: "rgba(34,197,94,0.1)",
          fill: false,
          tension: 0.2
        },
        {
          label: "Actual Demand",
          data: actualData,
          borderColor: "rgb(14,165,233)",
          backgroundColor: "rgba(14,165,233,0.1)",
          fill: false,
          tension: 0.2
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'EV Demand Forecast vs Actual – Germany'
        }
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
});

