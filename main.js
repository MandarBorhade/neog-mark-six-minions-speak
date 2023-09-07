let inputTxt = document.querySelector('#input-txt')
let btnTranslate = document.querySelector('#btn-translate')
let outputTxt = document.querySelector('#output-txt')

const handleTranslate = () => {
    let constructedUrl = 'https://api.funtranslations.com/translate/minion.json?text=' + inputTxt.value
    fetch(constructedUrl)
    .then(response => response.json())
    .then(data => outputTxt.innerText = data.contents.translated )
}

btnTranslate.addEventListener('click' , handleTranslate)

