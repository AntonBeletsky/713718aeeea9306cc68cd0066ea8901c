/* https://learn.javascript.ru/mouse-drag-and-drop */

let slov_currentDroppable = null;

/* Событие mousedown срабатывает, когда кнопка указывающего устройства (к примеру, мыши) нажата над элементом. */
slon.onmousedown = function(event) {

  let shiftX = event.clientX - slon.getBoundingClientRect().left;
  let shiftY = event.clientY - slon.getBoundingClientRect().top;

  slon.style.position = 'absolute';
  slon.style.zIndex = 1000;
  document.body.append(slon);

  moveAt(event.pageX, event.pageY);

  function moveAt(pageX, pageY) {
    slon.style.left = pageX - shiftX + 'px';
    slon.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);

    slon.hidden = true;
    let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
    slon.hidden = false;

    if (!elemBelow) return;

    let droppableBelow = elemBelow.closest('.droppable');

    if (slov_currentDroppable != droppableBelow) {
      if (slov_currentDroppable) { // null если мы были не над droppable до этого события
        // (например, над пустым пространством)
        leaveDroppable(slov_currentDroppable);
      }
      slov_currentDroppable = droppableBelow;
      if (slov_currentDroppable) { // null если мы не над droppable сейчас, во время этого события
        // (например, только что покинули droppable)
        enterDroppable(slov_currentDroppable);
      }
    }
  }

  document.addEventListener('mousemove', onMouseMove);

  slon.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    slon.onmouseup = null;
  };

};

/* element изменение когда мыш наведена*/
function enterDroppable(elem) {
  // elem.style.background = 'pink';
  elem.style.background = 'green';
}

/* element изменение когда мыш ушла*/
function leaveDroppable(elem) {
  elem.style.background = '';
}

slon.ondragstart = function() {
  return false;
};