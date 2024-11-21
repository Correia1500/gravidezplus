document.addEventListener('DOMContentLoaded', function () {
    var enviarButton = document.getElementById('enviarButton')
    var inputSintoma = document.querySelector('input[type="text"]')
    var main = document.querySelector('main')

    var sintomas = {
        "dor de cabeça": "Dicas: Se hidrate, reduza a exposição à luz e ao som, utilize compressas frias e quentes nos ombros e pescoço.",
        "náusea": "Dicas: Beba pequenas quantidades de água ou chá de gengibre, evite alimentos gordurosos ou picantes, e faça pausas para respirar profundamente em um ambiente bem ventilado.",
        "inchaço": "Dicas: Eleve as pernas sempre que possível, evite ficar em pé ou sentada por longos períodos, use roupas confortáveis e beba bastante água para ajudar na circulação.",
        "dor nas costas": "Dicas: Mantenha uma postura adequada ao sentar e ao caminhar, faça alongamentos suaves e frequentes, utilize um colchão firme para dormir e, se necessário, aplique compressas quentes na área afetada.",
        "insônia": "Dicas: Estabeleça uma rotina de sono, evite consumir cafeína ou alimentos pesados antes de dormir, crie um ambiente propício para o sono e pratique técnicas de relaxamento como a meditação.",
        "enjoo matinal": "Dicas: Coma pequenas refeições ao longo do dia, beba chá de gengibre ou água com limão, evite alimentos gordurosos ou com odores fortes e prefira alimentos secos ao acordar.",
        "azia": "Dicas: Faça refeições menores e mais frequentes, evite deitar-se logo após comer, eleve a cabeceira da cama para dormir, beba leite ou consuma iogurte natural para aliviar a sensação de queimação.",
        "cãibras nas pernas": "Dicas: Alongue-se antes de dormir, mantenha-se hidratada, aplique compressas quentes na área afetada e faça uma massagem suave.",
        "fadiga": "Dicas: Descanse sempre que possível, mantenha uma alimentação equilibrada, pratique exercícios leves como caminhadas ou yoga.",
        "prisão de ventre": "Dicas: Aumente a ingestão de fibras, beba muita água, faça atividades físicas leves regularmente."
    }

    function mostrarDica(sintoma) {
        var sintomaFormatado = sintoma.toLowerCase().trim()
        var mensagem = sintomas[sintomaFormatado] || "Sintoma não encontrado na base de dados."
        var novoCard = document.createElement('section')
        novoCard.className = 'retangulo'
        novoCard.innerHTML = '<h2>' + mensagem + '</h2>'
        main.appendChild(novoCard)
    }

    enviarButton.addEventListener('click', function () {
        mostrarDica(inputSintoma.value)
        inputSintoma.value = ''
    })
})
