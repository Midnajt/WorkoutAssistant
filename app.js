const btn = document.querySelector("#btnStart");
const texts = ["jesteś dzikiem", "do it baby, do it", "Nakurwiaj Michaś", "You can do it", "naaaah, nahhhh, nahhh, i na cyce grubasowi", "no dalej, zrób to jeszcze raz, postaraj się dla mnie", "nie przestawaj, już prawie"];
function speak(text) {
  if ("speechSynthesis" in window) {
    var msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  } else {
    console.error("Speech synthesis not supported.");
  }
}

btn.addEventListener("click", () => {
  const randomNumber = Math.floor(Math.random() * 6);
  speak(texts[randomNumber]);
});
