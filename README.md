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


[Voltar ao Índice](#indice)

---

## <a name="parte9"> 09 - Eventos parte 1</a>


[Voltar ao Índice](#indice)

---

## <a name="parte10">10 - Eventos parte 2 </a>


[Voltar ao Índice](#indice)

---

## <a name="parte11"> 11 - Arrays </a>


[Voltar ao Índice](#indice)

---

## <a name="parte12">12 - Loopings </a>


[Voltar ao Índice](#indice)

---

## <a name="parte13">13 - Condicionais </a>


[Voltar ao Índice](#indice)

---

## <a name="parte14">14 - Considerações finais </a>


[Voltar ao Índice](#indice)

---