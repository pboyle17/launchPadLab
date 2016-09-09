(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
let angular = require('./components/angular');
let ember = require('./components/ember');
let vue = require('./components/vue');
let react = require('./components/react');
let logo = require('./components/logo');
let compareButton = require('./components/compareButton');
let orderByWatchers = require('./components/orderByWatchers');
let orderByForks = require('./components/orderByForks');
let orderByIssues = require('./components/orderByIssues');
let recommendation = require('./components/recommendation');

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
  document.querySelector('#compareWatchersButton').addEventListener('click',()=>{
    let ordered = orderByWatchers.sort(frameWorks)
    console.log(ordered);
    $modal = document.querySelector('#modal');
    $modal.innerHTML = '<h3>Watchers</h3>';
    ordered.forEach(frameWork=>{
      let child = document.createElement('div');
      child.innerHTML = `${frameWork.name} : ${frameWork.watchers}`
      $modal.appendChild(child);
    });
      $modal.classList.toggle('hide');
      $modal.classList.toggle('show');
  });
  document.querySelector('#compareForksButton').addEventListener('click',()=>{
    let ordered = orderByForks.sort(frameWorks)
    console.log(ordered);
    $modal = document.querySelector('#modal');
    $modal.innerHTML = '<h3>Forks</h3>';
    ordered.forEach(frameWork=>{
      let child = document.createElement('div');
      child.innerHTML = `${frameWork.name} : ${frameWork.forks}`
      $modal.appendChild(child);
    });
      $modal.classList.toggle('hide');
      $modal.classList.toggle('show');
  });
  document.querySelector('#compareIssuesButton').addEventListener('click',()=>{

    let ordered = orderByIssues.sort(frameWorks);
    console.log(ordered);
    $modal = document.querySelector('#modal');
    $modal.innerHTML = '<h3>Issues</h3>';
    ordered.forEach(frameWork=>{
      let child = document.createElement('div');
      child.innerHTML = `${frameWork.name} : ${frameWork.issues}`
      $modal.appendChild(child);
    });
      $modal.classList.toggle('hide');
      $modal.classList.toggle('show');
  });

  document.querySelector('#winner').addEventListener('click',()=>{
    $modal = document.querySelector('#modal');
    $modal.innerHTML = '<h3>Recommendation</h3><p>Based on community support, development activity and stability the recommendation is:</p><div><img src="'+recommendation.recommend(frameWorks).logo+'"/>';
    $modal.classList.toggle('hide');
    $modal.classList.toggle('show');
    recommendation.recommend(frameWorks);

  });
});

},{"./components/angular":2,"./components/compareButton":4,"./components/ember":5,"./components/logo":6,"./components/orderByForks":8,"./components/orderByIssues":9,"./components/orderByWatchers":10,"./components/react":11,"./components/recommendation":12,"./components/vue":13}],2:[function(require,module,exports){
let angular = {
  url:"https://api.github.com/repos/angular/angular.js",
  logo:'images/angularLogo.png',
  points:0,
  getData:function(){
    return new Promise((resolve)=>{
      fetch(this.url).then(x=>x.json()).then(x=>{
        this.watchers = x.watchers;
        this.forks = x.forks;
        this.name = x.name;
        this.issues = x.open_issues;
        this.description = x.description;
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
    let raw = '<img src="./images/closeButton.png" id="closeButton" height="25px" width="25px"></img>';
    return raw;
  }
}

module.exports = closeButton;

},{"./modal":7}],4:[function(require,module,exports){
let compareButton = {
  hello:function(obj){
    console.log('hello world',obj);
  }
};

module.exports = compareButton;

},{}],5:[function(require,module,exports){
let ember = {
  url:"https://api.github.com/repos/emberjs/ember.js",
  logo:'images/emberLogo.png',
  points:0,
  getData:function(){
    return new Promise((resolve)=>{
      fetch(this.url).then(x=>x.json()).then(x=>{
        this.watchers = x.watchers;
        this.forks = x.forks;
        this.name = x.name;
        this.issues = x.open_issues;
        this.description = x.description;
        resolve(x);
      });
    });
  }
}

module.exports = ember;

},{}],6:[function(require,module,exports){
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

},{"./modal":7}],7:[function(require,module,exports){
let closeButton = require('./closeButton');


let button = closeButton.createButton();

let modal = {
  toggleModal:function(obj){
    let $modal = document.querySelector('#modal');
    $modal.classList.toggle('hide');
    $modal.classList.toggle('show');
    console.log(obj);
    document.querySelector('#modal').innerHTML = `name: ${obj.name}
    description: ${obj.description}
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

},{"./closeButton":3}],8:[function(require,module,exports){
let orderByForks = {
  sort:function(obj){
    return obj.sort((a,b)=>b.forks - a.forks);
  }
}

module.exports = orderByForks;

},{}],9:[function(require,module,exports){
let orderByIssues = {
  sort:function(obj){
    return obj.sort((a,b)=>b.issues-a.issues).reverse();
  }
}

module.exports = orderByIssues;

},{}],10:[function(require,module,exports){
let orderByWatchers = {
  sort:function(obj){
    return obj.sort((a,b)=>b.watchers-a.watchers);
  }
}

module.exports = orderByWatchers;

},{}],11:[function(require,module,exports){
let react = {
  url:"https://api.github.com/repos/facebook/react",
  logo:'images/reactLogo.png',
  points:0,
  getData:function(){
    return new Promise((resolve)=>{
      fetch(this.url).then(x=>x.json()).then(x=>{
        this.watchers = x.watchers;
        this.forks = x.forks;
        this.name = x.name;
        this.issues = x.open_issues;
        this.description = x.description;
        resolve(x);
      });
    });
  }
}

module.exports = react;

},{}],12:[function(require,module,exports){
let orderByForks = require('./orderByForks');
let orderByWatchers = require('./orderByWatchers');
let orderByIssues = require('./orderByIssues');


let recommendation = {
  recommend:function(frameWorksArr){
    frameWorksArr.forEach(frameWork=>frameWork.points=0);
    let forks = orderByForks.sort(frameWorksArr);
    let issues = orderByIssues.sort(frameWorksArr);
    let watchers = orderByWatchers.sort(frameWorksArr);

    for(let y = 0 ; y < forks.length ; y++){
      forks[y].points += y;
    }
    for(let x = 0 ; x < issues.length ; x++){
      issues[x].points += x;
    }
    for(let z = 0 ; z < watchers.length ; z++){
      watchers[z].points += z;
    }

    return frameWorksArr.sort((a,b)=>a.points-b.points)[0];
  }
}

module.exports = recommendation

},{"./orderByForks":8,"./orderByIssues":9,"./orderByWatchers":10}],13:[function(require,module,exports){
let vue = {
  url:"https://api.github.com/repos/vuejs/vue",
  logo:'images/vueLogo.png',
  points:0,
  getData:function(){
    return new Promise((resolve)=>{
      fetch(this.url).then(x=>x.json()).then(x=>{
        this.watchers = x.watchers;
        this.forks = x.forks;
        this.name = x.name;
        this.issues = x.open_issues;
        this.description = x.description;
        resolve(x);
      });
    });
  }
}

module.exports = vue;

},{}]},{},[1]);
