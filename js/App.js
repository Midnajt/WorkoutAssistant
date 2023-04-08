import { SpeechSynthesizer } from "./SpeechSynthesizer.js";

class App {
  #SpeechSynthesizer = new SpeechSynthesizer();

  initializeApp() {
    // console.log("hello js");
    // this.#SpeechSynthesizer.init();
    this.chaos();
  }

  chaos() {
    console.log("chaos");
  }
}

window.onload = () => {
  const app = new App();
  app.initializeApp();
};
