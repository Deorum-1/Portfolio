// Lightweight Web Audio API synthesizer for tactile UI micro-interactions
let audioCtx = null;
let soundEnabled = false;

export function toggleSound() {
  soundEnabled = !soundEnabled;
  if (soundEnabled && !audioCtx) {
    try {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    } catch (e) {
      console.warn("Web Audio not supported", e);
    }
  }
  if (soundEnabled) {
    playPopSound(880, 0.04);
  }
  return soundEnabled;
}

export function isSoundEnabled() {
  return soundEnabled;
}

export function playPopSound(freq = 600, duration = 0.05) {
  if (!soundEnabled) return;
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(freq * 0.5, audioCtx.currentTime + duration);

    gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (err) {
    // Audio contexts might be blocked until user gesture, safely ignore
  }
}
