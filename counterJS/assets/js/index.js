const span = document.getElementsByClassName('currentNumber')[0];
const buttonIncrement = document.getElementsByClassName('increment')[0];
const buttonDecrement = document.getElementsByClassName('decrement')[0];


var spanValue = parseInt(span.textContent);

buttonIncrement.addEventListener('click', increment, false);
buttonDecrement.addEventListener('click', decrement, false);


function increment() {
    span.textContent = spanValue += 1
    span.style.color = styleColor(spanValue)
}

function decrement() {
    span.textContent = spanValue -= 1
    span.style.color = styleColor(spanValue)

}

function styleColor(value) {
    return value == 0 ? 'black' : value < 0 ? 'red' : 'green'
}
