// efeito digitação
function typeWriter(elemento) {
    const textArray = elemento.innerHTML.split('');
    elemento.innerHTML = ''

    textArray.forEach((letra, i) => {
        setTimeout(function () {
            elemento.innerHTML += letra

        }, 75 * i)
    });

    console.log(textArray)
}
const titulo = document.querySelector('#effect-write');

typeWriter(titulo)

// efeito aparecimento
const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
      const context = this;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll() {
    const windowTop = window.pageYOffset + (window.innerHeight + 50);
    target.forEach(function (element) {
        if ((windowTop) > element.offsetTop) {
            element.classList.add(animationClass);
        } else {
            element.classList.remove(animationClass);
        }
    })
}

animeScroll();

if (target.length) {
    window.addEventListener('scroll', debounce(function () {
        animeScroll();
    }, 200));
}

// tela de carregamento

$(window).on("load",function(){
    $(".loader-wrapper").fadeOut("slow");
});

