const button=document.querySelector(".btn");
const body=document.body;
const text=document.querySelector(".text");
function colorGenerator(){
    const red=Math.floor(Math.random()*256);
    const green=Math.floor(Math.random()*256);
    const blue=Math.floor(Math.random()*256);
    const randomColor=`rgb(${red},${green},${blue})`;
    return randomColor;
}
button.addEventListener("click",()=>{
    const color=colorGenerator();
    body.style.backgroundColor=color;
    text.textContent=color;
})
