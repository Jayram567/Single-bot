const data = {
  BTC: "UP",
  USD: "DOWN",
  INR: "UP"
};

function updateSignals() {
  for (const [key, value] of Object.entries(data)) {
    const el = document.querySelector(`#${key.toLowerCase()} .status`);
    el.textContent = value;

    if (value === "UP") {
      el.style.color = "lime";
    } else if (value === "DOWN") {
      el.style.color = "red";
    } else {
      el.style.color = "gray";
    }
  }
}

// Auto-refresh every 15 seconds
updateSignals();
setInterval(updateSignals, 15000);
