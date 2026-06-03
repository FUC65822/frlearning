export const initTTS = () => {
  if (typeof window !== 'undefined' && window.speechSynthesis) {
    // Calling getVoices() forces some browsers to load the voices asynchronously
    window.speechSynthesis.getVoices();
    window.speechSynthesis.onvoiceschanged = () => {
      window.speechSynthesis.getVoices();
    };
  }
};

export const playTTS = (text: string, rate: number = 0.9) => {
  if (typeof window === 'undefined' || !window.speechSynthesis) return;
  
  window.speechSynthesis.cancel();
  
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'fr-FR'; 
  utterance.rate = rate; 

  const voices = window.speechSynthesis.getVoices();
  // Try to find a French voice
  const frVoice = voices.find(v => v.lang.startsWith('fr'));
  if (frVoice) {
    utterance.voice = frVoice;
  }
  
  window.speechSynthesis.speak(utterance);
};
