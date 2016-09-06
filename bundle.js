(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
let angular = require('./components/angular');
let ember = require('./components/ember');
let vue = require('./components/vue');
let react = require('./components/react');
let logo = require('./components/logo');

let frameWorks = [ember,angular,vue,react];

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

},{"./components/angular":2,"./components/ember":4,"./components/logo":5,"./components/react":7,"./components/vue":8}],2:[function(require,module,exports){
let angular = {
  url:"https://api.github.com/repos/angular/angular.js",
  logo:'images/angularLogo.png',
  getData:function(){
    return new Promise((resolve)=>{
      fetch(this.url).then(x=>x.json()).then(x=>{
        this.watchers = x.watchers;
        this.forks = x.forks;
        this.name = x.name;
        this.issues = x.open_issues;
        resolve(x);
      });
    });
  }
}

module.exports = angular;

},{}],3:[function(require,module,exports){
let modal = require('./modal');

let closeButton = {
  createButton:function(){
    let raw = '<img src="./images/closeButton.png" id="closeButton"></img>';
    return raw;
  }
}

module.exports = closeButton;

},{"./modal":6}],4:[function(require,module,exports){
let ember = {
  url:"https://api.github.com/repos/emberjs/ember.js",
  logo:'images/emberLogo.png',
  getData:function(){
    return new Promise((resolve)=>{
      fetch(this.url).then(x=>x.json()).then(x=>{
        this.watchers = x.watchers;
        this.forks = x.forks;
        this.name = x.name;
        this.issues = x.open_issues;
        resolve(x);
      });
    });
  }
}

module.exports = ember;

},{}],5:[function(require,module,exports){
let modal = require('./modal');

let logo = {
  createLogo:function(obj){
    let $imgElement = document.createElement('img');
    let $modal = document.querySelector('#modal');
    $imgElement.src = obj.logo;
    $imgElement.id = obj.name;
    $imgElement.style.height = '200px';
    $imgElement.style.width = '200px';
    $imgElement.addEventListener('click',()=>{
      modal.toggleModal(obj);
    });
    return $imgElement;
  }
}

module.exports = logo;

},{"./modal":6}],6:[function(require,module,exports){
let closeButton = require('./closeButton');

let button = closeButton.createButton();

let modal = {
  toggleModal:function(obj){
    let $modal = document.querySelector('#modal');
    $modal.classList.toggle('hide');
    $modal.classList.toggle('show');
    console.log(obj);
    document.querySelector('#modal').innerHTML = `name: ${obj.name}
    watchers: ${obj.watchers}
    forks: ${obj.forks}
    issues: ${obj.issues}
    ${button}`;
    document.querySelector('#closeButton').addEventListener('click',()=>{
      $modal.classList.toggle('hide');
      $modal.classList.toggle('show');
    });

  }
}

module.exports = modal;

},{"./closeButton":3}],7:[function(require,module,exports){
let react = {
  url:"https://api.github.com/repos/facebook/react",
  logo:'images/reactLogo.png',
  getData:function(){
    return new Promise((resolve)=>{
      fetch(this.url).then(x=>x.json()).then(x=>{
        this.watchers = x.watchers;
        this.forks = x.forks;
        this.name = x.name;
        this.issues = x.open_issues;
        resolve(x);
      });
    });
  }
}

module.exports = react;

},{}],8:[function(require,module,exports){
let vue = {
  url:"https://api.github.com/repos/vuejs/vue",
  logo:'images/vueLogo.png',
  getData:function(){
    return new Promise((resolve)=>{
      fetch(this.url).then(x=>x.json()).then(x=>{
        this.watchers = x.watchers;
        this.forks = x.forks;
        this.name = x.name;
        this.issues = x.open_issues;
        resolve(x);
      });
    });
  }
}

module.exports = vue;

},{}]},{},[1]);
