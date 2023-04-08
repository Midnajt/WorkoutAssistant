export class SpeechSynthesizer {
  init() {
    console.log("hello SpeechSynthesizer");
  }

  speak(text) {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    const voices = synth.getVoices();
    for (var i = 0; i < voices.length; i++) {
      if (voices[i].lang === "pl-PL") {
        utterance.voice = voices[i];
        break;
      }
    }

    synth.speak(utterance);
  }

  // const btn = document.querySelector("#btnStart");
  // // const texts = ["jesteś dzikiem", "du it beeejjbi, du it", "Nakurwiaj Michaś", "You ken du it", "naaaah, nahhhh, nahhh, i na cyce grubasowi", "no dalej, zrób to jeszcze raz, postaraj się dla mnie", "nie przestawaj, już prawie"];
  // const texts = ["1", "2", "3", "4", "5", "6"];
  // const textContainer = document.querySelector("#xyz");

  // btn.addEventListener("click", () => {

  //   //   const randomNumber = Math.floor(Math.random() * texts.length);
  // //   speak(texts[randomNumber]);
  // // });

  // function speak(text) {
  //   const synth = window.speechSynthesis;
  //   const utterance = new SpeechSynthesisUtterance(text);
  //   const voices = synth.getVoices();
  //   for (var i = 0; i < voices.length; i++) {
  //     if (voices[i].lang === "pl-PL") {
  //       utterance.voice = voices[i];
  //       break;
  //     }
  //   }

  //   textContainer.innerHTML += `synth:${synth};,utterance:${utterance};,voices:${voices};,`;
  //   synth.speak(utterance);
  // }
}
