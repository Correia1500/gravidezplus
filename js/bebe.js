document.addEventListener('DOMContentLoaded', function () {
    botao = document.querySelector('main a')

    botao.addEventListener('click', function (event) {
        event.preventDefault()
        window.location.href = 'bebe_diario.html' 
    })
})
