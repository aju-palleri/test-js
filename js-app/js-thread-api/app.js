// var m=moment().format("DD MM YYYY hh:mm:ss");
// var n=m.add(2, 'hours');

// console.log(m);
// console.log(n);

let delayThread = function (addSeconds) {
    var curTime = Math.floor(Date.now() / 1000);
    var endTime = curTime + addSeconds;
    count = 0;

    while (curTime != endTime) {
        console.log(count++);
        curTime = Math.floor(Date.now() / 1000);
    }
}

function delayTime(){
    delayThread(15);
}

