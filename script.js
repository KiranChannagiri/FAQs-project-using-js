document.addEventListener("DOMContentLoaded",function dropdown(){
    let common = document.querySelectorAll(".common");
    common.forEach((item)=>{
        let chevron = item.querySelector(".chevron");
        let answer = item.querySelector(".answer");
        chevron.addEventListener("click",()=>
            {
            answer.classList.toggle("expanded");
            console.log(answer);
            });
        });  
});
