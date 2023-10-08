var menuIcone = document.querySelector('.menu-icone');
var menuEscondido = document.querySelector('.menu-mobile');


menuIcone.addEventListener('click', function() {
  var estaAtivo = menuEscondido.classList.contains('ativo');



  if (estaAtivo) {
    menuEscondido.classList.remove('ativo')
  ;
  
  } else {
    menuEscondido.classList.add('ativo');
  }

  }
);



