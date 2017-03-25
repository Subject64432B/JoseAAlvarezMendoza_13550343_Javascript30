    window.addEventListener('keydown',function(e){
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); // scope es el contexto como interactuan con el DOM
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); // todas heredan en "proyotype" o prototipo

        if (!audio) return 
        audio.currentTime = 0;
        audio.play();

        key.classList.add('playing')
    });

      function removeTransition(e){

        if(e.propertyName !== 'transform') return; //skip it if it's not a trasform
        this.classList.remove('playing'); // se supone que debe regresar a su estado origen,// ya lo hace
      }

    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));sl