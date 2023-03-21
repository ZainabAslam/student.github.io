//function run when the button with similar id as fucntion is clicked
function Ahha() {
  //stop function so sound doesnt overlap eachother
    stop();
    //taking information from the given id and setting its time 0 
    document.getElementById("AhHa").currentTime = 0;
    // taking informatiion from the given id and running it
    document.getElementById("AhHa").play();
  }
  function BackOfTheNet() {
    stop();
    document.getElementById("BackOfTheNet").currentTime = 0;
    document.getElementById("BackOfTheNet").play();
  }
  function BangOutOfOrder() {
    stop();
    document.getElementById("BangOutOfOrder").currentTime = 0;
    document.getElementById("BangOutOfOrder").play();
  }
  function Dan() {
    stop();
    document.getElementById("Dan").currentTime = 0;
    document.getElementById("Dan").play();
  }
  function Goal() {
    stop();
    document.getElementById("Goal").currentTime = 0;
    document.getElementById("Goal").play();
  }
  function JurrasicPark() {
    stop();
    document.getElementById("JurrasicPark").currentTime = 0;
    document.getElementById("JurrasicPark").play();
  }
  function KissMyFace() {
    stop();
    document.getElementById("KissMyFace").currentTime = 0;
    document.getElementById("KissMyFace").play();
  }
  function SmellMyCheese() {
    stop();
    document.getElementById("SmellMyCheese").currentTime = 0;
    document.getElementById("SmellMyCheese").play();
  }
  function HelloPartridge() {
    stop();
    document.getElementById("HelloPartridge").currentTime = 0;
    document.getElementById("HelloPartridge").play();
  }
  function afraid() {
    //new stop funtion becuase they on a new html page
    stop1();
    document.getElementById("afraid-so").currentTime = 0;
    document.getElementById("afraid-so").play();
  }
  function firstclass() {
    stop1();
    document.getElementById("firstclass").currentTime = 0;
    document.getElementById("firstclass").play();
  }
  function ridofit() {
    stop1();
    document.getElementById("ridofit").currentTime = 0;
    document.getElementById("ridofit").play();
  }
  function loveto() {
    stop1();
    document.getElementById("loveto").currentTime = 0;
    document.getElementById("loveto").play();
  }
  function idiot() {
    stop1();
    document.getElementById("idiot").currentTime = 0;
    document.getElementById("idiot").play();
  }
  function mentalist() {
    stop1();
    document.getElementById("mentalist").currentTime = 0;
    document.getElementById("mentalist").play();
  }
  function nirvana() {
    stop1();
    document.getElementById("nirvana").currentTime = 0;
    document.getElementById("nirvana").play();
  }
  function no() {
    stop1();
    document.getElementById("no").currentTime = 0;
    document.getElementById("no").play();
  }
  function ok() {
    stop1();
    document.getElementById("ok").currentTime = 0;
    document.getElementById("ok").play();
  }
  function striker() {
    stop2();
    document.getElementById("striker").currentTime = 0;
    document.getElementById("striker").play();
  }
  function third() {
    stop2();
    document.getElementById("third").currentTime = 0;
    document.getElementById("third").play();
  }
  function tough() {
    stop2();
    document.getElementById("tough").currentTime = 0;
    document.getElementById("tough").play();
  }
  function um() {
    stop2();
    document.getElementById("um").currentTime = 0;
    document.getElementById("um").play();
  }
  function what() {
    stop2();
    document.getElementById("what").currentTime = 0;
    document.getElementById("what").play();
  }
  function why() {
    stop2();
    document.getElementById("why").currentTime = 0;
    document.getElementById("why").play();
  }
  function yeah() {
    stop2();
    document.getElementById("yeah").currentTime = 0;
    document.getElementById("yeah").play();
  }
  function aboot() {
    stop2();
    document.getElementById("aboot").currentTime = 0;
    document.getElementById("aboot").play();
  }
  function bugger() {
    stop2();
    document.getElementById("bugger").currentTime = 0;
    document.getElementById("bugger").play();
  }
  //settinng of stop functions
  function stop() {
    document.getElementById("AhHa").pause();
    document.getElementById("BackOfTheNet").pause();
    document.getElementById("BangOutOfOrder").pause();
    document.getElementById("Dan").pause();
    document.getElementById("Goal").pause();
    document.getElementById("JurrasicPark").pause();
    document.getElementById("KissMyFace").pause();
    document.getElementById("SmellMyCheese").pause();
    document.getElementById("HelloPartridge").pause();
  }
  function stop1() {
    document.getElementById("afraid-so").pause();
    document.getElementById("firstclass").pause();
    document.getElementById("ridofit").pause();
    document.getElementById("loveto").pause();
    document.getElementById("idiot").pause();
    document.getElementById("mentalist").pause();
    document.getElementById("nirvana").pause();
    document.getElementById("no").pause();
    document.getElementById("ok").pause();
  }
  function stop2() {
    document.getElementById("striker").pause();
    document.getElementById("third").pause();
    document.getElementById("tough").pause();
    document.getElementById("um").pause();
    document.getElementById("what").pause();
    document.getElementById("why").pause();
    document.getElementById("yeah").pause();
    document.getElementById("aboot").pause();
    document.getElementById("bugger").pause();
  }
  //text to speech code
  function tts() {
    let msg = document.getElementById("Texttospeech").value;
    let speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";
    speech.text = msg;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.cancel(speech);
    window.speechSynthesis.speak(speech);
    
    }