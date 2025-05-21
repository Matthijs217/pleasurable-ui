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
