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
