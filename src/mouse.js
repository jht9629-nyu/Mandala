//
// function canvas_mousePressed() {
function mousePressed() {
  console.log('canvas_mousePressed');
  if (keyIsDown(SHIFT)) {
    saveMouseXY();
    my.shiftTracking = 1;
  } else {
    my.mouseTracking = 1;
  }
  if (my.pane0.touchPoint(mouseX, mouseY)) {
    setPane(my.pane0);
  } else if (my.pane1.touchPoint(mouseX, mouseY)) {
    setPane(my.pane1);
  }
  my.pane.mousePressed();
}

function mouseDragged() {
  let inX = mouseX >= 0 && mouseX < width;
  let inY = mouseY >= 0 && mouseY < height;
  let onCanvas = inX && inY;
  if (onCanvas && !my.shiftTracking) {
    my.pane.mouseDragged();
  }
  // return false to allow scrolling on mobile
  return !onCanvas;
}

// function canvas_mouseReleased() {
function mouseReleased() {
  // console.log('canvas_mouseReleased');
  if (my.shiftTracking) {
    saveMouseXY();
  }
  my.pane.mouseReleased();
  my.mouseTracking = 0;
  my.shiftTracking = 0;
}

function clearMouseXY() {
  my.mouseXYs = [];
  my.mouseXYindex = 0;
}

function saveMouseXY() {
  let ment = { x: mouseX, y: mouseY };
  my.mouseXYs[my.mouseXYindex] = ment;
  my.mouseXYindex = (my.mouseXYindex + 1) % 2;
}

// !!@ no canvas mouseDragged
// my.canvas.mouseDragged(canvas_mouseDragged);
