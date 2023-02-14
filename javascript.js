const selectmenu=document.querySelectorAll("select");
for(let i=12 ; i>0; i--){
    i=i < 10 ? "0"+i : i ;
    let option= `<option value="${i}">${i}</option>`;
    selectmenu[0].firstElementChild.insertAdjacentHTML("afterend",option);
}
for(let i=59 ; i>=0; i--){
    i=i < 10 ? "0"+i : i ;
    let option= `<option value="${i}">${i}</option>`;
    selectmenu[1].firstElementChild.insertAdjacentHTML("afterend",option);
}
for(let i=2 ; i>0; i--){
    let ampm=i==1?"AM":"PM";
    let option= `<option value="${ampm}">${ampm}</option>`;
    selectmenu[1].firstElementChild.insertAdjacentHTML("afterend",option);
}

