// declare variable that stores p element
let p;
let lineBreak;
let animation;

// declare variables for text input from keyPressed event
let txt = "";
let letter = "";
let poem = "";
let word = "";

// declare boolean variables for key loop
let firstTime = false;
let secondTime = false;
let thirdTime = false;
let fourthTime = false;
let fifthTime = false;

// declare number keyCounter
let keyCounter = 0;

// declare variable for indexing
let i = 0;

// declare control parameter for changing background color
let bgColor;

let dictData;

// declare variables for video
let vid, vid1, vid2, vid3, vid4, vid5;
let audio1;

function setup() {
  // noCanvas();
  bgColor = color(225);
  loadJSON("words.json", gotData);
  let c = createCanvas(windowWidth / 2, windowHeight);
  // animation = createVideo("", gotAnimation);
  c.parent("rightHalf");
  p = createP("hello");
  p.parent("leftHalf");

  vid = createVideo("comps/sound-2.mp4");
  vid1 = createVideo("comps/sound-1.mp4");
  vid2 = createVideo("comps/sound-5.mp4");
  vid3 = createVideo("comps/sound-6.mp4");
  vid4 = createVideo("comps/sound-8.mp4");
  vid5 = createVideo("comps/sound-9.mp4");

  audio1 = createAudio("comps/sound-1.mp4");

  vid.position(windowWidth / 2, 0);
  vid1.position(windowWidth / 2, 0);
  vid2.position(windowWidth / 2, 0);
  vid3.position(windowWidth / 2, 0);
  vid4.position(windowWidth / 2, 0);
  vid5.position(windowWidth / 2, 0);

  vid.id("video-0");
  vid1.id("video-1");
  vid2.id("video-2");
  vid3.id("video-3");
  vid4.id("video-4");
  vid5.id("video-5");

  vid.parent("rightHalf");
  vid1.parent("rightHalf");
  vid2.parent("rightHalf");
  vid3.parent("rightHalf");
  vid4.parent("rightHalf");
  vid5.parent("rightHalf");
  vid.hide();
  vid1.hide();
  vid2.hide();
  vid3.hide();
  vid4.hide();
  vid5.hide();
}

function gotAnimation(anim) {
  animLoaded = anim;
}

function gotData(data) {
  dictData = data;
}

// declare function, that clears screen
function reset() {
  txt = "";
  poem = "";
  keyCounter = 0;
  firstTime = false;
  secondTime = false;
  thirdTime = false;
  fourthTime = false;
  fifthTime = false;
  vid.time(0);
  vid1.time(0);
  vid2.time(0);
  vid3.time(0);
  vid4.time(0);
  vid5.time(0);
  vid.pause();
  vid1.pause();
  vid2.pause();
  vid3.pause();
  vid4.pause();
  vid5.pause();
  // bgColor = color(220);
}

function keyPressed() {
  //If OPTION, SHIFT, COMMAND or CONTROL keys are pressed, then nothing is printed to p element in html
  if (
    keyCode === 91 ||
    keyCode === 16 ||
    keyCode === 17 ||
    keyCode === 18 ||
    keyCode === 224
  ) {
  } else if (keyCode === 8) {
    reset();
    p.html("hello again");
  } else {
    // if statement that arrange words:
    if (!fifthTime && keyCounter === 4) {
      fifthTime = true;
      fourthTime = false;
      keyCounter = 0;
      // bgColor = color(125, 25, 0);
      letter = `${key}`;
      txt = txt + letter;
      i = floor(random(dictData.dictionary[0].words.length));
      word = dictData.dictionary[0].words[i].present;
      // lineBreak = createElement("br");
      poem = poem + word + ". ";
      p.html(poem);
      vid5.volume();
      vid5.loop();
    } else if (!fourthTime && keyCounter === 3) {
      fourthTime = true;
      thirdTime = false;
      keyCounter++;
      // bgColor = color(125, 25, 75);
      letter = `${key}`;
      txt = txt + letter;
      i = floor(random(dictData.dictionary[3].words.length));
      word = dictData.dictionary[3].words[i];
      poem = poem + word + " ";
      p.html(poem);
      vid4.volume();
      vid4.loop();
    } else if (!thirdTime && keyCounter === 2) {
      thirdTime = true;
      secondTime = false;
      keyCounter++;
      // bgColor = color(125, 89, 200);
      letter = `${key}`;
      txt = txt + letter;
      i = floor(random(dictData.dictionary[0].words.length));
      word = dictData.dictionary[0].words[i].present;
      poem = poem + word + " ";
      p.html(poem);
      vid1.volume();
      vid1.loop();
    } else if (!secondTime && keyCounter === 1) {
      secondTime = true;
      firstTime = false;
      keyCounter++;
      // bgColor = color(125, 0, 220);
      letter = `${key}`;
      txt = txt + letter;
      i = floor(random(dictData.dictionary[1].words.length));
      word = dictData.dictionary[1].words[i];
      poem = poem + word + " ";
      p.html(poem);
      vid.volume();
      vid.loop();
    } else if (!firstTime) {
      firstTime = true;
      fifthTime = false;
      keyCounter++;
      // bgColor = color(75, 45, 200);
      letter = `${key}`;
      txt = txt + letter;
      i = floor(random(dictData.dictionary[3].words.length));
      word = dictData.dictionary[3].words[i];
      poem = poem + word + " ";
      p.html(poem);
      vid2.volume();
      vid2.loop();
    }
  }
}

function draw() {
  // background(225);
  clear();
  textAlign(CENTER);
  textSize(16);
  fill(255);
  text(txt, 40, height / 2, 600, 320);
  blendMode(DIFFERENCE);
  image(vid, 0, 0);
  image(vid1, 0, 0);
  image(vid2, 0, 0);
  image(vid4, 0, 0);
  image(vid5, 0, 0);
  // text(word, 40, height / 3, 600, 320);
}
