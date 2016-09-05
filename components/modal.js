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
    `;
  }
}

module.exports = modal;
