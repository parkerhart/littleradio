'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var color1 = '#81daef',
    color2 = '#6dbc99',
    color3 = '#f4a86e';

//custom shape note1

var TwoNote = function (_mojs$CustomShape) {
  _inherits(TwoNote, _mojs$CustomShape);

  function TwoNote() {
    _classCallCheck(this, TwoNote);

    return _possibleConstructorReturn(this, _mojs$CustomShape.apply(this, arguments));
  }

  TwoNote.prototype.getShape = function getShape() {
    return '<path d="M21.511,9.995c-0.6-0.585-1.221-1.19-1.668-2.356c-0.085-0.222-0.319-0.351-0.549-0.308 c-0.234,0.043-0.403,0.247-0.403,0.484v10.18c-0.561-0.318-1.291-0.417-2.065-0.264c-1.603,0.318-2.858,1.582-2.858,2.878 c0,0.564,0.242,1.074,0.68,1.434c0.431,0.354,1.013,0.539,1.658,0.539c0.23,0,0.468-0.024,0.71-0.072 c1.603-0.318,2.858-1.582,2.858-2.878c0-0.001,0-0.003,0-0.004h0V9.684c0.314,0.399,0.641,0.717,0.948,1.017 c0.846,0.824,1.513,1.475,1.513,3.514h0.985C23.322,11.76,22.401,10.863,21.511,9.995z M16.827,21.546 c-0.623,0.123-1.202,0.025-1.553-0.263c-0.213-0.174-0.321-0.401-0.321-0.673c0-0.815,0.946-1.69,2.065-1.913 c0.177-0.035,0.35-0.052,0.516-0.052c0.417,0,0.786,0.109,1.037,0.315c0.213,0.174,0.321,0.401,0.321,0.673 C18.892,20.448,17.946,21.324,16.827,21.546z"/><path d="M15.446,13.234c0-0.001,0-0.003,0-0.004h0V1.909c0-0.158-0.076-0.307-0.204-0.399c-0.129-0.093-0.294-0.117-0.444-0.068 L5.937,4.395C5.736,4.462,5.601,4.65,5.601,4.862v9.688c-0.561-0.318-1.291-0.417-2.065-0.264c-1.603,0.318-2.858,1.582-2.858,2.878 c0,0.564,0.242,1.074,0.68,1.434c0.431,0.354,1.013,0.539,1.658,0.539c0.23,0,0.468-0.024,0.71-0.072 c1.603-0.318,2.858-1.582,2.858-2.878c0-0.001,0-0.003,0-0.004h0V8.171l7.876-2.625v6.051c-0.561-0.318-1.291-0.417-2.065-0.264 c-1.603,0.318-2.858,1.582-2.858,2.878c0,0.564,0.242,1.074,0.68,1.434c0.431,0.354,1.013,0.539,1.658,0.539 c0.23,0,0.468-0.024,0.71-0.072C14.191,15.795,15.446,14.53,15.446,13.234z M3.536,18.1c-0.623,0.123-1.202,0.025-1.553-0.263 c-0.213-0.174-0.321-0.401-0.321-0.673c0-0.815,0.946-1.69,2.065-1.913c0.177-0.035,0.35-0.052,0.516-0.052 c0.417,0,0.786,0.109,1.037,0.315c0.213,0.174,0.321,0.401,0.321,0.673C5.601,17.002,4.655,17.878,3.536,18.1z M12.397,15.147 c-0.623,0.123-1.202,0.025-1.553-0.263c-0.213-0.174-0.321-0.401-0.321-0.673c0-0.815,0.946-1.69,2.065-1.913 c0.177-0.035,0.35-0.052,0.516-0.052c0.417,0,0.786,0.109,1.037,0.315c0.213,0.174,0.321,0.401,0.321,0.673 C14.461,14.049,13.516,14.925,12.397,15.147z M14.461,4.507L6.585,7.133V5.217l7.876-2.625V4.507z"/>';
  };

  return TwoNote;
}(mojs.CustomShape);

mojs.addShape('twoNote', TwoNote);

//custom shape note1

var OneNote = function (_mojs$CustomShape2) {
  _inherits(OneNote, _mojs$CustomShape2);

  function OneNote() {
    _classCallCheck(this, OneNote);

    return _possibleConstructorReturn(this, _mojs$CustomShape2.apply(this, arguments));
  }

  OneNote.prototype.getShape = function getShape() {
    return '<path d="M18.709,2.871L11.878,1.82c-0.36-0.056-0.722,0.048-0.998,0.285c-0.275,0.236-0.433,0.58-0.433,0.943V15.7 c-0.66-0.593-1.529-0.957-2.484-0.957c-2.055,0-3.726,1.671-3.726,3.726s1.671,3.726,3.726,3.726s3.726-1.671,3.726-3.726V7.394 l6.642,1.022c0.36,0.055,0.723-0.049,0.998-0.285c0.275-0.237,0.433-0.58,0.433-0.943v-3.09C19.762,3.481,19.319,2.965,18.709,2.871 z M7.964,20.953c-1.37,0-2.484-1.114-2.484-2.484s1.114-2.484,2.484-2.484s2.484,1.114,2.484,2.484S9.333,20.953,7.964,20.953z M18.52,7.189L11.69,6.138v-3.09l6.831,1.051L18.52,7.189z"/>';
  };

  OneNote.prototype.getLength = function getLength() {
    return 200;
  }; // optional

  return OneNote;
}(mojs.CustomShape);

