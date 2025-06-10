let saveButton =document.getElementById("savebutton")
let textaeraElemenet=document.getElementById("textareaElement")
saveButton.onclick = function(){
    let valueOfTextarea=textaeraElemenet.value
    localStorage.setItem("userData",valueOfTextarea)
}

let getData = localStorage.getItem("userData")
if(getData === null){
    textaeraElemenet.value=""
}
else{
    textaeraElemenet.value=getData
}