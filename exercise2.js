function replaceImage(imgUrl) {
    const dogImg = document.createElement("img");
    dogImg.setAttribute("src", imgUrl);
    dogImg.setAttribute("width", 300);
    const dogContainer = document.querySelector("#dogContainer")
    dogContainer.innerHTML = "";
    dogContainer.append(dogImg);
}

const dogButton = document.getElementById("dogButton");

dogButton.addEventListener("click", () => {
  dogButton.innerHTML = "Generating Doggo"
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(function (response) { return response.json(); })
    .then(function (data) {
      // your code
      replaceImage(data.message)  
      dogButton.innerHTML = "Generate Doggo";
    })
    .catch((error) => {
      console.log(error);
    })
})


const select = document.getElementById("dogSelect")
fetch("https://dog.ceo/api/breeds/list")
.then((res => res.json()))
.then(data => {
    console.log(data)

    for (let i = 0; i < data.message.length; i++) {
        const name = data.message[i];
        const option = document.createElement("option")
        option.innerText = name;
        select.append(option);
    }
})

select.addEventListener("change", () => {
    console.log(select.value)
    fetch(`https://dog.ceo/api/breed/${select.value}/images/random`)
    .then(res => res.json())
    .then(data => {
        
    })
})