let angular = require('./components/angular');
let ember = require('./components/ember');
let vue = require('./components/vue');
let react = require('./components/react');
let logo = require('./components/logo');

let frameWorks = [angular,ember,react,vue];

Promise.all([
  ember.getData(),
  angular.getData(),
  vue.getData(),
  react.getData()
]).then(()=>{
  frameWorks.forEach(x=>{
    let img = logo.createLogo(x);
    document.querySelector('#imageContainer').appendChild(img);
  });
});
