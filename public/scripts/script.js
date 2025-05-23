const openMenu = document.getElementById('toggle-menu-open');
const closeMenu = document.getElementById('toggle-menu-close');

    openMenu.addEventListener('click', function(event){
        event.preventDefault();

        const header = document.querySelector('.header');
        const menu = document.querySelector('#menu');

        header.classList.toggle('nav-open');
        menu.classList.toggle('open');
    });

    closeMenu.addEventListener('click', function(event){
        event.preventDefault();
        const menu = document.querySelector('#menu')

        const header = document.querySelector('.header');
        header.classList.toggle('nav-open')
        menu.classList.remove('open');
    })

    
const closeBtn = document.querySelector(".close-btn");
const details = document.querySelector("details");

    closeBtn.addEventListener('click', () => {
        details.removeAttribute('open')
        
    const menu = document.querySelector('#menu')


        header.classList.toggle('nav-open');
        menu.classList.remove('open');
    });


const searchInputs = document.querySelectorAll('input[type="text"][id="search"]'); 

searchInputs.forEach(search => {
    search.addEventListener('input', function () {
        const searchValue = this.value.toLowerCase();
        const leden = document.querySelectorAll('.leden-card-grid li');

        leden.forEach(lid => {
            const title = lid.querySelector('h2').textContent.toLowerCase();
            lid.style.display = title.includes(searchValue) ? '' : 'none';
        });
    });
});
