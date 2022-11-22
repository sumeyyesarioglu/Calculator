const display = document.querySelector('#calculator-input')
const keys = document.querySelector('.calculator-keys')

let displayValue = '0'

updateDisplay()

function updateDisplay() {
    display.value = displayValue
}
keys.addEventListener('click',(e)=> {
    const element= e.target
    if(!element.matches('button')) return;//BUTON OLMAYANLARI DÖNME DEMEK OLUYOR
    console.log(element)
})