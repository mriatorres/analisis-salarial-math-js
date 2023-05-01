//     input usario


function analisisPersonalSalario () {

    //agregar boton limpiar
    document.getElementById('limpio').classList.remove('inactive');



    //Resultado div
    document.getElementById('procesos').classList.remove('inactive')
    document.querySelector('.btnAnalizar').classList.add('inactive')


    //titulos
    const historial = document.createElement('span');
    document.querySelector('#historialSalarios').appendChild(historial);
    historial.innerText ='Historial Salarios';

    //Historial empleos


    //años 
    const añosTrabajo = Analisis.ingresoAños();
    console.log(añosTrabajo);

    //trabajo
    const trabajos = Analisis.ingresoTrabajos();
    console.log(trabajos);

    //salario
    

    let añoSalarios = Analisis.ingresoSalarios();




    //salarios string

    let inputSalario = document.getElementById("salario").value;
      let salarioString = inputSalario.split(",");
    console.log(salarioString);

    let salarioDecimal = [];

    salarioString.forEach(element => {
        salarioDecimal.push(parseFloat(element).toFixed(6));
    });

    console.log(añoSalarios);
    console.log(salarioDecimal);
    //promedio salarios
    const promedioSalarios = Analisis.calcularPromedio(añoSalarios);
    console.log(promedioSalarios);

    //moda salarios
    const modaSalarios = Analisis.calcularModa(añoSalarios);
    console.log(modaSalarios);


    //Mediana salarios
    const medianaSalarios = Analisis.medianaSalarios(añoSalarios);
    console.log(medianaSalarios);

    //proyeccion 

    //porcentajes crecimiento por años
    const porcentajesCrecimiento = Analisis.porcentajesCrecimiento(trabajos, añoSalarios);

    console.log(porcentajesCrecimiento);

    //Mediana porcentajes crecimiento
    const medianaPorcentajesCrecimiento = Analisis.calcularMediana(porcentajesCrecimiento) 
    console.log(medianaPorcentajesCrecimiento);

    // Proyeccion nuevo salario
    const nuevoSalario = Analisis.nuevoSalario(añoSalarios, medianaPorcentajesCrecimiento)

    console.log(nuevoSalario);

    //Top salarios
    const topSalarios= Analisis.topMejoreSalarios(añoSalarios);
    console.log(topSalarios);


    //salarios default order
    function defecto () {
        return 0;
    }

    //Historial salarios
    

    const ctx = document.getElementById('salariosCanvas').getContext('2d');

    //gradient fill
    let gradient = ctx.createLinearGradient(0,0,0,400);
    gradient.addColorStop(0,'rgb(255, 127, 0, 1');
    gradient.addColorStop(1, 'rgb(255,20,147, 0.3')

    const labels = añosTrabajo;

    const data = {
        labels,
        datasets: [
            { 
            data: salarioString,
            label: "Salarios a traves del tiempo",
            fill: true,
            backgroundColor: gradient,
        },
    ],
   
    };

    const  config = {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            scales: {
                y: {
                    ticks: {
                        callback: function (value) {
                            return value + "$";
                        }
                    }
                },
            },
        },
    };
    const myChart = new Chart (ctx, config);


    //Promedio salarios
    const promedioSalarioString = promedioSalarios.toString(promedioSalarios);
    const promedio = document.createElement('span');
    const promedioTitulo = document.createElement('span');
    document.querySelector('.promedioTitulo').appendChild(promedioTitulo);
    document.querySelector('.promedioSalarios').appendChild(promedio);

    promedioTitulo.innerText = 'Promedio Salarios';
    promedio.innerText = promedioSalarioString;


    //top salarios
    const topSalarioString = topSalarios.toString(topSalarios);
    const topS = document.createElement('span');
    document.querySelector('#topSalarioS').appendChild(topS);
    topS.innerText ='Top Salarios' + '\n';
    const top1S = topSalarios[0].toString();
    const top2S = topSalarios[1].toString();
    const top3S = topSalarios[2].toString();
    const tops = document.createElement('span');
    document.querySelector('#topsLista').appendChild(tops);
    tops.innerText = '• '+top1S + '\n' + '• ' + top2S + '\n' + '• ' + top3S;



    //Porcentajes Crecimiento
 


    /*const porcent = document.querySelector('#crecimientoP');

    const labelsP = añosTrabajo;

    const dataP = {
        labelsP,
        datasets: [
            {
                data: porcentajesCrecimiento,
                label: 'Porcentajes Crecimiento',
        }]
    }

    const configP = {
        type: 'line',
        data: dataP,
        options: {
            responsive: true,
        },
    };

    const myChartP = new Chart(porcent, configP)
    */

    //media porcentaje crecimiento
    const medianaPS = medianaPorcentajesCrecimiento.toString();
    document.getElementById('mediapc').innerText = medianaPS; 
}

function limpiar () {
    location.reload();
}
