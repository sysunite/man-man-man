#!/usr/bin/env node

process.title = 'manmanman';

manmanman = function() {
  process.stdout.write("man ")
  setTimeout(manmanman, 100)
}

manmanman()