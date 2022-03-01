const navMobile = document.querySelector('.navegacion-mobile');
const iconNav = document.querySelector('#icon-nav');


document.addEventListener('DOMContentLoaded', ()=> {
    
    showNavMobile(navMobile, iconNav);
});



function showNavMobile(el1, el2) {
    el2.addEventListener('click', () =>{
        if(navMobile.classList.contains('show-nav-mobile')){
            navMobile.classList.remove('show-nav-mobile');
            iconNav.src = '/iconsSocial/icons8-menu.svg';
        }
        else{
            navMobile.classList.add('show-nav-mobile');
            iconNav.src = '/img/icons8-eliminar.svg';
        }
    })
}