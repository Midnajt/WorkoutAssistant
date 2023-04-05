const btn = document.querySelector("#btnStart");
const texts = ["jesteś dzikiem", "do it bejbi, do it", "Nakurwiaj Michaś", "You can do it", "naaaah, nahhhh, nahhh, i na cyce grubasowi", "no dalej, zrób to jeszcze raz, postaraj się dla mnie", "nie przestawaj, już prawie"];
// function speak(text) {
//   if ("speechSynthesis" in window) {
//     var msg = new SpeechSynthesisUtterance();
//     msg.text = text;
//     window.speechSynthesis.speak(msg);
//   } else {
//     console.error("Speech synthesis not supported.");
//   }
// }

btn.addEventListener("click", () => {
  const randomNumber = Math.floor(Math.random() * 6);
  speak(texts[randomNumber]);
});

function speak(text) {
  // Check if Web Speech API is supported
  if ("speechSynthesis" in window) {
    var msg = new SpeechSynthesisUtterance();
    msg.text = text;

    // Choose a voice that supports the language you want to speak
    var voices = window.speechSynthesis.getVoices();
    for (var i = 0; i < voices.length; i++) {
      if (voices[i].lang === "en-US" || voices[i].lang === "en_GB" || voices[i].lang === "pl-PL") {
        msg.voice = voices[i];
        break;
      }
    }

    // Speak the message
    window.speechSynthesis.speak(msg);
  } else {
    alert("Brak wsparcia dla syntezatora mowy, gadaj se sam!");
  }
}
