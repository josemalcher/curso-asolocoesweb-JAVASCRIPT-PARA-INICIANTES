window.onload = function () {

    var btn_play = document.getElementById("btn-play");
    var btn_pause = document.getElementById("btn-pause");
    var video = document.getElementById("video");

    btn_play.addEventListener('click', function () {
        video.play();
    });

    btn_pause.addEventListener('click', function () {
        video.pause();
    });

}