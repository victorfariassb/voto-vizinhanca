dados = [
    {
        "estado": "Rio de Janeiro",
        "cidade": "Rio de Janeiro",
        "local": 'Colégio Santa Maria',
        "zona": 1,
        "secao" : 1,
        "Bolsonaro": 12,
        "Lula": 11
    },
    {
        "estado": "Rio de Janeiro",
        "cidade": "Rio de Janeiro",
        "local": 'Colégio Santa Catarina',
        "zona": 1,
        "secao" : 2,
        "Bolsonaro": 11,
        "Lula": 12
    }
]

let zona_input = document.getElementById('zona_input')
let secao_input = document.getElementById('secao_input')
let resposta = document.querySelector('output')

let estado = document.querySelector('.estado')
let cidade = document.querySelector('.cidade')
let bairro = document.querySelector('.bairro')
let local = document.querySelector('.local')
let zona_secao = document.querySelector('.zona_secao')
let votos = document.querySelector('.votos')
let foto = document.querySelector('.foto')

let body = document.querySelector('body')

zona_input.addEventListener('input', validar)
secao_input.addEventListener('input', validar)

function validar() {
    let valor = zona_input.value.trim();
    let valor2 = secao_input.value.trim();

    resultados = []

    for (let dado of dados) {
        if (valor == dado.zona && valor2 == dado.secao) {
            estado.innerHTML = "<p><b>Estado:</b> " + dado.estado + "</p>"
            cidade.innerHTML = "<p><b>Cidade:</b> " + dado.cidade + "</p>"
            local.innerHTML = "<p><b>Local de votação:</b> " + dado.local + "</p>"
            zona_secao.innerHTML = "<p><b>Zona:</b> " + dado.zona + "<b>   Seção:</b> " + dado.secao + "</p>"
            if (dado.Bolsonaro > dado.Lula) {
                body.style.backgroundColor = "#30306D"
                votos.innerHTML = "<h3>Bolsonaro ganhou com " + dado.Bolsonaro + " votos. Lula teve " + dado.Lula + " votos.<h3>"
                foto.innerHTML =  "<img src='bolsonaro.png' alt='Lula'>"
            }
            if (dado.Bolsonaro < dado.Lula) {
                body.style.backgroundColor = "#C0122D"
                votos.innerHTML = "<h3>Lula ganhou com " + dado.Lula + " votos. Bolsonaro teve " + dado.Bolsonaro + " votos.<h3>"
                foto.innerHTML =  "<img src='lula2.png' alt='Lula'>"
            }
            if (dado.Bolsonaro == dado.Lula) {
                body.style.backgroundColor = "rgb(210, 207, 207)"
                votos.innerHTML = "<h3>Os dois candidatos empataram com " + dado.Lula + " votos.<h3>"
            
            }
        }
    }
}

function limpar() {
    estado.textContent = ''
    cidade.textContent = ''
    local.textContent = ''
    zona_secao.textContent = ''
    votos.textContent = ''

    body.style.backgroundColor = "rgb(210, 207, 207)"
}