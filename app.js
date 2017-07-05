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
    //Initialise both views
    catListView.init();
  },
  // Get currentCat data
  getCurrentCat: function() {
    return model.currentCat;
  },
  // Get all cats data
  getCats: function() {
    return model.cat;
  },
  // Set the currently selected cat as to the object passed in
  setCurrentCat: function(cat) {
    model.currentCat = cat;
  }
};

/* ========= Views =========== */

var catListView = {
  init:function() {
    this.catList = document.getElementById('catList');
    this.render();
  },
  render:function() {
    var cats = controller.getCats();
    this.catList.innerHTML = '';
    for (var i = 0 ; i < cats.length; i++) {
      var cat = cats[i];
      var listElem = document.createElement('li');
      listElem.textContent = cat.name;
      listElem.addEventListener('click',(function(cat) {
        return function(){
          controller.setCurrentCat(cat);
        }
      })(cat));
      catList.appendChild(listElem);
  }
 }
};

var catView = {

};




/* ========= Initiate the app =========== */
controller.init();
