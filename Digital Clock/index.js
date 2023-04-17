// Set interval and get upadated time every second
setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    
// calulation for rotation
    hrotation = 30*htime + mtime/2; // h hours = (30h+m/2)
    mrotation = 6*mtime;  //m minutes = 6m
    srotation = 6*stime;  // s seconds = 6s
 
    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);