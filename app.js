let player;

const playerConfig = {
    height: '360',
    width: '640',
    playerVars: { 'autoplay': 0, 'controls': 1, 'showinfo': 0, 'rel': 0 },
    events: { 'onReady': onPlayerReady, 'onStateChange': onPlayerStateChange }
};

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', playerConfig);
}

function onPlayerReady(event) {}

function onPlayerStateChange(event) {}

function loadVideo() {
    player.loadVideoById(document.getElementById('videoId').value);
}
