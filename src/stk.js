function copySTK(){
const stk = document.getElementById("soTK").innerText;

//stk.setSelectionRange(0,99999);
navigator.clipboard.writeText(stk);
alert("đã copy");
}