console.log("hello world!");

function house() {
  fetch("http://localhost:3000/api/house")
    .then((response) => response.json())
    .then(function (data) {
      console.log(data, "testar");
    });
}

function style() {
  fetch("http://localhost:3000/api/style")
  .then((response) => response.json())
  .then(function (data) {
    console.log(data, "Styles");
  });
}


function user() {
  fetch("http://localhost:3000/api/user")
  .then((response) => response.json())
  .then(function (data) {
    console.log(data, "Users");
  });
}


house();
style();
user();

export default {
  house,
  style,
  user
};
