const openMenu = document.getElementById('toggle-menu-open');

    openMenu.addEventListener('click', function(event){
        event.preventDefault();

        const header = document.querySelector('.header');
        header.classList.toggle('nav-open')
    })

const closeMenu = document.getElementById('toggle-menu-close');

    closeMenu.addEventListener('click', function(event){
        event.preventDefault();

        const header = document.querySelector('.header');
        header.classList.toggle('nav-open')
    })

    
const closeBtn = document.querySelector(".close-btn");
const details = document.querySelector("details");

    closeBtn.addEventListener('click', () => {
        details.removeAttribute('open')
    });
