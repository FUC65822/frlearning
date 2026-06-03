export const playTTS = (text: string, lang: string = 'fr-FR') => {
  if (typeof window === 'undefined' || !window.speechSynthesis) return;
  
  // Cancel any ongoing speech
  window.speechSynthesis.cancel();
  
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  utterance.rate = 0.9; // Slightly slower for language learners
  
  window.speechSynthesis.speak(utterance);
};
