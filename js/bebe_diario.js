document.addEventListener('DOMContentLoaded', function () {
    enviarButton = document.getElementById('enviarButton')

    enviarButton.addEventListener('click', function () {
        // inputsTexto = document.querySelectorAll('input[type="text"]')
        // textoInfo = []
        // inputsTexto.forEach(function(input) {
        //     textoInfo.push(input.value)
        // })

        // checkboxes = document.querySelectorAll('input[type="checkbox"]:checked')
        // checkboxesInfo = []
        // checkboxes.forEach(function(checkbox) {
        //     checkboxesInfo.push(checkbox.nextElementSibling.textContent)
        // })

        // inputsNumero = document.querySelectorAll('input[type="number"]')
        // numeroInfo = []
        // inputsNumero.forEach(function(input) {
        //     numeroInfo.push(input.value)
        // })
        
        enviarButton.style.backgroundColor = '#4CAF50'
        enviarButton.style.color = 'white'
        enviarButton.textContent = 'Enviado com sucesso!'
        enviarButton.disabled = true

        todasCheckboxes = document.querySelectorAll('input[type="checkbox"]')
        todasCheckboxes.forEach(function(checkbox) {
            checkbox.checked = false
        })

        inputsTexto = document.querySelectorAll('input[type="text"]')
        inputsTexto.forEach(function(input) {
            input.value = ''
        })

        inputsNumero = document.querySelectorAll('input[type="number"]')
        inputsNumero.forEach(function(input) {
            input.value = ''
        })
    })
})
