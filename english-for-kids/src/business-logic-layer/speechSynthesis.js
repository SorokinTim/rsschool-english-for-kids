import * as constants from './constants';

export default function getWordSynthes(word = '') {
  const message = new SpeechSynthesisUtterance(word);
  const [,, bradVoice] = speechSynthesis.getVoices();

  message.voice = bradVoice;
  message.lang = constants.DEFAULT_SPEECH_LANG;

  speechSynthesis.speak(message);
}

getWordSynthes();
