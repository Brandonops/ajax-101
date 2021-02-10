dogButton = document.getElementById("dogButton");

dogButton.addEventListener("click", () => {

    //https://dog.ceo/api/breeds/image/random
    fetch("https://dog.ceo/api/breeds/image/random")
        .then((res) =>  {
            return res.json()
        })
        .then((data) => {
            console.log(data);
            const dogImg = document.createElement("img");
            dogImg.setAttribute("src", data.message);
            dogImg.setAttribute("width", 100);
            const dogContainer = document.querySelector("#dogContainer");
            dogContainer.innerHTML = "";
            dogContainer.append(dogImg);
        })
        .catch ((error) => {
            console.log(error);
        })
})