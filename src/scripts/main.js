// Require Node modules in the browser thanks to Browserify: http://browserify.org
var bespoke = require('bespoke');
var classes = require('bespoke-classes');
var nav = require('bespoke-nav');
var scale = require('bespoke-scale');
var bullets = require('bespoke-bullets');
var hash = require('bespoke-hash');
var prism = require('bespoke-prism');
var multimedia = require('bespoke-multimedia');
var extern = require('bespoke-extern');
var forms = require('bespoke-forms');
var nebula = require('bespoke-theme-nebula');
var notes = require('bespoke-notes/dom');


// Bespoke.js
bespoke.from({ parent: 'article.deck', slides: 'section' }, [
  nebula(),
  classes(),
  nav(),
  scale(),
  bullets('li:not(.notbullet), .bullet'),
  hash(),
  prism(),
  multimedia(),
  extern(bespoke),
  forms(),
  notes()
]);
