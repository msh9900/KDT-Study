// let spanEl = document.querySelector("span");
// spanEl.remove();

// $("span").remove();


// function showValue(){
//     $("input").val("가나다라마바사");
// }

// const displayBtn = document.querySelector(".displaybtn");
// const updateBtn = document.querySelector(".updatebtn");
// const result = document.querySelector("span");
// const text = document.querySelector("input");


// displayBtn.addEventListener("click",function(){
//     result.textContent = text.value;
// })
// function changeSpan(){
//     result.textContent = "가나다라마바사";
// }

// $(".displaybtn").on("click",function(){
//     $("span").text($("input").val()); 
// });
// $(".updatebtn").on("click",function(){
//     $("span").text("가나다라마바사"); 
// });
// const btn1 = document.querySelector(".btn1");
// const btn2 = document.querySelector(".btn2");
// const textInput = document.querySelector(".text-input");

// btn1.addEventListener("click",function(){
//     textInput.setAttribute("placeholder","변경1을 누르셨습니다1")
// })
// btn2.addEventListener("click",function(){
//     textInput.setAttribute("type","radio")
// })

// $(".btn1").on("click",function(){
//     $(".text-input").attr("placeholder","변경1을 누르셨습니다.")
// });
// $(".btn2").on("click",function(){
//     $(".text-input").attr("type","radio")
// });
// function changeCSS(){
//     document.querySelector("div").style= "background-color:orange; width: 100px; height:100px;";
// }
// $(".btn2").on("click",function(){
//     $("div").css("background-color","skyblue");
// })

// $("p").html("<h1>루피</h1>");
// document.querySelector("p").innerHTML="<h1>루피</h1>";

// const li = document.createElement("li");
// li.textContent = "추가용";

// $(".me").before(li);
// $(".me").after(li);

// const ul = document.querySelector("ul");
// const inputText = document.querySelector(".input-text");
// const btn = document.querySelector(".btn");
// const btn2 = document.querySelector(".btn2");


// btn.addEventListener("click",function(){
//     const li = document.createElement("li");
//     li.textContent = inputText.value;
//     ul.append(li);
//     inputText.value= "";
// })
// function prependLi(){
//     let text = $(".input-text").val();

//     $("ul").prepend(`<li>${text}</li>`);
//     inputText.value= "";
// }
const children =document.querySelector("div").children;
const childNodes = document.querySelector("div").childNodes;

console.log(children);
console.log(childNodes);
