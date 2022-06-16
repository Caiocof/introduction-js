const form = document.getElementById('form')
const inputForm = form.getElementsByTagName('input')[0]

const textArea = document.getElementById('groupCheckBox').getElementsByTagName('ul')[0]


form.addEventListener('submit', (event) => {
    value = inputForm.value
    event.preventDefault();
    if (value) {
        textArea.innerHTML += `
        <li>
            <input type="checkbox" id="${value}" />
            <label for="${value}">${value}</label>
        </li>
        `
        inputForm.value = ''
    }
}, false)
