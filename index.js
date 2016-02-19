#!/usr/bin/env node

process.title = 'man-man-man';

var print = function() {
  process.stdout.write("man ");
  setTimeout(print, 100);
};

var player = require('play-sound')(opts = {});
var file = require('path').resolve(__dirname, 'rob.mp3');
var play = function() {
  player.play(file, play);
};

print();
play();