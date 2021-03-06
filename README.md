# JAVASCRIPT PARA INICIANTES

https://www.asolucoesweb.com.br/detalhes/javascript-para-iniciantes

---

## <a name="indice">Índice</a>

- [ 01 - Ferramentas e servidor](#parte1)   
- [ 02 - Variáveis e escopo](#parte2)   
- [ 03 - Bom e Dom](#parte3)   
- [ 04 - Seletores Html](#parte4)   
- [ 05 - Funções](#parte5)   
- [ 06 - Closures](#parte6)   
- [ 07 - Callbacks](#parte7)   
- [ 08 - Funções assíncronas](#parte8)   
- [ 09 - Eventos parte 1](#parte9)   
- [ 10 - Eventos parte 2](#parte10)   
- [ 11 - Arrays](#parte11)   
- [ 12 - Loopings](#parte12)   
- [ 13 - Condicionais](#parte13)   
- [ 14 - Considerações finais](#parte14)   



---

## <a name="parte1">01 - Ferramentas e servidor</a>

- node: https://nodejs.org/en/
- https://www.npmjs.com/

-> npm init

```json
{
  "name": "aula01",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "lite-server"
  },
  "author": "josemalcher",
  "license": "ISC",
  "devDependencies": {
    "lite-server": "^2.3.0"
  }
}

```

-> npm run dev

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Aula 01</title>
</head>
<body>
<script>
    var nome = "josemalcher";
    console.log(nome);
</script>
</body>
</html>
```

[Voltar ao Índice](#indice)

---

## <a name="parte2">02 - Variáveis e escopo</a>

```js
    var idade = 34; //global
    function idadePEssoa() {
        var idade = 24; //local
        console.log(idade);
    }

    idadePEssoa();

    nomePessoa = "jose"; // "super-global" -  Sempre com "var"
    function nome() {
        console.log(nomePessoa);
    }
    nome();

```


[Voltar ao Índice](#indice)

---

## <a name="parte3">03 - Bom e Dom </a>

BOM - 

DOM - https://developer.mozilla.org/pt-BR/docs/DOM/Referencia_do_DOM

[Voltar ao Índice](#indice)

---

## <a name="parte4">04 - Seletores Html</a>

- var div = document.getElementById("divid");
- var div = document.getElementsByClassName("div");
- var btn = document.querySelector("#alink");

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Aula 01</title>
</head>
<body>
<div id="divid">Dentro da DIV id</div>
<a href="" id="alink">Link1</a>

<script>
    //var btn = document.querySelector("#alink");
    var btn = document.getElementById("alink");
    btn.onclick = function () {
        console.log("LINK OK");
        return false; // para não atualizar a página
    }
</script>
</body>
</html>
```

[Voltar ao Índice](#indice)

---

## <a name="parte5"> 05 - Funções</a>

```js
    var pessoa = function () {
        console.log("Função Anônima!");

    };
    pessoa();

    //função auto-executa
    (function () {
        console.log("Auto Executou")
    })();

```

[Voltar ao Índice](#indice)

---

## <a name="parte6">06 - Closures</a>

- https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Closures

```js
  function pessoa(idade) {
      var idade = idade;

      return function () {
          console.log(idade);
      }
  }
  var pessoa = pessoa(33);
  pessoa();
```

```js
function add() {
    var numero = 1;
    return function () {
        console.log(numero + 1);
    }
}
var soma = add();
soma();
soma();
soma();
```


[Voltar ao Índice](#indice)

---

## <a name="parte7">07 - Callbacks</a>

```js
    /*setTimeout(function () {
        console.log("Depois de 3 segundos");
    }, 3000);*/
    function teste() {
        console.log("Depois de 3 segundos");
    }
    setTimeout(teste, 3000);
```

```js
    function pessoa(callbackteste) {
        console.log(callbackteste());
}

    pessoa(function () {
        console.log("PESSOA CALLBACK");
    });
```

```js

    /*setInterval(function () {
        console.log("teste");
    }, 3000);*/

    function soma() {
        var i = 0;
        return function () {
            i += 1;
            console.log("Somando: " + i);
        }
    }

    var soma = soma();
    setInterval(soma, 2000);

```



[Voltar ao Índice](#indice)

---

## <a name="parte8">08 - Funções assíncronas </a>

```js
    //Exenplo simples!
    setTimeout(function () {
        console.log("Etapa 1");
    }, 2000);

    console.log("Etapa 2");
```

[Voltar ao Índice](#indice)

---

## <a name="parte9"> 09 - Eventos parte 1</a>

- https://developer.mozilla.org/en-US/docs/Web/Events

```js
var btn = document.querySelector("#btn-teste");

/*btn.onclick = function() {
    teste();
};*/
btn.addEventListener('click', function () {
    teste();
});

function teste() {
    console.log("Teste");
};
```

```js
var campo = document.querySelector("#campo");

campo.addEventListener("focusout", function () {
    console.log("this.value");
});

function teste() {
    console.log("Teste");
}
```

- aula01/js/main.js

```js
function event(target,event,callback) {
    target.addEventListener(event, callback);
}
```

```js
var input = document.querySelector("#campo1");

event(input,'focusout', function () {
    console.log("teste");
});
```

```html
<video src="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4" id="video"></video>
<button id="btn-play" type="submit">Play Video</button>
<button id="btn-pause" type="submit">PAUSE</button>

```

```js
window.onload = function () {

    var btn_play = document.getElementById("btn-play");
    var btn_pause = document.getElementById("btn-pause");
    var video = document.getElementById("video");

    btn_play.addEventListener('click', function () {
        video.play();
    });

    btn_pause.addEventListener('click', function () {
        video.pause();
    });

}
```

[Voltar ao Índice](#indice)

---

## <a name="parte10">10 - Eventos parte 2 </a>


[Voltar ao Índice](#indice)

---

## <a name="parte11"> 11 - Arrays </a>

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array

```js
window.onload = function () {
    var nome = ['jose', 'maria','vanilda'];
    //console.dir(nome);
    //console.log(nome.splice(0,2));

    nome.push('joão');
    nome.push('carla'); //adiciona
    nome.pop(); //remove
    
   var nomes2 = new Array('jose','maria','...');
}
```

[Voltar ao Índice](#indice)

---

## <a name="parte12">12 - Loopings </a>

```js
window.onload = function () {

    var nomes = ['jose', 'karla', 'maria'];

    nomes.forEach(function (nome) {
        console.log(nome);
    })

}

```

```js
window.onload = function () {

    var nomes = ['jose', 'karla', 'maria'];

    for (var i = 0; i < nomes.length ; i++) {
        console.log(nomes[i]);
    }

    var i = 0;
    while (i < nomes.length) {
        console.log(nomes[i]);
        i++;
    }

}
```


[Voltar ao Índice](#indice)

---

## <a name="parte13">13 - Condicionais </a>

```js
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
```


[Voltar ao Índice](#indice)

---

## <a name="parte14">14 - Considerações finais </a>


[Voltar ao Índice](#indice)

---