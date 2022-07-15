// let boxEl = document.querySelector(".box");
// console.log(boxEl);
// let boxEl = document.getElementById("second-box");
// console.log(boxEl);
// const boxEl = document.querySelector(".box");
// boxEl.classList.add("active");
// let isContains= boxEl.classList.contains("active");
// console.log(isContains);

// boxEl.classList.remove("active");
// isContains =boxEl.classList.contains("active");
// console.log(isContains);


// let boxEl = document.querySelector(".box");
// console.log(boxEl);
// boxEl.addEventListener("click", function() {
//  alert("click!");
// })


// let boxEl = document.querySelector(".box");
// boxEl.addEventListener("click", function() {
//  if(boxEl.classList.contains("orange"))
//  {
//     boxEl.classList.remove("orange");
//     boxEl.classList.add("skyblue");
//  }
//  else if(boxEl.classList.contains("skyblue"))
//  {
//     boxEl.classList.remove("skyblue");
//     boxEl.classList.add("orange");
    
//  }
//  else{
//     boxEl.classList.add("orange");

//  }
// });
// let inputEl = document.getElementById("input");
// let boxEl = document.querySelector(".box");

// boxEl.addEventListener("click", function() {
//     inputEl.setAttribute("placeholder","아이디를 입력하세요!");
// })

// let boxEl = document.querySelector(".box");

// boxEl.addEventListener("click", function(){
// if(boxEl.classList.contains("orange"))
//  {
//     boxEl.classList.remove("orange");
//     boxEl.classList.add("skyblue");
//  }
//  else if(boxEl.classList.contains("skyblue"))
//  {
//     boxEl.classList.remove("skyblue");
//     boxEl.classList.add("orange");
    
//  }
//  else{
//     boxEl.classList.add("orange");
//  }
// });
// let inputbuttonEl = document.querySelector(".input-button");
// let buttonEl= document.querySelector(".button");
// let inputEl = document.getElementById("input");
// let spanEl = document.querySelector(".span");
// let text =""

// buttonEl.addEventListener("click", function(){
//     inputEl.setAttribute("placeholder","아이디를 입력하세요");
//     spanEl.textContent = "아이디를 입력하세요";

    
// });

// inputbuttonEl.addEventListener("click", function(){
//    let text = document.getElementById("input").value;
//     spanEl.textContent = text;

// });

// let boxEls = document.querySelectorAll(".box");


// boxEls.forEach(function(boxEl,index){
//     boxEl.classList.add("box_"+(index+1))
// })
let btnEls = document.querySelectorAll(".btn");
let boxEls = document.querySelectorAll(".box")

btnEls = document.addEventListener("click",function(){
    boxEls.forEach(function(boxEl,index){
        if(index % 7 ===0){
        boxEl.style.backgroundColor = "red";

        }
        if(index % 7 ===1){
        boxEl.classList.add("box_2");
    
        }
        if(index % 7 ===2){
            boxEl.classList.add("box_3");
        
        }     
        if(index % 7 ===3){
            boxEl.classList.add("box_4");
        
        }     
        if(index % 7 ===4){
            boxEl.classList.add("box_5");
        
        }
        if(index % 7 ===5){
            boxEl.classList.add("box_6");
        
        }  
        if(index % 7 ===6){
            boxEl.classList.add("box_7");
        
        }                            
         });

})