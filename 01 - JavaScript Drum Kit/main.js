
function playAudio(event) {

    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);

    if(!audio || !key) return;

    key.classList.add('playing');

    // setTimeout(function() {key.classList.remove('playing')}, 500);
    //not good idea, as it needs to sync with timeout function in css (eg transition in .key)

    audio.currentTime = 0; // rewind to the start
    audio.play();
}

window.addEventListener('keydown', playAudio);


function endTransition(event) {
    if(event.propertyName !== 'transform') return; // skip it if it's not a transform
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', endTransition));