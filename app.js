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
    //Initialise all views
    catListView.init();
    catView.init();
    adminView.init();
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
  },
  // Display the admin section
  showAdmin:function() {
    document.getElementById('adminSection').style.display = "block";
  },
  // Hide the admin section
  hideAdmin:function() {
    document.getElementById('adminSection').style.display = "none";
  },
  // Update the current cat data with the data filled in the admin form
  saveData: function() {
    var currentCat = this.getCurrentCat();
    currentCat.name = adminView.nameInput.value;
    currentCat.picture = adminView.imgInput.value;
    currentCat.click = adminView.clickInput.value;
    catListView.render();
    catView.render();
  }
};

/* ========= Views =========== */

var catListView = {
  // Render the initial view of the list
  init:function() {
    this.catList = document.getElementById('catList');
    this.render();
  },
  // Render the list of cats
  render:function() {
    var cats = controller.getCats();
    this.catList.innerHTML = '';
    for (var i = 0 ; i < cats.length; i++) {
      var cat = cats[i];
      var listElem = document.createElement('li');
      listElem.textContent = cat.name;
      // Render selected cat in catView
      listElem.addEventListener('click',(function(cat) {
        return function(){
          controller.setCurrentCat(cat);
          catView.render();
          adminView.render();
        }
      })(cat));
      catList.appendChild(listElem);
  }
 }
};

var catView = {
  // Render the initial cat view
  init: function() {
    this.cat = document.getElementById('selectedCat');
    this.catName = document.getElementById('catName');
    this.catImage = document.getElementById('catImage');
    this.catCount = document.getElementById('catCount');
    this.catImage.setAttribute("width", "500");
    // Calls the function to increment the click counter everytime user clicks the image of the cat
    this.catImage.addEventListener('click',function() {
      controller.incrementCounter();
      adminView.render();
    })
    this.render();
  },

  // Render the cat view
  render: function() {
    var currentCat = controller.getCurrentCat();
    this.catName.textContent = currentCat.name;
    this.catCount.textContent = currentCat.click;
    this.catImage.src = currentCat.picture;
  }
};

var adminView = {
  // Render the initial admin view
  init:function() {
    this.adminButton = document.getElementById('adminBtn');
    this.cancelButton = document.getElementById('cancelBtn');
    this.saveButton = document.getElementById('saveBtn');
    this.nameInput = document.getElementById('nameInput');
    this.imgInput = document.getElementById('imgInput');
    this.clickInput = document.getElementById('clickInput');
    this.adminButton.addEventListener('click',function() {
      controller.showAdmin();
    });
    // Call the function to hide the admin section when user clicks the cancel button
    this.cancelButton.addEventListener('click',function() {
      controller.hideAdmin();
    });
    // Call the function to hide the admin section and to save the data fro the form when user clicks the save button
    this.saveButton.addEventListener('click',function() {
      var currentCat = controller.getCurrentCat();
      controller.saveData();
      controller.hideAdmin();
    });
    controller.hideAdmin();
    this.render();
  },
  //Display the name, img and number of clicks for the current Cat in the Admin form
  render:function() {
    var currentCat = controller.getCurrentCat();
    this.nameInput.value = currentCat.name;
    this.imgInput.value = currentCat.picture;
    this.clickInput.value = currentCat.click;
  }
};

/* ========= Initiate the app =========== */
controller.init();
