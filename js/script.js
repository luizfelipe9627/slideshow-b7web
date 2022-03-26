// Está armazenando a quantidade de imagens que tem:
let totalSlides = document.querySelectorAll('.slider-img').length;

// Está falando para começar sempre do slide 0:
let currentSlide = 0;

// Usado para puxar a o tamanho dos slider e aplicar ela baseado na tela do usuário:
let sliderWidth = document.querySelector('.slider').clientWidth;

// Está puxando o valor do sliderWidth, e multiplicando por 3 que é a quantidade de imagens no totalSlides, assim fazendo ocupar a tela na medida pedida:
document.querySelector('.slider-width').style.width =  `${sliderWidth * totalSlides}px`;

// Usado para arrumar a altura dos controles. Só pegar a altura dos slider e aplicar no controls:
document.querySelector('.slider-controls').style.height = `${document.querySelector('.slider').clientHeight}px`;

// Usado para arrumar a largura dos controles. Só pegar a largura armazenada no sliderWidth e aplicar no controle:
document.querySelector('.slider-controls').style.width = `${sliderWidth}px`;

// Uma função responsável por ir para o slide anterior:
function goPrev() {
    // Ele pega o currentSlide e diminui ele:
    currentSlide--;
    // Seguindo a condição do IF, ele pega o totalSlides e caso for menor que zero ele vai até o ultimo slide, no caso o 2(lembrando que começa do 0 e vai até o 2):
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    // Atualiza a margin do slide para ele rodar:
    updateMargin();
}

// Uma função responsável por ir para o proximo slide:
function goNext() {
    // Ele pega o currentSlide e aumenta ele:
    currentSlide++;
    // Seguindo a condição do IF, ele pega o totalSlides e caso for maior do que o totalSlides -1, no caso se ele for 2, então o currentSlide vai passar a ser 0 assim voltando para o slide padrão no inicio:
    if(currentSlide > (totalSlides - 1)) {
        currentSlide = 0
    }
    // Atualiza a margin do slide para ele rodar:
    updateMargin();
}

// Função responsável para definir se vai para o proximo ou ultimo:
function updateMargin() {
    // Responsável por aplicar o width na proporção certa da tela do usuário,
    let sliderImgWidth = document.querySelector('.slider-img').clientWidth
    // A nova margem vai ser o numero do currentSlide(no caso 0) vezes a largura da tela do usuário:
    let newMargin = (currentSlide * sliderImgWidth);
    // Ele pega o slider-width e seta o valor do Margin-left dele, negativando o newMargin e assim fazendo ele ir para o proximo ou ultimo slide:
    document.querySelector('.slider-width').style.marginLeft = `-${newMargin}px`
}

// Usado para passar os slides sozinho. Só tirar de dentro do comentário:
setInterval(goNext, 4000)