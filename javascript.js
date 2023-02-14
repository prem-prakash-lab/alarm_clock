const currenttime=document.querySelector("h1"),
selectmenu=document.querySelectorAll("select"),
setAlarmBtn=document.querySelector("button");
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

setInterval(()=>{
    //getting hours,mins,secs

    let date=new Date(),
    h=date.getHours(),
    m=date.getMinutes(),
    s=date.getSeconds(),
    ampm="AM";

    if (h>=12){
        h=h-12;
        ampm="PM"
    }
    h= h==0?h=12:h;

    h=h < 10 ? "0"+h : h ;
    s=s < 10 ? "0"+s : s ;
    m=m < 10 ? "0"+m : m ;
    currenttime.innerText=`${h}:${m}:${s} ${ampm}`

},1000);
