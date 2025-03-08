//
function my_setup() {
  //
  my.version = '?v=11';

  my.defaultZ = 5;
  my.focus_animated_cut_time = 10;
  my.anim_time = 20;

  my.primaryPortion = 0.75;
  // my.primaryPortion = 0.5;
  // my.primaryPortion = 0.333;
  my.bottomMargin = 40;
  my.canvas = createCanvas(windowWidth, windowHeight - my.bottomMargin);
  // my.canvas = createCanvas(1920, 1080);
  // my.canvas = createCanvas(960, 540);
  // my.canvas.mousePressed(canvas_mousePressed);
  // my.canvas.mouseReleased(canvas_mouseReleased);
  my.width = width;
  my.height = height;
  my.paneRatio = 12 / 16;
  // my.isPortrait = height > width;
  my.isPortrait = 1;
  my.scanFlag = 0;

  my.refBox = new RefBox(refBox_init);
  my.refBox.mapToImage(my.backImage);

  create_panes();

  create_ui();

  focusAction();

  my.cycleCount = 1;

  // setup_dbase();
}

// !!@ hard to resize since Panes depend on canvas size at init

window.addEventListener('resize', window_resized);

function window_resized() {
  //
}
