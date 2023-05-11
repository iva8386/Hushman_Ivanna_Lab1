let pTask3 = document.querySelector(".countP");
let buttonTask3 = document.querySelector(".count-btn3");

buttonTask3.addEventListener("click", () =>{
    let inputTask3 = document.querySelector(".task3-input");

    pTask3.innerHTML = "Кількість символів в тексті: " + inputTask3.value.replaceAll(" ","").length ;
    
})

//вікно при наведені на лого
const icon = document.querySelector(".icon");

icon.addEventListener("mouseover", ()=>{

    let containerOverlay = document.querySelector(".container-overlay");
    containerOverlay.style.display = "flex";
})
icon.addEventListener("mouseout", ()=>{

    let containerOverlay = document.querySelector(".container-overlay");
    containerOverlay.style.display = "none";
})

