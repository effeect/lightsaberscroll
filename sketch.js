function preload(){
    lighsound = loadSound("lightsaber.mp3")
}

function setup(){
    createCanvas(2160,1080)
}


function draw(){
    background(0)
    window.onscroll = function (e) {  
        lighsound.play()
    } 
    
    
}