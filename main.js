//     input usario

function analisisPersonalSalario () {

    //años
    let inputAño = document.getElementById("año").value;
    console.log(inputAño);
    let separadoA = inputAño.split(",");
    let añosTrabajo = [];

    separadoA.forEach(element => {
        añosTrabajo.push(Number(element));
    });
    
    console.log(añosTrabajo);

    //trabajo
    let inputTrabajo = document.getElementById('trabajo').value;
    console.log(inputTrabajo);
    let trabajos = inputTrabajo.split(",");
    console.log(trabajos);

    //salario
    let inputSalario = document.getElementById("salario").value;
    console.log(inputSalario);
    let separadoS = inputSalario.split(",");

    let añoSalarios = [];

    separadoS.forEach(element => {
        añoSalarios.push(Number(element));
    });

    console.log(añoSalarios);

    //mediana salarios
    const medianaSalarios = Analisis.calcularMediana(añoSalarios);
    console.log(medianaSalarios);

    //proyeccion 
    //porcentajes crecimiento por años
    let porcentajesCrecimiento = [];

    for (let i = 1; i < trabajos.length; i++) {
        const salarioActual = añoSalarios[i];
        const salarioPasado = añoSalarios [i -1];
        const crecimiento = salarioActual - salarioPasado;
        const porcentajeCrecimiento = crecimiento / salarioPasado;
        porcentajesCrecimiento.push(porcentajeCrecimiento)
    }

    console.log(porcentajesCrecimiento);

    //Mediana porcentajes crecimiento

    const medianaPorcentajesCrecimiento = Analisis.calcularMediana(porcentajesCrecimiento) 
    console.log(medianaPorcentajesCrecimiento);

    // Proyeccion nuevo salario

    ultimoSalario = añoSalarios.length - 1;
    const aumentoSalario = ultimoSalario * medianaPorcentajesCrecimiento;
    const nuevoSalario = ultimoSalario + aumentoSalario;

    console.log(nuevoSalario);

    //Top salarios
    let topSalarios = [];

    for (let i = 1; i < trabajos.length; i++) {
        const salarioActual = añoSalarios[i];
        const salarioPasado = añoSalarios [i -1];
        if(salarioActual > salarioPasado){
            topSalarios.push(salarioActual)
        }
    }
    console.log(topSalarios);
   
}


