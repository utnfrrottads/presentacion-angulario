

function cuad(x) {
    return x * x;
}

function cubo(x) {
    return x * x * x;
}

var array = [1,2,4,5];

console.log('map', array.map(cuad));

function mostrar(elemento){
    console.log('Elemento: ' , elemento);
}

array.forEach(mostrar)

array.map(cuad).map(cubo).forEach(mostrar);

function mapear(unArray, unaFuncion) {
    var answer = [];
    for (i=0; i < unArray.length; i++) {
      answer.push(unaFuncion(unArray[i], i));
    }
    return answer;
  }

  console.log('Mapear', mapear(array, cubo));

 var cuadratica =  array.map( function (elemento){
      return cuad(elemento) + elemento + 1;
  } );

  console.log(cuadratica);

  var resultado = array.map(cuad).map(cubo).filter(function (elemento) {
      return elemento > 1000
  }).forEach(mostrar);



  var filtrada = array.filter(function (elemento) {
      return elemento > 3
  });

  console.log('Filtrado', filtrada);