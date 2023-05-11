console.log("hello world!");

function house() {
  return fetch("http://localhost:3000/api/house")
    .then((response) => response.json())
    .then(function (data) {
      console.log(data, "testar");
      return data;
    });
}

function style() {
  fetch("http://localhost:3000/api/style")
    .then((response) => response.json())
    .then(function (data) {
      console.log(data, "Styles");
    });
}

function user(username) {
  return fetch("http://localhost:3000/api/user/" + username)
    .then((response) => response.json())
    .then(function (data) {
      console.log(data, "Users hej");
      return data;
    });
}

function material() {
  fetch("http://localhost:3000/api/material")
    .then((response) => response.json())
    .then(function (data) {
      console.log(data, "testar material");
    });
}

function houseMaterial() {
  fetch("http://localhost:3000/api/house-material")
    .then((response) => response.json())
    .then(function (data) {
      console.log(data, "testar houseMaterial");
    });
}

function favorite() {
  fetch("http://localhost:3000/api/favorite")
    .then((response) => response.json())
    .then(function (data) {
      console.log(data, "testar favorite");
    });
}

function order() {
  fetch("http://localhost:3000/api/order")
    .then((response) => response.json())
    .then(function (data) {
      console.log(data, "testar orders");
    });
}

function contact() {
  return fetch(" http://localhost:3000/api/contact")
    .then((response) => response.json())
    .then(function (data) {
      console.log(data, "testar contacts");
      return data;
    });
}

house();
style();
user();
material();
houseMaterial();
favorite();
order();
contact();

export default {
  house,
  style,
  user,
  material,
  houseMaterial,
  favorite,
  order,
  contact,
};
