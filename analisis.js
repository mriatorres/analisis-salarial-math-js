const Analisis = {};

Analisis.esPar = function (lista){
    return!(lista.length%2);
}

Analisis.esImpar = function (lista){
    return lista.length%2;
}

Analisis.ordenarLista = function (listaDesordenada){
    function ordenarListaSort (valorAcumulado,nuevoValor){
        return valorAcumulado-nuevoValor;
    }
        const lista = listaDesordenada.sort((a,b)=>a-b);
        return lista;
    }

Analisis.calcularMediana = function (listaDesordenada){
    const lista = Analisis.ordenarLista(listaDesordenada);
    const listaEsPar= Analisis.esPar(lista);
    if(listaEsPar){
        const indexMitad1ListaPar=((lista.length/2)-1).toFixed(1);
        const indexMitad2ListaPar=lista.length/2;
        const listaMitades=[];
        listaMitades.push(lista[indexMitad1ListaPar]);
        listaMitades.push(lista[indexMitad2ListaPar]);
        const medianaListaPar = Analisis.calcularPromedio(listaMitades);
        return medianaListaPar;}
        else{
            const indexMitadListaImpar=Math.floor(lista.length/2);
            const medianaListaImpar=lista[indexMitadListaImpar];
            return medianaListaImpar;}
}

Analisis.ordenarListaBidimensional = function ordenarListaBidimensional(listaDesordenada, i) {
  function ordenarListaSort(valorAcumulado, nuevoValor) {
    return valorAcumulado[i] - nuevoValor[i];
  }
  
  const lista = listaDesordenada.sort(ordenarListaSort);
  return lista;
}


Analisis.calcularModa = function (lista) {
    const listaCount = {};

  for (let i = 0; i < lista.length; i++) {
    const elemento = lista[i];

    if (listaCount[elemento]) {
      listaCount[elemento] += 1;
    } else {
      listaCount[elemento] = 1;
    }
  }
  const listaArray = Object.entries(listaCount);
  const listaOrdenada = Analisis.ordenarListaBidimensional(listaArray, 1)
  const listaMaxNumber = listaOrdenada[listaOrdenada.length - 1];
  const moda = Number(listaMaxNumber[0]);
  return moda;
}


Analisis.calcularPromedio = function (lista){
    Analisis.sumarTodosElementos = function (valorAcumulado,nuevoValor)
    {return valorAcumulado+nuevoValor;}
    const sumaLista=lista.reduce(Analisis.sumarTodosElementos);
    const promedio= Number(sumaLista/lista.length).toFixed(0);
    return promedio;
}

Analisis.sumarTodosElementos = function(valorAcumulado, nuevoValor) {
    return valorAcumulado + nuevoValor;
  }

  Analisis.descendente = function(a,b) {
    return b - a;
}



//mediana salarios
Analisis.medianaSalarios = function (salarios) {
const medianaSalarios = Analisis.calcularMediana(salarios);
return medianaSalarios;
 }

 Analisis.porcentajesCrecimiento = function (trabajos, salarios) {
    let porcentajesCrecimiento = [];

    for (let i = 1; i < trabajos.length; i++) {
        const salarioActual = salarios[i];
        const salarioPasado = salarios [i -1];
        const crecimiento = parseFloat(salarioActual - salarioPasado.toFixed(1));
        const porcentajeCrecimiento = parseFloat(crecimiento / salarioPasado.toFixed(1));
        porcentajesCrecimiento.push(porcentajeCrecimiento).toFixed(1);
    }
    return porcentajesCrecimiento;
 }

 Analisis.nuevoSalario = function (salarios, medianaPorcentajesCrecimiento) {
    ultimoSalario = salarios.at(- 1);
    const aumentoSalario = ultimoSalario * medianaPorcentajesCrecimiento;
    const nuevoSalario = ultimoSalario + aumentoSalario;
    return nuevoSalario;
 }

 Analisis.topMejoreSalarios = function (salarios) {
    let topSalariosLista = salarios;
    topSalariosDescendente = topSalariosLista.sort(Analisis.descendente);
    const topSalarios = topSalariosDescendente.slice(0,-3);
    return topSalarios;
 }

Analisis.ingresoAños = function () {
  let inputAño = document.getElementById("año").value;
  console.log(inputAño);
  let separadoA = inputAño.split(",");
  let añosTrabajo = [];

  separadoA.forEach(element => {
      añosTrabajo.push(element);
  });
  return añosTrabajo;
}

Analisis.ingresoTrabajos = function () {
  let inputTrabajo = document.getElementById('trabajo').value;
    let trabajos = inputTrabajo.split(",");
    return trabajos
}

Analisis.ingresoSalarios = function () {

      let inputSalario = document.getElementById("salario").value;
      console.log(inputSalario);
      let separadoS = inputSalario.split(",");
      let añoSalarios = [];
  
      separadoS.forEach(element => {
          añoSalarios.push(parseFloat(element));
      });
      return añoSalarios;
}


