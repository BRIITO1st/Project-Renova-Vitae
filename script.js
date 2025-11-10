document.addEventListener("DOMContentLoaded", () => {
    
    // Botão WhatsApp
    function whatsappButtonLogic() {
        const whatsappButtons = document.querySelectorAll('.whatsapp-button');
        const numeroWhatsapp = "556198075609";
        const mensagemPadrao = encodeURIComponent("Olá, Dr. Nerisvaldo! Gostaria de agendar uma consulta.");
        const whatsappLink = `https://wa.me/${numeroWhatsapp}?text=${mensagemPadrao}`;
        
        whatsappButtons.forEach(button => {
            button.href = whatsappLink;
            button.target = "_blank";
        });
    }

    // Carrossel da Seção Hero
    function heroCarouselLogic() {
        const carouselContainer = document.querySelector('#hero-carousel');
        if (!carouselContainer) return;

        const images = carouselContainer.querySelectorAll('.hero-carousel-image');
        if (images.length === 0) return;

        let currentIndex = 0;
        const intervalTime = 4000;

        setInterval(() => {
            images[currentIndex].classList.remove('opacity-100');
            images[currentIndex].classList.add('opacity-0');

            currentIndex = (currentIndex + 1) % images.length;

            images[currentIndex].classList.remove('opacity-0');
            images[currentIndex].classList.add('opacity-100');
        }, intervalTime);
    }

    // Carrossel da Seção Pilares
    function pilaresCarouselLogic() {
        const carouselContainer = document.querySelector('#pilares-carousel');
        if (!carouselContainer) return; // Se o carrossel não existir, para a função

        const images = carouselContainer.querySelectorAll('.carousel-image');
        if (images.length === 0) return; // Se não houver imagens, para a função

        let currentIndex = 0;
        const intervalTime = 4000;

        setInterval(() => {
            // Esconde a imagem atual
            images[currentIndex].classList.remove('opacity-100');
            images[currentIndex].classList.add('opacity-0');

            // Calcula o próximo índice
            currentIndex = (currentIndex + 1) % images.length;

            // Mostra a próxima imagem
            images[currentIndex].classList.remove('opacity-0');
            images[currentIndex].classList.add('opacity-100');
        }, intervalTime);
    }

    // Animação de Fade-in ao Rolar
    function scrollFadeInLogic() {
        const sections = document.querySelectorAll('.fade-in-section');
        if (!sections.length) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); 
                }
            });
        }, {
            threshold: 0.1 // Ativa quando 10% da seção está visível
        });

        sections.forEach(section => {
            observer.observe(section);
        });
    }

    // Destacaa Menu Ativo (Scroll Spy)
    function scrollSpyLogic() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('nav a[href^="#"]');
        if (!sections.length || !navLinks.length) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${entry.target.id}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, {
            threshold: 0.5, // Ativa quando 50% da seção está visível
            rootMargin: "-50px 0px -50px 0px" // Ajusta a "janela" de ativação
        });

        sections.forEach(section => {
            if (section.id) { // Garante que a seção tem um ID
                observer.observe(section);
            }
        });
    }

    // Menu Hamburger
    function hamburgerMenuLogic() {
        const hamburgerButton = document.getElementById('hamburger-button');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');

        if (!hamburgerButton || !mobileMenu) return;

        // Abrir e Fechar o menu
        hamburgerButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Fechar o menu ao clicar em um link
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // --- Inicializa todas as funções ---
    whatsappButtonLogic();
    heroCarouselLogic(); 
    pilaresCarouselLogic();
    scrollFadeInLogic();
    scrollSpyLogic();
    hamburgerMenuLogic();

});

