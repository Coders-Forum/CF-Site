function showGuidelines(){

document.getElementById("guidelines").style.display="block"

}



function toggleRound(id){

let rounds=document.querySelectorAll(".round-content")

rounds.forEach(r=>{

r.style.display="none"

})

document.getElementById(id).style.display="block"

}