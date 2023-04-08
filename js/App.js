import { SpeechSynthesizer } from "./SpeechSynthesizer.js";
import { Timer } from "./Timer.js";
import { UI } from "./UI.js";

class App extends UI {
  #SpeechSynthesizer = new SpeechSynthesizer();
  #Timer = new Timer();

  initializeApp() {
    // this.#Timer.init();
    this.#addButtonsEventListeners();
    //TODO counter od 30 do 0 w Timer
    //TODO zaprogramuj timer ktoremu bedzie przekazywany czas
    //TODO dodaj mowienie
    // this.addChaosToBtn();
  }

  #addButtonsEventListeners() {
    this.getElement(this.UiSelectors.btnStart).addEventListener("click", () => {
      this.deactivateBtn(this.getElement(this.UiSelectors.btnStart));
      this.#Timer.init();
    });
  }

  addChaosToBtn() {
    const btn = document.querySelector("#btnStart");

    btn.addEventListener("click", this.chaos);
  }

  chaos() {
    const timerSpan = document.querySelector("#timer");
    const time = document.querySelector("[data-exercise='pompki']").value;
    let currentTime = 1;

    console.log({ currentTime });
    const interval = setInterval(() => {
      if (currentTime == time / 2) {
        console.log("połowa");
      }
      console.log("interval");
      timerSpan.innerHTML = currentTime;
      if (currentTime == time) {
        clearInterval(interval);
        timerSpan.innerHTML = "Koniec";
      }
      currentTime++;
    }, 1000);

    // setTimeout(() => {
    //   clearInterval(interval);
    // }, 3000);
  }
}

window.onload = () => {
  const app = new App();
  app.initializeApp();
};
