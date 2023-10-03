const White_keys = ['z','x','c','v','b','n','m']
const Black_keys = ['s','d','g','h','j']

const keys = document.querySelectorAll('.key')
const whitekeys = document.querySelectorAll('.key.white')
const blackkeys = document.querySelectorAll('.key.black')

keys.forEach(key=>
    {
key.addEventListener('click', () => playNote(key))
})

document.addEventListener('keydown',e =>{
    if(e.repeat) return
    const key = e.key
    const whitekeyindex = White_keys.indexOf(key)
    const blackkeyindex = Black_keys.indexOf(key)
    
    if(whitekeyindex > -1)playNote(whitekeys[whitekeyindex])
    if(blackkeyindex > -1)playNote(blackkeys[blackkeyindex])


})


function playNote(key){
    const noteAudio = document.getElementById(key.dataset.note)
    noteAudio.currentTime =0
    noteAudio.play()
    key.classList.add('active')
    noteAudio.addEventListener('ended', () => {
        key.classList.remove('active')
    })
}
