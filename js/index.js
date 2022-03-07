const navMobile = document.querySelector('.navegacion-mobile');
const iconNav = document.querySelector('#icon-nav');
let animado = document.querySelectorAll('.animado');
let iconsDark = document.querySelectorAll('.icons-mod-dark img');
const typed = new Typed('.typed', {
    // strings: [
    //     '<i class="skills-col">HTML5</i>', 
    //     '<i class="skills-col">CSS3</i>', 
    //     '<i class="skills-col">Sass</i>', 
    //     '<i class="skills-col">Javascript', 
    //     '<i class="skills-col">Git</i>'
    // ],
    stringsElement: "#cadenas-texto",
    typeSpeed: 75,
    startDelay: 300,
    backSpeed: 75,
    smartBackspace: true,
    shuffle: false,
    backDelay: 1500,
    loop: true,
    loopCount: false,
    showCursor: true,
    cursorChar: '|'

});

document.addEventListener('DOMContentLoaded', ()=> {
    
    showNavMobile(iconNav);

    modDark();
    smoothScroll();
});
window.addEventListener('scroll', mostrarScroll);


function showNavMobile(el2) {
    el2.addEventListener('click', () =>{
        if(navMobile.classList.contains('show-nav-mobile')){
            navMobile.classList.remove('show-nav-mobile');
            iconNav.src = '/iconsSocial/icons8-menu.svg';
            iconNav.classList.remove('squineX');
        }
        else{
            navMobile.classList.add('show-nav-mobile');
            iconNav.src = '/img/icons8-eliminar.svg';
            iconNav.classList.add('squineX');
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

function smoothScroll(){

    const links = document.querySelectorAll('.behavior a');

    for(let i = 0; i < links.length; i++){
        
        links[i].addEventListener('click', function(e){
            e.preventDefault();
            const seccion = document.querySelector(e.target.attributes.href.value);

            seccion.scrollIntoView({
                behavior: 'smooth'
            })
        })
    }
}