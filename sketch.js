let pianoA;
let pianoB;
let pianoBb;
let pianoCSharp;
let pianoC;
let pianoD;
let pianoEb;
let pianoE;
let pianoFSharp;
let pianoF;
let pianoGSharp;
let pianoG;
let bassDrum;
let bass;
let bell;
let blast;
let bubble;
let cello;
let clap;
let cymbal;
let drumStick;
let flexatone;
let paper;
let percussionDouble;
let percussionFast;
let percussion;
let plinks;
let ring;
let rocket;
let tambourineSmall;
let tambourineWood;
let timeWrap;
let tomTom;
let water;

var contents = "";
var count = 0;
var countToClear = 0;

function preload() {
  pianoA = loadSound('assets/sounds/piano-a.wav');
  pianoB = loadSound('assets/sounds/piano-b.wav');
  pianoBb = loadSound('assets/sounds/piano-bb.wav');
  pianoCSharp = loadSound('assets/sounds/piano-c-sharp.wav');
  pianoC = loadSound('assets/sounds/piano-c.wav');
  pianoD = loadSound('assets/sounds/piano-d.wav');
  pianoE = loadSound('assets/sounds/piano-e.wav');
  pianoEb = loadSound('assets/sounds/piano-eb.wav');
  pianoFSharp = loadSound('assets/sounds/piano-f-sharp.wav');
  pianoF = loadSound('assets/sounds/piano-f.wav');
  pianoGSharp = loadSound('assets/sounds/piano-g-sharp.wav');
  pianoG = loadSound('assets/sounds/piano-g.wav');
  bassDrum = loadSound('assets/sounds/bass-drum.wav');
  bass = loadSound('assets/sounds/bass.wav');
  bell = loadSound('assets/sounds/bell.wav');
  blast = loadSound('assets/sounds/blast.wav');
  bottle = loadSound('assets/sounds/bottle.wav');
  bubble = loadSound('assets/sounds/bubble.mp3');
  cello = loadSound('assets/sounds/cello.wav');
  clap = loadSound('assets/sounds/clap.wav');
  cymbal = loadSound('assets/sounds/cymbal.wav');
  drumStick = loadSound('assets/sounds/drum-stick.wav');
  drum = loadSound('assets/sounds/drum.wav');
  flexatone = loadSound('assets/sounds/flexatone.wav');
  paper = loadSound('assets/sounds/paper.wav');
  percussionDouble = loadSound('assets/sounds/percussion-double.wav');
  percussionFast = loadSound('assets/sounds/percussion-fast.wav');
  percussion = loadSound('assets/sounds/percussion.wav');
  plinks = loadSound('assets/sounds/plinks.wav');
  ring = loadSound('assets/sounds/ring.wav');
  rocket = loadSound('assets/sounds/rocket.wav');
  tambourineSmall = loadSound('assets/sounds/tambourine-small.wav');
  tambourineWood = loadSound('assets/sounds/tambourine-wood.wav');
  tambourine = loadSound('assets/sounds/tambourine.wav');
  timeWrap = loadSound('assets/sounds/timewrap.wav');
  tomTom = loadSound('assets/sounds/tom-tom.wav');
  water = loadSound('assets/sounds/water.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}


function draw() {
  background(255);

  fill(50);
  textSize(50);
  text(contents, 200, 50, 3000, 3000);
}

function keyTyped() {
    if (countToClear < 34) {
      if (count < 17) {
        switch(key) {

          //PIANO
          case 'q':
            pianoGSharp.play();
            contents += 'q\t';
            count++;
            countToClear++;
            break;
          case 'a':
            pianoA.play();
            contents += 'a\t';
            count++;
            countToClear++;
            break;
          case 'w':
            pianoBb.play();
            contents += 'w\t';
            count++;
            countToClear++;
            break;
          case 's':
            pianoB.play();
            contents += 's\t';
            count++;
            break;
          case 'd':
            pianoC.play();
            contents += 'd\t';
            count++;
            countToClear++;
            break;
          case 'r':
            pianoCSharp.play();
            contents += 'r\t';
            count++;
            countToClear++;
            break;
          case 'f':
            pianoD.play();
            contents += 'f\t';
            count++;
            countToClear++;
            break;
          case 't':
            pianoEb.play();
            contents += 't\t';
            count++;
            countToClear++;
            break;
          case 'g':
            pianoE.play();
            contents += 'g\t';
            count++;
            countToClear++;
            break;
          case 'h':
            pianoF.play();
            contents += 'h\t';
            count++;
            countToClear++;
            break;
          case 'u':
            pianoFSharp.play();
            contents += 'u\t';
            count++;
            countToClear++;
            break;
          case 'j':
            pianoG.play();
            contents += 'j\t';
            count++;
            countToClear++;
            break;

          // PERCUSSION
          case '0': 
            drum.play();
            contents += '0\t';
            count++;
            countToClear++;
            break;
          case '1':
            bass.play();
            contents += '1\t';
            count++;
            countToClear++;
            break;
          case '2':
            clap.play();
            contents += '2\t';
            count++;
            countToClear++;
            break;
          case '3':
            percussionFast.play();
            contents += '3\t';
            count++;
            countToClear++;
            break;
          case '4':
            percussionDouble.play();
            contents += '4\t';
            count++;
            countToClear++;
            break;
          case '5': 
            cymbal.play();
            contents += '5\t';
            count++;
            countToClear++;
            break;
          case '6': 
            drumStick.play();
            contents += '6\t';
            count++;
            countToClear++;
            break;
          case '7':
            bassDrum.play();
            contents += '7\t';
            count++;
            countToClear++;
            break;
          case '8': 
            tomTom.play();
            contents += '8\t';
            count++;
            countToClear++;
            break;
          case '9': 
            percussion.play();
            contents += '9\t';
            count++;
            countToClear++;
            break;
          case 'z': 
            bell.play();
            contents += 'z\t';
            count++;
            countToClear++;
            break;
          case 'x': 
            ring.play();
            contents += 'x\t';
            count++;
            countToClear++;
            break;
          case 'c':
            plinks.play();
            contents += 'c\t';
            count++;
            countToClear++;
            break;
          case 'v':
            bottle.play();
            contents += 'v\t';
            count++;
            countToClear++;
            break;
          case 'b':
            bubble.play();
            contents += 'b\t';
            count++;
            countToClear++;
            break;
          case 'n':
            flexatone.play();
            contents += 'n\t';
            count++;
            countToClear++;
            break;
          case 'm':
            timeWrap.play();
            contents += 'm\t';
            count++;
            countToClear++;
            break;
          case 'i':
            tambourineSmall.play();
            contents += 'i\t';
            count++;
            countToClear++;
            break;
          case 'o':
            tambourineWood.play();
            contents += 'o\t';
            count++;
            countToClear++;
            break;
          case 'p':
            tambourine.play();
            contents += 'p\t';
            count++;
            countToClear++;
            break;
          case 'k':
            rocket.play();
            contents += 'k\t';
            count++;
            countToClear++;
            break;
          case 'l':
            blast.play();
            contents += 'l\t';
            count++;
            countToClear++;
            break;
        }
      }
      else {
        contents += '\n';
        //contents = "";
        count = 0;
      } 
    }
    else {
      contents = "";
      countToClear = 0;
    }
    console.log("count: "+count);

}
