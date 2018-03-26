window.onload = function () {

    var idade = 40;

    if(idade < 20) {
        console.log("idade menor que 20");
    }else{
        console.log("idade maior que 20");
    }

    var resultado = (idade <= 30) ? "menor que 30": "Maior que 30" ;
    console.log(resultado);

}