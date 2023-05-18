
/* Steps
----------
- This is getting the DATE from javascript object method. 
- Secondly is the function that generate the current time wrt setInterval()
*/



//  GETTING THE DATE
const day = new Date()
 const fix = document.getElementById("date");
 fix.textContent = day.toDateString()


//  GETTING THE FUNCTION WITH A FUNCTION NAME "time()"
function timer() {

    let ourTime = new Date()    
    let hrs = ourTime.getHours()
    let mins = ourTime.getMinutes()
    let secs = ourTime.getSeconds()

    document.querySelector("#hours").textContent = hrs;
    document.querySelector("#minutes").textContent = mins;
    document.querySelector("#seconds").textContent = secs;

    if (hrs > 12) {
        document.getElementById("meridian").textContent = "PM";
        document.getElementById("hours").textContent = hrs - 12;
    }

    if (mins < 10) {
        document.getElementById("minutes").textContent = "0" + mins;
    }


}


setInterval(timer, 100)






