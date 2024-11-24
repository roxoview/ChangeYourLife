const productDesc = document.querySelector(".descProduct");
const descriptions = [
  "DEIXE A INTELIGÊNCIA ARTIFICIAL TRABALHAR POR VOCÊ",
  "SEM APARECER E SEM INVESTIR DINHEIRO",
  "Renda em Dólar sem Vender NADA",
  "CLIQUE AGORA NO BOTÃO ABAIXO, NÃO PERCA ESSA OPORTUNIDADE!",
  "De <span class='red-text'>R$297</span> por apenas 12x de: <span class='green-text'>R$ 19,78</span> ou <span class='green-text'>R$ 197,00</span> à vista"
];
let currentIndex = 0;

function changeDesc() {
  setInterval(() => {
    // Fade out
    productDesc.style.opacity = 0;

    // Espera o tempo da transição de fade-out
    setTimeout(() => {
      // Altera o texto e usa innerHTML para permitir formatação com a classe 'green-text'
      productDesc.innerHTML = descriptions[currentIndex];

      // Reseta a opacidade e faz o fade-in
      productDesc.style.opacity = 1;

      // Atualiza o índice para a próxima descrição
      currentIndex = (currentIndex + 1) % descriptions.length;
    }, 1000); // 1 segundo para esperar o fade-out antes de trocar o texto
  }, 5000); // Troca a cada 5 segundos
}

changeDesc();
