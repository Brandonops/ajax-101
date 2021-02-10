const dogButton = document.getElementById("dogButton");

dogButton.addEventListener("click", () => {
  dogButton.innerHTML = "Generating Doggo"
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(function (response) { return response.json(); })
    .then(function (data) {
      // your code
      console.log(data);
      const dogImg = document.createElement("img");
      dogImg.setAttribute("src", data.message);
      dogImg.setAttribute("width", 300);
      const dogContainer = document.querySelector("#dogContainer")
      dogContainer.innerHTML = "";
      dogContainer.append(dogImg);
      dogButton.innerHTML = "Generate Doggo";
    })
    .catch((error) => {
      console.log(error);
    })
})