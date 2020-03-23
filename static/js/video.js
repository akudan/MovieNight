/// <reference path="./both.js" />

var flvPlayer;

function initPlayer(qual) {
    if (flvjs.isSupported()) {
        var videoElement = document.getElementById("videoElement");
        if(flvPlayer) {
            flvPlayer.destroy();
        }
        flvPlayer = flvjs.createPlayer({
            type: "flv",
            url: "/show_"+qual,
            isLive: false,
        }, {
            enableStashBuffer: true,
        });
        flvPlayer.attachMediaElement(videoElement);
        flvPlayer.load();
        flvPlayer.play();
    }
}

//window.addEventListener("load", function() { initPlayer("src"); });
