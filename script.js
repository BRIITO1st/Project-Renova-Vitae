// Configuração do WhatsApp
const numeroWhatsapp = "556198075609"; // <-- ADICIONE O NÚMERO AQUI

const linkWhatsapp = `https://wa.me/${numeroWhatsapp}`;
const botoesWhatsapp = document.querySelectorAll('.whatsapp-button');

botoesWhatsapp.forEach(botao => {
    botao.href = linkWhatsapp;
    // Para abrir em uma nova aba
    botao.target = '_blank';
});

// Lógica do Carrossel de Imagens
const carouselImages = document.querySelectorAll('.carousel-image');
let currentImageIndex = 0;
const slideInterval = 4000; // Tempo de troca em milissegundos (4 segundos)

function showNextImage() {
    if (carouselImages.length > 0) {
        // Esconde a imagem atual
        carouselImages[currentImageIndex].classList.remove('opacity-100');
        carouselImages[currentImageIndex].classList.add('opacity-0');

        // Calcula o índice da próxima imagem
        currentImageIndex = (currentImageIndex + 1) % carouselImages.length;

        // Mostra a próxima imagem
        carouselImages[currentImageIndex].classList.remove('opacity-0');
        carouselImages[currentImageIndex].classList.add('opacity-100');
    }
}

setInterval(showNextImage, slideInterval);

// Lógica para animação ao rolar a página
const sectionsToAnimate = document.querySelectorAll('.fade-in-section');

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1 // A animação começa quando 10% do elemento está visível
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // Anima só uma vez
        }
    });
}, observerOptions);

sectionsToAnimate.forEach(section => {
    observer.observe(section);
});

// Lógica para destacar o menu ativo ao rolar
const menuLinks = document.querySelectorAll('header nav a');
const sectionsForMenu = document.querySelectorAll('section[id]');

const highlightObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        const menuLink = document.querySelector(`header nav a[href="#${id}"]`);

        if (entry.isIntersecting) {
            // Remove a classe de todos os links para limpar o estado
            menuLinks.forEach(link => {
                link.classList.remove('text-amber-500', 'font-bold');
                link.classList.add('text-gray-600', 'font-semibold');
            });
             // Adiciona a classe ao link ativo
            if(menuLink){
               menuLink.classList.add('text-amber-500', 'font-bold');
               menuLink.classList.remove('text-gray-600', 'font-semibold');
            }
        }
    });
}, { rootMargin: "-30% 0px -70% 0px" }); // Ajusta a área de detecção para ser mais central

sectionsForMenu.forEach(section => {
    highlightObserver.observe(section);
});

// Lógica para o menu hambúrguer
const hamburgerButton = document.getElementById('hamburger-button');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');

hamburgerButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Fecha o menu ao clicar em um link
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

