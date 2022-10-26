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


let votos_candidatos = []
let candidatos = []

function validar() {
    valor = zona_input.value.trim();
    valor2 = secao_input.value.trim();

    for (let dado of dados) {
        if (valor == dado.zona && valor2 == dado.secao) {
            votos_candidatos = []
            votos_candidatos.push(dado.Lula, dado.Bolsonaro)
            candidatos = ['Lula (PT)', 'Bolsonaro (PL)']

            resultado.style.backgroundColor = "#0D0D0D"
            votos.style.paddingBottom = '1vh'
            resultado.style.border = "1px solid black"

            estado.innerHTML = "<p><b>Estado:</b> " + dado.estado + "</p>"
            cidade.innerHTML = "<p><b>Cidade:</b> " + dado.cidade + "</p>"
            local.innerHTML = "<p><b>Local de votação:</b> " + dado.local + "</p>"
            zona_secao.innerHTML = "<p><b>Zona:</b> " + dado.zona + "<b>   Seção:</b> " + dado.secao + "</p>"
            if (dado.Bolsonaro > dado.Lula) {
                votos.innerHTML = "<h3>Bolsonaro ganhou com " + dado.Bolsonaro + " votos. <br>" + "Lula teve " + dado.Lula + " votos.<h3>"
            }
            if (dado.Bolsonaro < dado.Lula) {
                votos.innerHTML = "<h3>Lula ganhou com " + dado.Lula + " votos. Bolsonaro teve " + dado.Bolsonaro + " votos.<h3>"
            }
            if (dado.Bolsonaro == dado.Lula) {
                votos.innerHTML = "<h3>Os dois candidatos empataram com " + dado.Lula + " votos.<h3>"
            }
        }
        const ctx = document.getElementById('myChart').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: candidatos,
                datasets: [{
                    label: '# of Votes',
                    data: votos_candidatos,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });}            
    
}
