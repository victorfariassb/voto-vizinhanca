dados = [
    {
        "estado": "Rio de Janeiro",
        "cidade": "Rio de Janeiro",
        "local": 'Colégio Santa Maria',
        "zona": 1,
        "secao": 1,
        "Bolsonaro": 12,
        "Lula": 11
    },
    {
        "estado": "Rio de Janeiro",
        "cidade": "Rio de Janeiro",
        "local": 'Colégio Santa Catarina',
        "zona": 1,
        "secao": 2,
        "Bolsonaro": 11,
        "Lula": 40
    }
]

let secao_input = document.getElementById('secao_input')
let zona_input = document.getElementById('zona_input')

let botao = document.getElementById('buscar')
let resposta = document.querySelector('output')
let resultado = document.querySelector('.resultado')

let estado = document.querySelector('.estado')
let cidade = document.querySelector('.cidade')
let bairro = document.querySelector('.bairro')
let local = document.querySelector('.local')
let zona_secao = document.querySelector('.zona_secao')
let votos = document.querySelector('.votos')

let body = document.querySelector('body')

buscar.addEventListener('click', validar(secao_input, zona_input))

function validar(v1, v2) {

    valor = v1.value.trim();
    valor2 = v2.value.trim();

    for (let dado of dados) {
        if (valor == dado.zona && valor2 == dado.secao) {
            voto_grafico = {}
            voto_grafico = {
                'Lula (PT)': dado.Lula,
                'Bolsonaro (PL)': dado.Bolsonaro
            }
            resultado.style.border = "1px solid black"
            resultado.style.backgroundColor = "rgb(198, 198, 198)"
            estado.innerHTML = "<p><b>Estado:</b> " + dado.estado + "</p>"
            cidade.innerHTML = "<p><b>Cidade:</b> " + dado.cidade + "</p>"
            local.innerHTML = "<p><b>Local de votação:</b> " + dado.local + "</p>"
            zona_secao.innerHTML = "<p><b>Zona:</b> " + dado.zona + "<b>   Seção:</b> " + dado.secao + "</p>"
            if (dado.Bolsonaro > dado.Lula) {
                body.style.backgroundColor = "#30306D"
                votos.innerHTML = "<h3>Bolsonaro ganhou com " + dado.Bolsonaro + " votos. <br>" + "Lula teve " + dado.Lula + " votos.<h3>"
            }
            if (dado.Bolsonaro < dado.Lula) {
                body.style.backgroundColor = "#C0122D"
                votos.innerHTML = "<h3>Lula ganhou com " + dado.Lula + " votos. Bolsonaro teve " + dado.Bolsonaro + " votos.<h3>"
            }
            if (dado.Bolsonaro == dado.Lula) {
                body.style.backgroundColor = "rgb(210, 207, 207)"
                votos.innerHTML = "<h3>Os dois candidatos empataram com " + dado.Lula + " votos.<h3>"
            }
        
        }
    }
}