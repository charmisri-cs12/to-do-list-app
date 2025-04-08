const notesContainer=document.querySelector(".notescontainer");
const createBtn=document.querySelector(".btn");
let notes=document.querySelectorAll(".inputbox");

function showNots(){
  notesContainer.innerHTML=localStorage.getItem("notes");
}
showNots();


function updateStorage(){
  localStorage.setItem("notes", notesContainer.innerHTML);
}


createBtn.addEventListener("click", ()=>{
  let inputbox=document.createElement("p");
  let i=document.createElement("i");
  inputbox.className="inputbox";
  inputbox.setAttribute("contenteditable", "true");
  i.className="ri ri-delete-bin-fill";
  notesContainer.appendChild(inputbox).appendChild(i);

})
notesContainer.addEventListener("click", function(e){
  if(e.target.tagName==="I"){
    e.target.parentElement.remove();
    updateStorage();
  }
  else if(e.target.tagName==="P"){
    notes=document.querySelectorAll(".inputbox");
    notes.forEach(nt=>{
      nt.onKeyup = function(){
        updateStorage();
      }
    })
  }
})

document.addEventListener("keydown", event =>{
  if(event.key==="Enter"){
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
})
