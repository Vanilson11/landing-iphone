const app = document.querySelector("#app");
const imgProductElement = document.querySelector("#img-product");
const btn = document.querySelector(".product-info-wrapper button");
const link = document.querySelectorAll("ul li a");
let dataColor;

app.addEventListener("click", (event) => {
  const btnColor = event.target.closest(".btn-color");
  
  if(btnColor){
    const color = btnColor.getAttribute("data-color");
    dataColor = color;

    setTimeout(slidLeft, 0);
    setTimeout(slideRight, 1000);
    return
  }
});

function slidLeft(){
  imgProductElement.style.animation = "slidLeft .5s ease forwards";
  
  link.forEach(link => {
    link.style.color = `${dataColor}`;
  });

  btn.style.background = `${dataColor}`;
  
  btn.style.border = `1px solid ${dataColor}`;
}

function slideRight(){
  imgProductElement.style.animation = "slideRight .5s ease forwards";
  imgProductElement.src = `../assets/imgs/${dataColor}.webp`;
}