const clock = document.querySelector("#clock");

function Ticks(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const min = String(date.getMinutes()).padStart(2, "0");
    const sec = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${min}:${sec}`;
}

Ticks();
setInterval(Ticks, 1000);
//setTimeout(Ticks, 0); 인자 시간에 실행
//SetInterval(Ticks, 0); 인자 시간이 되면 실행, 반복