/////// PreLoad Images ///////
var preLoad = {
  nProcessed: 0, //number of images checked for pre-load
  yourImages: [], //image array with URLs
  preImages: new Array(),
  check: new Array(),
  loading: {},
  finished: {},
  progress: {},
  success: 0,
  fail: 0,



  //Send image URLs to preload array
  addURL: function(imgURL, imageList) {
    //create URL array from imageList
    for (var i = 0; i <= imageList.length - 1; ++i) {
      preLoad.yourImages[i] = imgURL + imageList[i];
    }
  },

  loadImages: function(loadingDiv, completeDiv, progressDiv) {

    this.loading = loadingDiv;
    this.finished = completeDiv;
    this.progress = progressDiv;

    if (this.nProcessed < preLoad.yourImages.length) {
      this.preImages[this.nProcessed] = new Image();
      this.preImages[this.nProcessed].onload = function() {
        preLoad.checkLoad();
        preLoad.success++;
      };

      this.preImages[this.nProcessed].onerror = function() {
        preLoad.checkLoad();
        preLoad.fail++;
      };

      this.preImages[this.nProcessed].src = this.yourImages[this.nProcessed];
      }
  },

  checkLoad: function() {
    this.nProcessed++;
    // add to progress percentage //
    $(this.progress).html(Math.round((preLoad.nProcessed / preLoad.yourImages.length) * 100) + "%");

    // if loading incomplete, continue loading //
    if (preLoad.nProcessed < preLoad.yourImages.length) {
      preLoad.loadImages(this.loading, this.finished, this.progress);
    }

    /// only display "finished" div if the viewer is on the loading screen //
    /// else do nothing on complete ///
    if (preLoad.nProcessed == preLoad.yourImages.length && ($(this.loading).css('display') != 'none')) {
      $(this.loading).hide();
      $(this.finished).show();
      console.log(preLoad.success);
      console.log(preLoad.fail);
    }
  },

  /// Force a manual check on whether all images are displayed or not //
  /// completeDiv / incompleteDiv are html class or name tags (e.g., "#finishedDisplay" / "#loadingDisplay")
  manualCheck: function(completeDiv, incompleteDiv) {
    if (preLoad.nProcessed == preLoad.yourImages.length) {
      $(completeDiv).show();
      console.log(preLoad.success);
      console.log(preLoad.fail);
    } else {
      $(incompleteDiv).show();
    }
  }

};
