var app = new Framework7({
    root: "#app",
    /* app element */
    routes: [
        {
            path: '/',
            url: 'index.html',
        },
        {
            path: '/page2/',
            url: 'pages/page2.html',
        }
    ]
});

var mainView = app.views.create('.view-main');


document.addEventListener("deviceready", init, false);
//init()

function init() {
    //all camera code goes here.
    $("#takePic").on("click", function () {
        console.log("blah");
        navigator.camera.getPicture(cameraSuccess, cameraFail, cameraOptions);
    })

    var cameraOptions = {

        //number range 0-100, default is 50, can be found 
        //in online documentation for cordova camera
        quality: 80,
        limit: 1,

    }

    function cameraSuccess(imageURI) {
        console.log("great pic!");
        $("#collection").after("<div class='picture'><img class ='pic' src='" + imageURI + "'><div class='fade'></div><img class='border' src='img/polaroidbackground.png'><input class='write' type='text' name='name'></div>");
    }

    function cameraFail(message) {
        alert("failure due to: " + message);
    }

}

//testing on chrome only
//init()


//found on https://stackoverflow.com/questions/9145809/how-to-create-an-opacity-fade-improvement-over-jquery


function toggleOpacity(id) {
    var el = document.getElementById(id);
    if (el.style.opacity == 1) {
        fadeObject(el, 1, 0, 2000)
    } else {
        fadeObject(el, 0, 1, 2000)
    }
}

function fadeObject(el, start, end, duration) {
    var range = end - start;
    var goingUp = end > start;
    var steps = duration / 20; // arbitrarily picked 20ms for each step
    var increment = range / steps;
    var current = start;
    var more = true;

    function next() {
        current = current + increment;
        if (goingUp) {
            if (current > end) {
                current = end;
                more = false;
            }
        } else {
            if (current < end) {
                current = end;
                more = false;
            }
        }
        el.style.opacity = current;
        if (more) {
            setTimeout(next, 20);
        }
    }


}
