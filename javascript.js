const currenttime=document.querySelector("h1"),
content=document.querySelector(".content"),
selectmenu=document.querySelectorAll("select"),
setAlarmBtn=document.querySelector("button");
let alarmTime,isalarmset=false,
ringtone=new Audio("files/ringtone.mp3");

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
    selectmenu[2].firstElementChild.insertAdjacentHTML("afterend",option);
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
    currenttime.innerText=`${h}:${m}:${s} ${ampm}`;
    if(alarmTime ==`${h}:${m} ${ampm}`){
        ringtone.play();
        ringtone.loop=true;
    }

},1000);


function setalarm(){
    if(isalarmset){
        alarmTime="";
        ringtone.pause();
        content.classList.remove("disable");
        setAlarmBtn.innerHTML="Set Alarm";
        return isalarmset=false;

    }
    let time=`${selectmenu[0].value}:${selectmenu[1].value} ${selectmenu[2].value}`;
    if (time.includes("Hour") ||time.includes("Minute") ||time.includes("AM/PM")  ){
        return alert("please, select a valid time to set Alarm!");
    }
    isalarmset=true;
    alarmTime=time;
    content.classList.add("disable");
    setAlarmBtn.innerHTML="Clear Alarm";
}


setAlarmBtn.addEventListener("click",setalarm);