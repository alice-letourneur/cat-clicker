/* ========= Model =========== */

var model = {
  // currentCat holds the data of the cat that is selected by the user
  currentCat: null,
  // Add array of cats
  cat: [
    {
    "name": "Charlie",
    "picture": "firstCat.jpg",
    "click": 0
    },
    {
      "name": "Roulette",
      "picture": "secondCat.jpg",
      "click": 0
    }
  ]
};

/* ========= Controller =========== */

var controller = {
  // Initialise controller
  init: function() {
    //Set the first cat of the list to be displayed when loading the app
    model.currentCat = model.cat[0];
  },
  // Get currentCat data
  getCurrentCat: function() {
    return model.currentCat;
  }
};

/* ========= Views =========== */

var catView = {

};

var catListView = {

};


/* ========= Initiate the app =========== */
controller.init();
