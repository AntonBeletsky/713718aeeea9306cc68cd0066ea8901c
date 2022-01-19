DragManager.onDragCancel = function(dragObject) {
    // dragObject.avatar.rollback();
  };
  // перетащили элемент
  DragManager.onDragEnd = function(dragObject, dropElem) {
    //dragObject.elem.style.display = 'none';
    console.log(dropElem);
    dropElem.style.background = 'green';
    dropElem.classList.add('computer-smile');
    setTimeout(function() {
      //dropElem.classList.remove('computer-smile');
    }, 200);
  };