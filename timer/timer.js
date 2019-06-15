var divs = ["setup", "timer", "finished"];
const hidRest = (divClass) => {
    divs.map((e) => {
        if (e !== divClass) document.querySelector("." + e).style.display = "none";
        else document.querySelector("." + e).style.display = "block";
    })
}

const openFullscreen = () => {
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) { /* Firefox */
        document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) { /* IE/Edge */
        document.documentElement.msRequestFullscreen();
    }
}

const parseDigit = (digit) => {
    return (digit > 9) ? digit : "0" + digit;
}

var paused = false;

const changePauseStatus = () => {
    paused = paused ? false : true;
}

document.querySelector(".timer h3").addEventListener("click", () => {
    clearInterval(id);
    hidRest("finished");
})

document.querySelector(".setup h3").addEventListener("click", () => {
    document.querySelector("#seconds").value = 0;
    document.querySelector("#minutes").value = 0;
    document.querySelector("#hours").value = 0;
})

let button = document.querySelector("#submitbutton");
button.addEventListener("click", (e) => {
    e.preventDefault();
    let seconds = document.querySelector("#seconds").value;
    let minutes = document.querySelector("#minutes").value;
    let hours = document.querySelector("#hours").value;
    seconds = Number(seconds);
    minutes = Number(minutes);
    hours = Number(hours);

    if (seconds > 60) {
        let div = Math.floor(seconds / 60);
        seconds = seconds - 60 * div;
        minutes = minutes + div;
    }
    if (minutes > 60) {
        let div = Math.floor(minutes / 60);
        minutes = minutes - 60 * div;
        hours = hours + div;
    }
    if (hours > 9999999999) {
        hours = 9999999999;
        minutes = seconds = 59;
    }

    let sum = seconds + minutes * 60 + hours * 60 * 60;
    if (sum > 0) {
        hidRest("timer");
        openFullscreen();
        let new_seconds = Math.floor(sum % 60);
        let new_minutes = Math.floor((sum / 60) % 60);
        let new_hours = Math.floor((sum / 3600));
        var id = setInterval(() => {
            if (!paused) {
                document.querySelector(".timeleft").textContent = parseDigit(new_hours) + ":" + parseDigit(new_minutes) + ":" + parseDigit(new_seconds);
                new_seconds--;
                if (new_seconds < 0) {
                    new_minutes--;
                    new_seconds = 59;
                }
                if (new_minutes < 0) {
                    new_hours--;
                    new_minutes = 59;
                }
                if (new_hours === 0 && new_minutes === 0 && new_seconds === 0) {
                    setTimeout(() => {
                        clearInterval(id);
                        hidRest("finished");
                    }, 1000);

                }
            }
        }, 1000);
    }


})

let again = document.querySelector(".finished h3");
again.addEventListener("click", (e) => {
    location.reload();
})