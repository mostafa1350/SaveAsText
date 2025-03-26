// =============== def Variable ==================

const textArea = document.querySelector("textarea"),
inputFileName = document.querySelector(".fileName input"),
selectMenu = document.querySelector(".selectMenu select"),
btnSave = document.querySelector(".btnSave");
// =============================

selectMenu.addEventListener("change", ()=>{
    let selectOption = selectMenu.options[selectMenu.selectedIndex].text;
    btnSave.innerText = `Save as \" ${selectOption.split(" ")[0]} \"...`

});
// ==============================================
btnSave.addEventListener("click",()=>{
    console.log(selectMenu.value);
    //Blob , read as a text or converted to ReadblStream
    const myBlob = new Blob([textArea.value],{type: selectMenu.value});
    const fileURL = URL.createObjectURL(myBlob);
    const myLink = document.createElement("a");
    myLink.download = inputFileName.value;
    myLink.href = fileURL;
    myLink.click();
});