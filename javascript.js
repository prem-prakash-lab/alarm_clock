const selectmenu=document.querySelectorAll("select");
for(let i=12 ; i>0;i--){
    i=i<10 ? "0"+i :i ;
    let option=<option value="${i}">${i}</option>;
    selectmenu[0].firstElementChild.insertAdjacentHTML("afterend",option)
}