mojs.addShape('oneNote', OneNote);

// now it is avaliable to use on mo.js Shape constructor
var note_opts_two = {
  shape: 'twoNote',
  scale: { 5: 20 },
  y: { 20: -10 },
  duration: 3000,
  easing: 'sin.out'
};

// now it is avaliable to use on mo.js Shape constructor
var note_opts_one = {
  shape: 'oneNote',
  scale: { 7: 20 },
  y: { 20: -10 },
  duration: 2000,
  easing: 'sin.out'
};

var note1 = new mojs.ShapeSwirl(_extends({}, note_opts_two, {
  fill: { 'cyan': color2 },
  swirlSize: 15,
  swirlFrequency: 20
})).then({
  opacity: 0,
  duration: 200,
  easing: 'sin.in'
});

var note2 = new mojs.ShapeSwirl(_extends({}, note_opts_two, {
  x: { 0: 100 },
  fill: { 'cyan': color3 },
  y: { 20: -30 },
  swirlSize: 15,
  swirlFrequency: 10,
  delay: 100
})).then({
  opacity: 0,
  duration: 200,
  easing: 'sin.in'
});

var note3 = new mojs.ShapeSwirl(_extends({}, note_opts_one, {
  fill: color1,
  y: { 20: -70 },
  swirlSize: 20,
  swirlFrequency: 15,
  delay: 200
})).then({
  opacity: 0,
  duration: 200,
  easing: 'sin.in'
});

var note4 = new mojs.ShapeSwirl(_extends({}, note_opts_one, {
  x: { 10: -100 },
  fill: { 'cyan': '#9398f9' },
  y: { 10: -40 },
  swirlSize: 15,
  swirlFrequency: 12,
  delay: 300
})).then({
  opacity: 0,
  duration: 200,
  easing: 'sin.in'
});

var timeline = new mojs.Timeline({
  repeat: 999
});

timeline.add(note1, note2, note3, note4).play();

//new MojsPlayer({ add: timeline });

var radio = document.querySelector('#radio'),
    shadow = document.querySelector('#shadow');

var rockingEasing = mojs.easing.path('M0,351S16.7,59.7,64.7,60.3c0,0,25-11,26.3,139.7,1.3,144.3,31.3,129.3,31.3,129.3S159,339,159,200c0-147,37-139.9,37-139.9S226.4,45.7,223.7,200c-2.7,151.2,24.7,128,24.7,128s36.9,10.5,38.7-128c2-153,39.7-140.4,39.7-140.4s36.3-9.9,41,186.1c0,0,.7,110.3,32.3,105.3');
var jumpEasing = mojs.easing.path('M0,400,77.7,43,117,239,143,77s16,264,42.7,251.3,11.7-379,37.7-315S235,303,257,235.7,281,61.7,285.7,97,305,262.3,311,209.3s25.3-119,34-46.3,55,237,55,237');

new mojs.Tween({
  repeat: 999,
  duration: 650,
  onUpdate: function onUpdate(progress) {
    var rockingProgress = rockingEasing(progress),
        jumpProgress = jumpEasing(progress);
    radio.style.transform = 'translateX(' + rockingProgress + 'px) translateY(' + 0.25 * jumpProgress + 'px)  rotate(' + rockingProgress + 'deg)';
  }
}).play();

new mojs.Tween({
  repeat: 999,
  duration: 650,
  onUpdate: function onUpdate(progress) {
    var rockingProgress = rockingEasing(progress);
    shadow.style.transform = 'translateX(' + -0.5 * rockingProgress + 'px) rotate(' + -0.5 * rockingProgress + 'deg)';
  }
}).play();

var sound = new Howl({
  src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/jumprun.mp3',
  autoplay: true,
  loop: true,
  volume: 0.5
});

var mute = document.getElementById('mute'),
    text = mute.firstChild;
var isPlaying = true;

mute.addEventListener('click', function () {
  isPlaying = !isPlaying;
  if (isPlaying === false) {
    sound.pause();
    text.data = "Play";
  } else {
    sound.play();
    text.data = "Mute";
  }
}, false);