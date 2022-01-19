/* https://learn.javascript.ru/mouse-drag-and-drop */

let currentDroppable_ball = null;

var ball = document.getElementById('ball');

/* Событие mousedown срабатывает, когда кнопка указывающего устройства (к примеру, мыши) нажата над элементом. */
ball.onmousedown = ball_onmousedown;

/* Событие mousedown срабатывает, когда кнопка указывающего устройства (к примеру, мыши) нажата над элементом. */
function ball_onmousedown(event) {

  let shiftX = event.clientX - ball.getBoundingClientRect().left;
  let shiftY = event.clientY - ball.getBoundingClientRect().top;

  ball.style.position = 'absolute';
  ball.style.zIndex = 1000;
  document.body.append(ball);

  moveAt(event.pageX, event.pageY);

  function moveAt(pageX, pageY) {
    ball.style.left = pageX - shiftX + 'px';
    ball.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);

    ball.hidden = true;
    let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
    ball.hidden = false;

    if (!elemBelow) return;

    let droppableBelow_ball = elemBelow.closest('.droppable');

    if (currentDroppable_ball != droppableBelow_ball) {
      if (currentDroppable_ball) { // null если мы были не над droppable до этого события
        // (например, над пустым пространством)
        leaveDroppable(currentDroppable_ball);
      }
      currentDroppable_ball = droppableBelow_ball;
      if (currentDroppable_ball) { // null если мы не над droppable сейчас, во время этого события
        // (например, только что покинули droppable)
        enterDroppable(currentDroppable_ball);
      }
    }

    
  }

  document.addEventListener('mousemove', onMouseMove);

  ball.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    ball.onmouseup = null;
  };

};

/* element изменение когда мыш наведена*/
function enterDroppable(elem) {
  // elem.style.background = 'pink';
  elem.style.background = 'green';
  console.log(elem);
}

/* element изменение когда мыш ушла*/
function leaveDroppable(elem) {
  elem.style.background = '';
}



ball.ondragstart = function() {
  return false;
};