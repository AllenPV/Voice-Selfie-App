var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var Text_box = document.getElementById("Text_box");

function Start() {
    Text_box.innerHTML="";
    recognition.start();
}
recognition.onresult = function (event) {
    console.log(event);
    var Content = event.results[0][0].transcript;
    Text_box.innerHTML = Content;
    if (Content == "take my selfie") {
        console.log("Taking selfie");
        speak();
    }

}

function speak() {
    var synth = window.speechSynthesis;
    speak_data = "Taking your selfie in 5 seconds";
    var UtterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(UtterThis);
    Webcam.attach(camera);
    setTimeout(function () {
        take_selfie();
        save();
    }, 5000);
}
camera = document.getElementById("Camera");
Webcam.set({
    width: 360,
    height: 250,
    image_format: 'jpeg',
    jpeg_quality: 90
});

function take_selfie() {
    Webcam.snap(function (data_uri) {
        document.getElementById("Selfie").innerHTML = '<img id ="selfie_img" src ="' + data_uri + '"/>';
    });
}
function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfie_img").src;
    link.ref = image;
    link.click();
}