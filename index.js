const input = document.querySelector("#input");
const btn = document.querySelector("#btn");

const loader = document.querySelector(".loader");

const qrContainer = document.querySelector(".qr-code");

const img = document.querySelector(".qr-code img");

const genQR = (e) => {
  loader.style.display = "flex";
  e.preventDefault();

  console.log(img);
  let text = input.value;
  console.log(text);

  if (text.trim().length == 0) {
    alert("Please Enter a Text...!!!");
    loader.style.display = "none";
  } else {
    img.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150*150&data=" + text;

    qrContainer.style.display = "flex";
    loader.style.display = "none";
    input.value = "";
  }
};

btn.addEventListener("click", genQR);

console.log("loaded");
