let angular = require('./components/angular');
let ember = require('./components/ember');
let vue = require('./components/vue');
let react = require('./components/react');
let logo = require('./components/logo');
let compareButton = require('./components/compareButton');
let orderByWatchers = require('./components/orderByWatchers');
let orderByForks = require('./components/orderByForks');
let orderByIssues = require('./components/orderByIssues');

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
    document.querySelector('#compareButton').addEventListener('click', ()=>{
      console.log('ordered by Watchers');
      orderByWatchers.sort(frameWorks).forEach(frameWork=>console.log(`${frameWork.name} : ${frameWork.watchers} watches`));

      console.log('ordered by forks');
      orderByForks.sort(frameWorks).forEach(frameWork=>console.log(`${frameWork.name} : ${frameWork.forks} forks`));

      console.log('ordered by amount of issues');
      orderByIssues.sort(frameWorks).forEach(frameWork=>console.log(`${frameWork.name} : ${frameWork.issues} issues`));
    });

    document.querySelector('button').addEventListener('click',()=>{
      document.querySelector('#popup').classList.toggle('hide');
      document.querySelector('#popup').classList.toggle('show');
    });

});
