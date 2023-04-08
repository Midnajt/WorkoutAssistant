export class UI {
  UiSelectors = {
    inpPushups: "[data-exercise='pushups']",
    inpSquats: "[data-exercise='squats']",
    inpRompers: "[data-exercise='rompers']",
    inpBreak: "[data-exercise='break']",
    exerciseMenu: "[data-exercises-menu]",
    exerciseInfo: "[data-timer-exercises]",
    exerciseName: "[data-exercise-name]",
    exerciseTime: "[data-exercise-time]",
    breakInfo: "[data-timer-break]",
    breakTime: "[data-break-time]",
    btnStart: "#btnStart",
  };

  getElement(selector) {
    return document.querySelector(selector);
  }

  getElements(selector) {
    return document.querySelectorAll(selector);
  }

  showElement(selector) {
    document.querySelector(selector).classList.remove("hide");
  }

  hideElement(selector) {
    document.querySelector(selector).classList.add("hide");
  }

  showConsole(txt) {
    console.log(txt);
  }

  deactivateBtn(selector) {
    selector.classList.add("bg-secondary");
    selector.classList.remove("bg-primary");
    selector.disabled = true;
  }

  activateBtn(selector) {
    selector.classList.add("bg-primary");
    selector.classList.remove("bg-secondary");
    selector.disabled = false;
  }
}
