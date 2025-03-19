let enabled = false;
const synth = window.speechSynthesis;
let selectedVoice = null;
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// Load preferred voice if available
const loadVoice = (preferredName = "Google UK English Female") => {
  const voices = synth.getVoices();
  const match = voices.find((v) => v.name === preferredName);
  selectedVoice = match || voices.find((v) => v.default) || voices[0] || null;
};

// Ensure voices are loaded properly (some browsers delay loading)
if (synth.onvoiceschanged !== undefined) {
  synth.onvoiceschanged = () => {
    loadVoice();
  };
}

// Initial load attempt (in case voices are already available)
loadVoice();

const speak = (text) => {
  if (!enabled || !synth) return;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.voice = selectedVoice;
  utterance.rate = 1;
  utterance.pitch = 1;
  synth.cancel();
  synth.speak(utterance);
};

const playBeep = async (frequency = 880, duration = 200, volume = 0.15) => {
  if (!enabled) return;

  try {
    if (audioCtx.state === "suspended") {
      await audioCtx.resume();
    }

    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(frequency, audioCtx.currentTime);
    gainNode.gain.setValueAtTime(volume, audioCtx.currentTime);

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    oscillator.start();
    oscillator.stop(audioCtx.currentTime + duration / 1000);
  } catch (err) {
    console.warn("Unable to play beep:", err);
  }
};

const AudioManager = {
  enable: () => { enabled = true; },
  disable: () => { enabled = false; },
  isEnabled: () => enabled,
  speak,
  playStartCue: () => playBeep(880, 150, 0.15),
  playEndCue: () => playBeep(440, 150, 0.15),
};

export default AudioManager;
