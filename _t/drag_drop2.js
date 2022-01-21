var post_drop = 'post-drop';

DragManager.onDragCancel = function(dragObject) {
    // dragObject.avatar.rollback();
  };
  
  // перетащили элемент
  DragManager.onDragEnd = function(dragObject, dropElem) {
    // dragObject - слон
    // dropElem - клетка

    //dragObject.elem.style.display = 'none';
    
    console.log(dropElem);
    // dropElem.style.background = 'green';
    //dropElem.style.background = 'green';
    dropElem.style.background = 'lol';
    dropElem.classList.add(post_drop);

    setTimeout(function() {
      dropElem.classList.remove(post_drop);
    }, 200);
  };