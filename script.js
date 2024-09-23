// Get elements
const commForm = document.getElementById('commForm');
const commTable = document.querySelector('#commTable tbody');

// Function to calculate days between two dates
function calculateDays(date) {
  const now = new Date();
  const pastDate = new Date(date);
  const difference = now - pastDate; // Difference in milliseconds
  const days = Math.floor(difference / (1000 * 60 * 60 * 24)); // Convert to days
  return days;
}

// Function to add a new commission
function addCommission(event) {
  event.preventDefault();

  const commName = document.getElementById('commName').value;
  const price = document.getElementById('price').value;
  const startTime = document.getElementById('startTime').value;
  const lastUpdate = document.getElementById('lastUpdate').value;

  // Calculate days since start and last update
  const daysSinceStart = calculateDays(startTime);
  const daysSinceUpdate = calculateDays(lastUpdate);

  // Add new row to the table
  const row = document.createElement('tr');

  row.innerHTML = `
    <td>${commName}</td>
    <td>₱${price}</td>
    <td>${new Date(startTime).toLocaleString()}</td>
    <td>${new Date(lastUpdate).toLocaleString()}</td>
    <td>${daysSinceStart} days</td>
    <td>${daysSinceUpdate} days</td>
  `;

  commTable.appendChild(row);

  // Reset the form
  commForm.reset();
}

// Attach event listener to the form
commForm.addEventListener('submit', addCommission);
