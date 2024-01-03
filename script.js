console.log("Welcome to Spotify...");
//Initialising the variables...
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songItemsPlay = Array.from(document.getElementsByClassName("songItemPlay"));
let previous = document.getElementById('previous');
let next = document.getElementById('next');
let masterSongName = document.getElementById('masterSongName');
let changBg = document.getElementsByClassName('container');

let songs = [
    {songName: "TuHaiToMujhe", filePath:"1.mp3", coverPath:"1.jpg", bg:" 1.jpg"},
    {songName: "DevaDeva", filePath:"2.mp3", coverPath:"2.jpg", bg:" 2.jpg"},
    {songName: "TereVaaste", filePath:"3.mp3", coverPath:"3.jpg", bg:" 3.jpg"},
    {songName: "MaanMeriJaan", filePath:"4.mp3", coverPath:"4.jpg", bg:" 4.jpg"},
    {songName: "Kesariya", filePath:"5.mp3", coverPath:"5.jpg", bg:" 5.jpg"},
    {songName: "MalangSajna", filePath:"6.mp3", coverPath:"6.jpg", bg:" 6.jpg"},
    {songName: "DilGaltiKarBaithaHai", filePath:"7.mp3", coverPath:"7.jpg", bg:" 7.jpg"},
    {songName: "SadiGali", filePath:"8.mp3", coverPath:"8.jpg", bg:" 8.jpg"},
    {songName: "RaatanLambiyan", filePath:"9.mp3", coverPath:"9.jpg", bg:" 9.jpg"},
    {songName: " PehliBaarishMein", filePath:"10.mp3", coverPath:"10.jpg", bg:" 10.jpg"}
]

songItems.forEach((element, i)=>{
    // console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    // element.getElementsByClassName("timestamp")[0].innerText = songs[i].timestamp;
});
// audioElement.play();


//Handling of play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;

    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

//listening to events:
audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate');
    //Update Seekbar
    let progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})



const makeAllPlays = () => {
    songItemsPlay.forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

songItemsPlay.forEach((element)=>{
    element.addEventListener('click',(e)=>{
        songIndex = parseInt(e.target.id);
        // console.log(e.target);
        makeAllPlays();
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        
        audioElement.src = `${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName
        
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-circle-pause');
    })
})

next.addEventListener('click',()=>{
    if(songIndex >= 9){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }

    audioElement.src = `${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-circle-pause');
})

previous.addEventListener('click',()=>{
    if(songIndex <= 0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }

    audioElement.src = `${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-circle-pause');
})