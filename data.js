let dados = [
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

let zona_input = document.getElementById('zona_input')
let secao_input = document.getElementById('secao_input')

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

botao.addEventListener('click', validar)


function validar() {
    let valor = Number(zona_input.value.trim());
    let valor2 = Number(secao_input.value.trim());

    for (let dado of dados) {
        if (valor == dado.zona && valor2 == dado.secao) {
            resultado.style.backgroundColor = "#0D0D0D"
            votos.style.paddingBottom = '1vh'
            resultado.style.border = "1px solid black"

            estado.innerHTML = "<p><b>Estado:</b> " + dado.estado + "</p>"
            cidade.innerHTML = "<p><b>Cidade:</b> " + dado.cidade + "</p>"
            local.innerHTML = "<p><b>Local de votação:</b> " + dado.local + "</p>"
            zona_secao.innerHTML = "<p><b>Zona:</b> " + dado.zona + "<b>   Seção:</b> " + dado.secao + "</p>"
            if (dado.Bolsonaro > dado.Lula) {
                votos.style.color = 'white'
                votos.innerHTML = "<h3>Bolsonaro ganhou com " + dado.Bolsonaro + " votos. Lula teve " + dado.Lula + " votos.<h3>"
            }
            else if (dado.Bolsonaro < dado.Lula) {
                votos.style.color = 'white'
                votos.innerHTML = "<h3>Lula ganhou com " + dado.Lula + " votos. Bolsonaro teve " + dado.Bolsonaro + " votos.<h3>"
            }
            else if (dado.Bolsonaro == dado.Lula) {
                votos.style.color = 'white'
                votos.innerHTML = "<h3>Os dois candidatos empataram com " + dado.Lula + " votos.<h3>"
            }
            break
        }
        else if (valor != dado.zona || valor2 != dado.secao) {
            votos.style.color = 'black'
            resultado.style.backgroundColor = "#D9D5C5"
            resultado.style.border = "none"
            votos.innerHTML = "<h3>Local não identificado. Tente novamente</h3>"
            estado.innerHTML = ""
            cidade.innerHTML = ""
            local.innerHTML = ""
            zona_secao.innerHTML = ""
        }
    }
}
