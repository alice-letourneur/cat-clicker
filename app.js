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
    catView.init();
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
  },
  // Add 1 to the click counter of selected cat
  incrementCounter: function() {
    model.currentCat.click++;
    catView.render();
  }
};

/* ========= Views =========== */

var catListView = {
  // Renders the initial view of the list
  init:function() {
    this.catList = document.getElementById('catList');
    this.render();
  },
  // Renders the list of cats
  render:function() {
    var cats = controller.getCats();
    this.catList.innerHTML = '';
    for (var i = 0 ; i < cats.length; i++) {
      var cat = cats[i];
      var listElem = document.createElement('li');
      listElem.textContent = cat.name;
      // Renders selected cat in catView
      listElem.addEventListener('click',(function(cat) {
        return function(){
          controller.setCurrentCat(cat);
          catView.render();
        }
      })(cat));
      catList.appendChild(listElem);
  }
 }
};

var catView = {
  //Renders the initial cat view
  init: function() {
    this.cat = document.getElementById('selectedCat');
    this.catName = document.getElementById('catName');
    this.catImage = document.getElementById('catImage');
    this.catCount = document.getElementById('catCount');
    this.catImage.setAttribute("width", "500");
    // Calls the function to increment the click counter everytime user clicks the image of the cat
    this.catImage.addEventListener('click',function() {
      controller.incrementCounter();
    })
    this.render();
  },

  // Renders the cat view
  render: function() {
    var currentCat = controller.getCurrentCat();
    this.catName.textContent = currentCat.name;
    this.catCount.textContent = currentCat.click;
    this.catImage.src = currentCat.picture;
  }
};




/* ========= Initiate the app =========== */
controller.init();
