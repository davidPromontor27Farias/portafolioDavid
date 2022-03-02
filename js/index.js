const navMobile = document.querySelector('.navegacion-mobile');
const iconNav = document.querySelector('#icon-nav');
let animado = document.querySelectorAll('.animado');
let iconsDark = document.querySelectorAll('.icons-mod-dark img');

document.addEventListener('DOMContentLoaded', ()=> {
    
    showNavMobile(iconNav);

    modDark();
});
window.addEventListener('scroll', mostrarScroll);


function showNavMobile(el2) {
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

function mostrarScroll(){

    let scrolTop = document.documentElement.scrollTop;

    for(let i = 0; i < animado.length; i++){
        let alturaAnimacion = animado[i].offsetTop;
        
        if(alturaAnimacion - 500 < scrolTop){
            animado[i].style.opacity = 1;
            animado[i].classList.add('aparecer');
        }
    }

}

function modDark(){
    for(let i = 0; i < iconsDark.length; i++){

        iconsDark[i].addEventListener('click', ()=>{
            document.body.classList.toggle('oscuro-agregado');

            if(document.body.classList.contains('oscuro-agregado')){
                localStorage.setItem('oscuroModo', 'true');
                iconsDark[i].src = '/img/icons8-dusk-64.png'
                
            }
            else{
                localStorage.setItem('oscuroModo', 'false');
                iconsDark[i].src = '/img/icons8-planet-60.png';

                
            }
        });
    }

    if(localStorage.getItem('oscuroModo') === 'true'){
        document.body.classList.add('oscuro-agregado');
    }
    else{
        document.classList.remove('oscuro-agregado');
    }
}