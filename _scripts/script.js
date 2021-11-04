var quantidade = $('div#testemunhos ul').length;/*pra saber quantos ul tem no testemunhos*/
var limite = (quantidade * 252) * -1/*-1 porque vai para esquerda e o 252 porque o tamanhi do ul é 220 + 15 de cada lado = 252, dai deixa 5 d eprecaução*/
var largura = limite + 252;
var view_largura = $('section#testemunha div#testemunha-centro').width();/*para saber a largura dessa div*/
$('div#testemunhos').css('width',limite*-1);/*para delemitar a largura do elemento dos testemunhos*/





$('div#testemunha-direita').click(function(){
  posicao_atual = $('div#testemunhos').position().left;/*para saber a posição que ele esta naquele momento*/
  nova_posicao = posicao_atual - view_largura;
  
  if(limite < posicao_atual - view_largura){
    $('div#testemunhos').animate({left:nova_posicao}, 1000);/*faz com que clique na seta e se mova e o 1000 porque é milisegundos*/
    
  }
  
  if(limite > (nova_posicao - view_largura)){
    $('div#testemunha-direita ion-icon').css('opacity', 0.5);/*para mudar a opacidade da seta quando clicar nela*/
    $('div#testemunha-direita ion-icon').css('cursor','not-allowed');/*para quando chegar na ultima seta da direita, ele ficar opaco*/
  }


$('div#testemunha-esquerda ion-icon').css('opacity', 1);/*para mudar a opacidade da seta quando clicar nela*/
$('div#testemunha-esquerda ion-icon').css('cursor','pointer');

})

$('div#testemunha-esquerda').click(function(){
  posicao_atual = $('div#testemunhos').position().left;/*para saber a posição que ele esta naquele momento*/

  if(posicao_atual + view_largura <=0){/*o zero é o ponto inicial*/
    nova_posicao = posicao_atual + view_largura;
    $('div#testemunhos').animate({left:nova_posicao}, 1000);

  }

  if(nova_posicao == 0){
    $('div#testemunha-esquerda ion-icon').css('opacity', 0.5);/*para mudar a opacidade da seta quando clicar nela*/
    $('div#testemunha-esquerda ion-icon').css('cursor','not-allowed ');
  }

  $('div#testemunha-direita ion-icon').css('opacity', 1);/*para mudar a opacidade da seta quando clicar nela*/
    $('div#testemunha-direita ion-icon').css('cursor','pointer');


})

//codigos de clique para assinar

$('div.planos-bottom').click(function(){
  alert('clicou')
})

// codigos para links das redes sociais

$("ion-icon#facebook").click(function(){
  window.open("http://www.facebook.com","_blank");/*blank usa para abrir a página em outro aba de navegador*/
})

$("ion-icon#instagram").click(function(){
  window.open("http://www.instagram.com","_blank");/*blank usa para abrir a página em outro aba de navegador*/
})

$("ion-icon#twitter").click(function(){
  window.open("http://www.twitter.com","_blank");/*blank usa para abrir a página em outro aba de navegador*/
})

$("ion-icon#youtube").click(function(){
  window.open("http://www.youtube.com","_blank");/*blank usa para abrir a página em outro aba de navegador*/
})

$("ion-icon#linkedin").click(function(){
  window.open("http://www.linkedin.com","_blank");/*blank usa para abrir a página em outro aba de navegador*/
})


/*Códigos ded animação*/

$('section#domingo-perfeito').waypoint( function(direcao) { /*serve para começar a animação do site a partir da section seção perfeita*/
  if ( direcao == "down"){
    $('div.folha1').addClass('animate__animated animate__fadeInUp');/*essa animação fadeInup é do site animateStyle*/
    $('div.folha3').addClass('animate__animated animate__fadeInUp');
    $('div.camarao').addClass('animate__animated animate__fadeInUp animate__slow');
    $('div.tomate').addClass('animate__animated animate__fadeInUp animate__slow');
    $('div.queijo').addClass('animate__animated animate__fadeInUp animate__slower');
    $('div.folha2').addClass('animate__animated animate__fadeInUp animate__slower');
  }

  if(direcao =="up"){
    console.log ("subindo");
  }
}, {
  offset: '150px;'/*para começar a animação 150 px antes da seção domingo perfeito*/
})

$('section#pizza').waypoint( function(direcao){
  if(direcao =='down'){
    $('section#pizza p').addClass('animate__animated animate__fadeInUp');
    $('section#pizza div.pizza-opcoes').addClass('animate__animated animate__fadeInUp animate__slow');
  }
  if(direcao == 'up'){

  }

},{
  offset: '450px;'
})

//ações de navegação

$('nav ul li:eq(0)').click(function(){
  $('html,body').animate({scrollTop:$('section#domingo-perfeito').offset().top},1000);
})