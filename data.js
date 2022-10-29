
let dados = []

fetch("votos_secao.json")
  .then(response => response.json())
  .then(json => dados.push(json));

let zona_input = document.getElementById('zona_input')
let secao_input = document.getElementById('secao_input')
let uf_input = document.getElementById('uf_input')

let botao = document.getElementById('buscar')
let resposta = document.querySelector('output')
let resultado = document.querySelector('.resultado')
let grafico = document.getElementById('myChart')

let estado = document.querySelector('.estado')
let cidade = document.querySelector('.cidade')
let bairro = document.querySelector('.bairro')
let local = document.querySelector('.local')
let zona_secao = document.querySelector('.zona_secao')
let votos = document.querySelector('.votos')

let body = document.querySelector('body')

let check = 0
let votos_candidadtos = []

botao.addEventListener('click', validar)

console.log(uf_input)

function validar() {
    let valor = Number(zona_input.value.trim());
    let valor2 = Number(secao_input.value.trim());
    let valor3 = uf_input.value
    for (let local of dados){ 
        for (let dado of local) {
            if (valor == dado.zona && valor2 == dado.secao && valor3 == dado.estado) {
                check += 1
                votos_candidadtos = []
                votos_candidadtos.push(dado.Lula, dado.Bolsonaro)
                votos.style.paddingBottom = '1vh'
                resultado.style.border = "1px solid black"

                estado.innerHTML = "<p><b>Estado:</b> " + dado.estado + "</p>"
                cidade.innerHTML = "<p><b>Cidade:</b> " + dado.municipio + "</p>"
                local.innerHTML = "<p><b>Local de votação:</b> " + dado.local + "</p>"
                zona_secao.innerHTML = "<p><b>Zona:</b> " + dado.zona + "<b>   Seção:</b> " + dado.secao + "</p>"
                if (dado.Bolsonaro > dado.Lula) {
                    votos.style.color = 'black'
                    votos.innerHTML = "<h3>Bolsonaro ganhou com " + dado.Bolsonaro + " votos. Lula teve " + dado.Lula + " votos.<h3>"
                }
                else if (dado.Bolsonaro < dado.Lula) {
                    votos.style.color = 'black'
                    votos.innerHTML = "<h3>Lula ganhou com " + dado.Lula + " votos. Bolsonaro teve " + dado.Bolsonaro + " votos.<h3>"
                }
                else if (dado.Bolsonaro == dado.Lula) {
                    votos.style.color = 'black'
                    votos.innerHTML = "<h3>Os dois candidatos empataram com " + dado.Lula + " votos.<h3>"
                }
            grafico.style.display = 'block'
            grafico.style.height = '100px'
            grafico.style.width = '300px'
            myChart.data.datasets[0].data[0] = votos_candidadtos[0];
            myChart.data.datasets[1].data[0] = votos_candidadtos[1];
            myChart.update();
            break
        }
        if (valor != dado.zona || valor2 != dado.secao) {
            votos.style.color = 'black'
            resultado.style.border = "none"
            votos.innerHTML = "<h3>Local não identificado. Tente novamente</h3>"
            estado.innerHTML = ""
            cidade.innerHTML = ""
            local.innerHTML = ""
            zona_secao.innerHTML = ""
            grafico.style.display = 'none'
        }
    }
}
}


const data = {
    labels: ['Votos'],
    datasets: [{
        label: 'Lula (PT)',
        backgroundColor: "#C0122D",
        data: votos_candidadtos[0],
    }, {
        label: 'Bolsonaro (PL)',
        backgroundColor: "#30306D",
        data: votos_candidadtos[1],
    }]
};

const config = {
    type: 'bar',
    data: data,
    options: {}
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config)
