let modal = require('./modal');

let logo = {
  createLogo:function(obj){
    let $imgElement = document.createElement('img');
    let $modal = document.querySelector('#modal');
    $imgElement.src = obj.logo;
    $imgElement.id = obj.name;
    $imgElement.addEventListener('click',()=>{
      modal.toggleModal(obj);
    });
    return $imgElement;
  }
}

module.exports = logo;
