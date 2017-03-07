function getMousePos(e) {
  const mouseX = e.clientX + window.pageXOffset;
  const mouseY = e.clientY + window.pageYOffset;
  const mousePos = {
    x: mouseX,
    y: mouseY,
  };
  return mousePos;
}
