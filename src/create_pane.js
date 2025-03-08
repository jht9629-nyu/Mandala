//

function create_panes() {
  create_pane_primary();
  create_pane_secondary();
  my.pane = my.pane1;

  // if (my.mobileScreen) {
  //   my.pane = my.pane0;
  // } else {
  //   create_pane_secondary();
  //   my.pane = my.pane1;
  // }
}

function create_pane_primary() {
  let backImage = my.backImage;
  let centered_focus = 0;

  let x0 = 0;
  let y0 = my.height * my.primaryPortion;
  let z0 = 1;
  let width = my.width;
  let height = my.height * (1 - my.primaryPortion);
  // if (my.mobileScreen) {
  //   y0 = 0;
  //   z0 = 4;
  //   height = my.height;
  //   centered_focus = 1;
  // }

  let refBox = my.refBox;
  let regionIndex = 0;
  let focsRect_stroke = 'black';
  let focsRect_strokeWeight = 4;

  my.pane0 = new Pane({
    backImage,
    x0,
    y0,
    z0,
    width,
    height,
    refBox,
    regionIndex,
    focsRect_stroke,
    focsRect_strokeWeight,
    centered_focus,
  });
}

function create_pane_secondary() {
  let backImage = my.backImage;

  let x0 = 0;
  let y0 = 0;
  let z0 = 1;
  let height = my.height;
  // let height = my.height * my.primaryPortion;

  let width = my.width;
  let initCentered = 0;
  let refBox = my.refBox;
  let regionIndex = 1;
  let focsRect_stroke = 'black';
  let focsRect_strokeWeight = 4;

  my.pane1 = new Pane({
    backImage,
    x0,
    y0,
    z0,
    width,
    height,
    initCentered,
    refBox,
    regionIndex,
    focsRect_stroke,
    focsRect_strokeWeight,
  });
}
