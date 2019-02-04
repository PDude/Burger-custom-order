let totalPrice = document.getElementById('total_price');
let totalCalories = document.getElementById('total_calories');
let order = document.getElementById('order');
let orderAgain = document.getElementById('order_again');
let sizeSmall = document.getElementById('size_s');
let sizeBig = document.getElementById('size_b');
let addons = document.getElementsByClassName('burgers');
let check = document.getElementById('check');
let content = document.getElementById('content');
let form = document.getElementById('form');
let stuffings = document.getElementsByName('burger[]');
let stuffingTitle = document.getElementById('stuffing_title');
let sizeTitle = document.getElementById('size_title');

let additionalPrice = [4, 5, 10, 5, 4];
let additionalCalories = [25, 5, 50, 0, 10];

function getBurger() {
  let Custom = {};
  if (sizeSmall.checked == true) {
    Custom.price = 17;
    Custom.calories = 250;
  } 
  else if (sizeBig.checked == true) {
    Custom.price = 25;
    Custom.calories = 340;
  }
  for (let i = 0; i < addons.length; i++) {
    if (addons[i].checked == true) {
      Custom.price += additionalPrice[i];
      Custom.calories += additionalCalories[i];
    }
  }
  if (isNaN(Custom.price) || isNaN(Custom.calories) || Custom.price == null || Custom.calories == null) {
    addWarnSize();
    setTimeout(removeWarnSize, 1000);
    Custom.price = 0;
    Custom.calories = 0;
    for (let i = 0; i < addons.length; i++) {
      if (addons[i].checked == true) {
        Custom.price += additionalPrice[i];
        Custom.calories += additionalCalories[i];
      }
    }
  }

  totalPrice.innerHTML = Custom.price;
  totalCalories.innerHTML = Custom.calories;
}

function isChecked() {
  let hasChecked = false;
  for (let i = 0; i < stuffings.length; i++) {
    if (stuffings[i].checked) {
      hasChecked = true;
      if (sizeSmall.checked == true || sizeBig.checked == true) {
        makeOrder();
      }
      break;
    }
  }
  if (sizeSmall.checked == true || sizeBig.checked == true) {
    if (hasChecked == false) {
      addWarnStuf();
      setTimeout(removeWarnStuf, 1000);
      return false;
    } 
  }
  else {
    addWarnSize();
    setTimeout(removeWarnSize, 1000);
  }
  return true;
}

function addWarnStuf() {
  stuffingTitle.classList.add('color_warn')
}

function removeWarnStuf() {
  stuffingTitle.classList.remove('color_warn')
}

function addWarnSize() {
  sizeTitle.classList.add('color_warn')
}

function removeWarnSize() {
  sizeTitle.classList.remove('color_warn')
}

function makeOrder() {
  check.classList.add('check_visible');
  orderAgain.classList.add('order_visible');
  content.classList.add('content_hidden');
}

orderAgain.onclick = function makeOneMoreOrder() {
  check.classList.remove('check_visible');
  orderAgain.classList.remove('order_visible');
  content.classList.remove('content_hidden');
  form.reset();
}
