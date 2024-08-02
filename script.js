        // Inicio Efeito Scrool no Banner
        let currentIndex = 0;
        const slides = document.querySelector('.slides');
        const totalSlides = document.querySelectorAll('.slide').length;

        function showNextSlide() {
            currentIndex = (currentIndex + 1) % totalSlides;
            slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        setInterval(showNextSlide, 3000); // Muda a cada 3 segundos
        // Fim Efeito Scrool no Banner
        //Inicio Menu Toggle
        document.addEventListener('DOMContentLoaded', function() {
        const menuToggle = document.querySelector('.menu-toggle');
        const navMenu = document.querySelector('nav .ul');

        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    });
    //Fim Menu Toggle
   // Inicio Depoimentos
document.addEventListener('DOMContentLoaded', function() {
    let testimonials = document.querySelector('.testimonial-slider');
    let testimonialsArray = Array.from(testimonials.children);
    let index = 0;
    let interval;

    function showTestimonial(newIndex) {
        testimonialsArray[index].style.display = 'none'; // Esconde o atual
        index = newIndex;
        testimonialsArray[index].style.display = 'block'; // Mostra o novo
    }

    function showNextTestimonial() {
        let newIndex = (index + 1) % testimonialsArray.length;
        showTestimonial(newIndex);
    }

    function startAutoSlide() {
        interval = setInterval(showNextTestimonial, 3000); // Troca a cada 3 segundos
    }

    function stopAutoSlide() {
        clearInterval(interval);
    }

    testimonials.addEventListener('mouseenter', stopAutoSlide);
    testimonials.addEventListener('mouseleave', startAutoSlide);

    showTestimonial(index); // Mostra o primeiro depoimento
    startAutoSlide(); // Inicia a rotação automática
    
});

document.addEventListener('DOMContentLoaded', function () {
    const readMoreButtons = document.querySelectorAll('.read-more');

    readMoreButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            const postContent = this.previousElementSibling;
            if (postContent.classList.contains('extra-content')) {
                postContent.style.display = postContent.style.display === 'none' ? 'block' : 'none';
                this.textContent = this.textContent.includes('Mostrar mais') ? 'Leia menos' : 'Mostrar mais';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const likeButtons = document.querySelectorAll('.like-button');

    likeButtons.forEach(button => {
        button.addEventListener('click', function () {
            const likeCount = this.nextElementSibling;
            let count = parseInt(likeCount.textContent);
            likeCount.textContent = count + 1;
        });
    });

    const commentButtons = document.querySelectorAll('.comment-button');

    commentButtons.forEach(button => {
        button.addEventListener('click', function () {
            alert('Funcionalidade de comentários ainda não implementada.');
        });
    });
});
