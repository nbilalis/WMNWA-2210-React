"use strict";

// Create & render some elements, utilizing a JS array
// Some recipe ingredients
var ingredients = [{
  title: 'flour',
  quantity: '1kg',
  vegan: true
}, {
  title: 'salt',
  quantity: '3tbs',
  vegan: true
}, {
  title: 'eggs',
  quantity: '2'
}]; // Header element

var h1 = React.createElement('h1', null, 'Recipe'); // List element
// Children come from Array.map

var ul = React.createElement('ul', {
  className: 'ingredient-list'
}, ingredients.map(function (item, index) {
  return React.createElement('li', {
    className: 'ingredient',
    key: index
  }, "".concat(item.quantity, " ").concat(item.title, " ").concat(item.vegan ? '(vegan)' : ''));
})); // Render them inside the 'root' div

ReactDOM.render([h1, ul], document.getElementById('root'));