let modal = {
  toggleModal:function(){
    let $modal = document.querySelector('#modal');
    $modal.classList.toggle('hide');
    $modal.classList.toggle('show');

  }
}

module.exports = modal;
