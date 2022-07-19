var tex
$("p").on("click",function(e){
    $("#date").val(e.target.textContent);
    $("#content").val(e.target.nextElementSibling.textContent);
});
    
function writeSchedule(){
    let i = $("#date").val();
    
    stringDay = String(i);

    for(let j=0; j<41; j++){
        if($("p")[j].textContent === stringDay){
            console.log(j);
          $("td")[j].append(textbox);
            textbox.textContent = $("#content").val();
            $("#content").val("");
            
        }
    }

    

}