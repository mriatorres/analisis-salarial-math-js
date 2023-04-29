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
        const indexMitad1ListaPar=(lista.length/2)-1;
        const indexMitad2ListaPar=lista.length/2;
        const listaMitades=[];
        listaMitades.push(lista[indexMitad1ListaPar]);
        listaMitades.push(lista[indexMitad2ListaPar]);
        const medianaListaPar = Analisis.calcularPromedio(listaMitades);
        return medianaListaPar;}
        else{
            const indexMitadListaImpar=Math.floor(lista.length/2);
            const medianaListaImpar=lista[indexMitadListaImpar];
            console.log(indexMitadListaImpar);
            console.log(medianaListaImpar);
            return medianaListaImpar;}
}


Analisis.calcularPromedio = function (lista){
    Analisis.sumarTodosElementos = function (valorAcumulado,nuevoValor)
    {return valorAcumulado+nuevoValor;}
    const sumaLista=lista.reduce(Analisis.sumarTodosElementos);
    const promedio=sumaLista/lista.length;return promedio;
}

Analisis.sumarTodosElementos = function(valorAcumulado, nuevoValor) {
    return valorAcumulado + nuevoValor;
  }

