## Links Úteis 

[Bootstrap - O que é, como e quando usar?](https://www.alura.com.br/artigos/bootstrap?gclid=Cj0KCQjwgMqSBhDCARIsAIIVN1XGDaCl-uOGXpvsPMKDWBWSUtJk3gOIqc4d0RvzMCjP-Kiu3AUXdu4aArDWEALw_wcB)

[Ponto de partida - Introdução ao Bootstrap, como baixar e usar, exemplos de templates, e etc.](https://getbootstrap.com.br/docs/3.3/getting-started/)

[Introdução ao Bootstrap](https://www.devmedia.com.br/guia/bootstrap/38150#:~:text=Introdu%C3%A7%C3%A3o,aos%20diferentes%20tamanhos%20de%20tela.)

[Site responsivo](https://www.sebrae.com.br/sites/PortalSebrae/artigos/o-que-e-um-site-responsivo,4a6ad1eb00ad2410VgnVCM100000b272010aRCRD)

[Download Bootstrap](https://getbootstrap.com/)

[Documentação Bootstrap](https://getbootstrap.com/docs/4.1/getting-started/introduction/)

[Como configurar e utilizar o Bootstrap?](https://rockcontent.com/br/blog/bootstrap/)

[...]Para começar a usar o Bootstrap em uma página, é preciso adicionar a referência dos principais arquivos do framework na página principal da aplicação. Confira, a seguir, o código de uma página HTML com todas as referências necessárias para que o framework funcione.

`<!doctype html>
<html lang="en">
 <head>
   <!-- Required meta tags -->
   <meta charset="utf-8">
   <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
   <!-- Bootstrap CSS -->
   <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
   <title>Hello, world!</title>
 </head>
 <body>
   <h1>Hello, world!</h1>
   <!-- Optional JavaScript -->
   <!-- jQuery first, then Popper.js, then Bootstrap JS -->
   <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
   <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
   <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
 </body>
</html>
<Fonte: site Getbootstrap.com>`

**É importante seguir a ordem das referências conforme o exemplo. Portanto, a primeira referência deve ser ao arquivo bootstrap.css localizado na tag <head>. Já as referências aos arquivos JavaScript devem ser inseridas no final da página, antes de encerrar a tag </body>. A ordem para os scripts devem ser: JQuery, Popper.js e Bootstrap.js.**

Vale ressaltar que a forma de configurar o Bootstrap varia de acordo com o tipo de ambiente em que ele está. No WordPress, por exemplo, também é possível adicionar o framework por meio da alteração do arquivo functions.php do template. 
