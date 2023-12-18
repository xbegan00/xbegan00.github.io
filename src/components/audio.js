// audio.js

let audioContext;
let oscillator;

export function startSound() {
  audioContext = new (window.AudioContext || window.webkitAudioContext)();
  oscillator = audioContext.createOscillator();
  oscillator.type = 'sine';
  oscillator.frequency.setValueAtTime(440, audioContext.currentTime);
  oscillator.connect(audioContext.destination);
  oscillator.start();
}

export function stopSound() {
  if (oscillator) {
    oscillator.stop();
    oscillator.disconnect();
  }

  if (audioContext) {
    audioContext.close().then(() => {
      audioContext = null;
    });
  }
}

export function restartSound() {
  stopSound();
  startSound();
}
