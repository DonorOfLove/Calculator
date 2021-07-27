let calc = document.getElementById('calc')
let display = document.getElementById('display')
let btns = document.getElementsByTagName('button')
let res = document.getElementById('result')
let reset = document.getElementById('reset')
reset.addEventListener('click', clean)

for (i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", func)
    calc.addEventListener("click", func2)

}

function func() {
    display.value += this.value
}

display.addEventListener("keyup", func2)

function func2() {
    res.value = eval(display.value)
}

function clean() {
    res.value = ''
    display.value = ''
}