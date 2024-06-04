let numbers = [2,5,7,50,10]
i = 0 
let button = document.querySelector('#press')
let display = document.querySelector('#display')


function nextNum(){
    if(i < numbers.length){
        i++
        return numbers[i]
    }
}

button.addEventListener('click',()=>(
    display.innerHTML = nextNum()
))

