// Drumkit

const clapEl = document.getElementById('clap')
const hihatEl = document.getElementById('hihat')
const kickEl = document.getElementById('kick')
const openhatEl = document.getElementById('openhat')
const rideEl = document.getElementById('ride')
const snareEl = document.getElementById('snare')
const tinkEl = document.getElementById('tink')
const tomEl = document.getElementById('tom')
const soundEl = document.getElementById('layout-btn')

document.body.addEventListener('keydown', (event) =>{
    
    const clap = new Audio('./sounds/clap.wav')
    const hihat = new Audio('./sounds/hihat.wav')
    const kick = new Audio('./sounds/kick.wav')
    const openhat = new Audio('./sounds/openhat.wav')
    const ride = new Audio('./sounds/ride.wav')
    const snare = new Audio('./sounds/snare.wav')
    const tink = new Audio('./sounds/tink.wav')
    const tom = new Audio('./sounds/tom.wav')
    const last = new Audio('./sounds/whistle.mp3')
   
    Audio.currentTime = 0;

    switch (event.key) {
        case 'a':
            clap.play()
            clapEl.classList.add('active')
            clap.addEventListener('ended', () => {
                clapEl.classList.remove('active')
            })
            break

        case 's':
            hihat.play()
            hihatEl.classList.add('active')
            hihat.addEventListener('ended', () => {
                hihatEl.classList.remove('active')
            })
            break

        case 'd':
            kick.play()
            kickEl.classList.add('active')
            kick.addEventListener('ended', () => {
                kickEl.classList.remove('active')
            })
            break 
        
        case 'f':
            openhat.play()
            openhatEl.classList.add('active')
            openhat.addEventListener('ended', () => {
                openhatEl.classList.remove('active')
            })
            break 

        case 'g':
            ride.play()
            rideEl.classList.add('active')
            ride.addEventListener('ended', () => {
                rideEl.classList.remove('active')
            })
            break 

        case 'h':
            snare.play()
            snareEl.classList.add('active')
            snare.addEventListener('ended', () => {
                snareEl.classList.remove('active')
            })
            break 

        case 'z':
            tink.play()
            tinkEl.classList.add('active')
            tink.addEventListener('ended', () => {
                tinkEl.classList.remove('active')
            })
            break 

        case 'x':
            tom.play()
            tomEl.classList.add('active')
            tom.addEventListener('ended', () => {
                tomEl.classList.remove('active')
            })
            break 

        case 'p':
            last.play()
            soundEl.classList.add('active')
            last.addEventListener('ended', () => {
                soundEl.classList.remove('active')
            })
            break 

        }
})

