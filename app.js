const btn = document.querySelector("#btnStart");
const texts = ["jesteś dzikiem", "du it beeejjbi, du it", "Nakurwiaj Michaś", "You ken du it", "naaaah, nahhhh, nahhh, i na cyce grubasowi", "no dalej, zrób to jeszcze raz, postaraj się dla mnie", "nie przestawaj, już prawie"];
const textContainer = document.querySelector("#xyz");

btn.addEventListener("click", () => {
  const randomNumber = Math.floor(Math.random() * texts.length - 1);
  console.log(randomNumber);
  speak(texts[randomNumber]);
});

function speak(text) {
  const synth = window.speechSynthesis;
  // if (synth) {
  const utterance = new SpeechSynthesisUtterance(text);
  const voices = synth.getVoices();
  for (var i = 0; i < voices.length; i++) {
    if (voices[i].lang === "pl-PL") {
      utterance.voice = voices[i];
      break;
    }
  }

  textContainer.innerHTML += `synth:${synth};,utterance:${utterance};,voices:${voices};,`;
  synth.speak(utterance);
  // } else {
  //   alert("Nic nie powiem!");
  // }
}
