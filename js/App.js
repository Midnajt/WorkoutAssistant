import { SpeechSynthesizer } from "./SpeechSynthesizer.js";

class App {
  #SpeechSynthesizer = new SpeechSynthesizer();

  initializeApp() {
    // console.log("hello js");
    // this.#SpeechSynthesizer.init();
    this.addChaosToBtn();
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
