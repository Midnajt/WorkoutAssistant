import { UI } from "./UI.js";
import { SpeechSynthesizer } from "./SpeechSynthesizer.js";

const EXERCISESNUMBER = 4; // TODO w przyszlosci dodac opcje modyfikowania ilosci cwiczen
const TIMETOSTART = 20; // TODO w przyszlosci dodac opcje modyfikowania ilosci cwiczen

export class Timer extends UI {
  #SpeechSynthesizer = new SpeechSynthesizer();
  #exercises = EXERCISESNUMBER;
  #counterTime = TIMETOSTART;
  #pushups;
  #squats;
  #rompers;
  #break;

  init() {
    this.#handleElementes();
    this.#initCounter();
    //TODO init counter od 30 do
    //TODO init timer z cwiczeniami
  }

  #handleElementes() {
    this.#pushups = this.getElement(this.UiSelectors.inpPushups).value;
    this.#squats = this.getElement(this.UiSelectors.inpSquats).value;
    this.#rompers = this.getElement(this.UiSelectors.inpRompers).value;
    this.#break = this.getElement(this.UiSelectors.inpBreak).value;
  }

  #initCounter() {
    this.getElement(this.UiSelectors.exerciseName).innerHTML = "Start za: ";
    this.getElement(this.UiSelectors.exerciseTime).innerHTML = this.#counterTime;
    this.#startCounter();
  }

  #startCounter() {
    this.showElement(this.UiSelectors.exerciseInfo);
    let intervalTime = this.#counterTime;

    const interval = setInterval(() => {
      intervalTime--;
      this.getElement(this.UiSelectors.exerciseTime).innerHTML = intervalTime;

      if (intervalTime == 0) {
        clearInterval(interval);
        this.#initTimer();
      }
    }, 1000);
  }

  #initTimer() {
    this.#makeExercise(this.#pushups);
  }

  #makeExercise(exercise) {
    let exerciseTime = exercise;
    this.getElement(this.UiSelectors.exerciseName).innerHTML = `${this.getElement(this.UiSelectors.inpPushups).dataset.name}: `;
    this.getElement(this.UiSelectors.exerciseTime).innerHTML = exerciseTime;

    const interval = setInterval(() => {
      exerciseTime--;
      if (exerciseTime == 0) {
        console.log("stop");
        clearInterval(interval);
        this.#makeBreak();
      } else if (exerciseTime == exercise / 2) {
        console.log("połowa");
        this.#SpeechSynthesizer.speak("Połowa za tobą");
        this.getElement(this.UiSelectors.exerciseTime).innerHTML = exerciseTime;
      } else if (exerciseTime == 3) {
        this.#SpeechSynthesizer.speak("3");
        this.getElement(this.UiSelectors.exerciseTime).innerHTML = exerciseTime;
      } else if (exerciseTime == 2) {
        this.#SpeechSynthesizer.speak("2");
        this.getElement(this.UiSelectors.exerciseTime).innerHTML = exerciseTime;
      } else if (exerciseTime == 1) {
        this.#SpeechSynthesizer.speak("1");
        this.getElement(this.UiSelectors.exerciseTime).innerHTML = exerciseTime;
      } else {
        this.getElement(this.UiSelectors.exerciseTime).innerHTML = exerciseTime;
      }
    }, 1000);
  }

  #makeBreak() {
    let breakTime = this.#break;
    this.hideElement(this.UiSelectors.exerciseInfo);
    this.getElement(this.UiSelectors.breakTime).innerHTML = breakTime;
    this.showElement(this.UiSelectors.breakInfo);

    const interval = setInterval(() => {
      breakTime--;
      if (breakTime == 0) {
        console.log("stop break");
        clearInterval(interval);
        console.log("nastepne cwiczenie");
      }
      this.getElement(this.UiSelectors.breakTime).innerHTML = breakTime;
    }, 1000);
  }
}
