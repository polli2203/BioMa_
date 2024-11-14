javascript
// Simulação de salvar observação
document.getElementById("observation-form").addEventListener("submit", function(event) {
  event.preventDefault();  // Evita o envio padrão do formulário

  // Captura os dados do formulário
  const species = document.getElementById("species").value;
  const location = document.getElementById("location").value;
  const notes = document.getElementById("notes").value;

  // Exibe a confirmação
  alert(`Observação salva:\nEspécie: ${species}\nLocalização: ${location}\nNotas: ${notes}`);
  
  // Limpa o formulário
  document.getElementById("observation-form").reset();
});