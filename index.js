const hamburger = document.getElementById("hamburger")
let mobile = document.querySelector(".mobile-div")

// console.log(hamburger)
hamburger.addEventListener("click", ()=>{
  if(mobile.classList.contains("mobile-menu")){
    mobile.classList.remove("mobile-menu")
  } else {
    mobile.classList.add("mobile-menu")
  }
})
