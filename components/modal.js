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
