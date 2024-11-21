document.addEventListener('DOMContentLoaded', function () {
    botoes = document.querySelectorAll('footer a') 

    botao1 = botoes[0]
    botao2 = botoes[1]
    botao3 = botoes[2]
    botao4 = botoes[3]


    botao1.addEventListener('click', function (event) {
        event.preventDefault()
        window.location.href = 'index.html' 
    })

    botao2.addEventListener('click', function (event) {
        event.preventDefault()
        window.location.href = 'mae.html' 
    })

    botao3.addEventListener('click', function (event) {
        event.preventDefault()
        window.location.href = 'bebe.html' 
    })

    botao4.addEventListener('click', function (event) {
        event.preventDefault()
        window.location.href = 'medico.html' 
    })
})
