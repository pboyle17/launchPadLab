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
