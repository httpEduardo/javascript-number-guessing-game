// Gera um número aleatório entre 1 e 100
const target = Math.floor(Math.random() * 100) + 1;

// Inicializa as variáveis ​​que irão manter o controle do jogo
let guess = 0;
let numGuesses = 0;

// Enquanto o palpite não for correto
while (guess !== target) {
  // peça um palpite ao usuário
  guess = Number(prompt('Adivinhe um número entre 1 e 100:'));

  // Verifique se o palpite é válido (um número entre 1 e 100)
  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert('Por favor, insira um número válido');
    continue;
  }

  // Incrementa o número de tentativas
  numGuesses++;

  // Dê dicas ao usuário sobre se o palpite é maior ou menor do que o número correto
  if (guess > target) {
    alert(`O seu palpite é muito alto. Tente novamente.`);
  } else if (guess < target) {
    alert(`O seu palpite é muito baixo. Tente novamente.`);
  }
}

// O jogo acabou, então informe ao usuário o número de tentativas que ele levou para adivinhar o número correto
alert(`Parabéns! Você adivinhou o número correto em ${numGuesses} tentativas.`);
