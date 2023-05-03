console.log("hello world!");

function house() {
  fetch("http://localhost:3000/api/house")
    .then((response) => response.json())
    .then(function (data) {
      console.log(data, "testar");
    });
}
house();

export default {
  house,
};
