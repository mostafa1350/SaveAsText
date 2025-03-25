// =============== def Variable ==================

const textArea = document.querySelector("textarea"),
inputFileName = document.querySelector(".fileName input"),
selectMenu = document.querySelector(".selectMenu select"),
btnSave = document.querySelector(".btnSave");

// ==============================================
btnSave.addEventListener("click",()=>{
    console.log(textArea.value);
});