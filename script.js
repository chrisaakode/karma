function changeColor(){
    let box =document.getElementById("colorBox");
    let currentColor = box.style.backgroundColor;
    if (currentColor === "purple"){
        box.style.backgroundColor = "red";
    }else{
        box.style.backgroundColor = "purple";
    }
}

