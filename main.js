document.getElementById('observationForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const speciesName = document.getElementById('speciesName').value;
  const location = document.getElementById('location').value;
  const notes = document.getElementById('notes').value;

  const tableBody = document.getElementById('observationsBody');
  const newRow = document.createElement('tr');

  newRow.innerHTML = `
      <td>${speciesName}</td>
      <td>${location}</td>
      <td>${notes}</td>
  `;

  tableBody.appendChild(newRow);

  // Limpar o formulário
  document.getElementById('observationForm').reset();
});
