//seleções gerais
const mainTelaAbertura = document.getElementById("main_tela_de_abertura");

/*declaração dos elementos
 de maneira global*/

//declaração dos elementos da janela principal
const caixa_esquerdo_tela_abertura = document.createElement("div");
const logo_tela_abertura = document.createElement("img");
const info_esquerdo_tela_abertura = document.createElement("span");
const caixa_direita_tela_abertura = document.createElement("div");
const titulo_direita_tela_abertura = document.createElement("h2");
const info_direita_tela_abertura = document.createElement("span");

//janela da Tela de abertura
function tela_de_abertura() {
    //aria do lado esquerdo da janela tela de abertura
    caixa_esquerdo_tela_abertura.setAttribute("id","caixa_esquerdo_tela_abertura");
    mainTelaAbertura.appendChild(caixa_esquerdo_tela_abertura);
    logo_tela_abertura.setAttribute("id","logo_tela_abertura");
    logo_tela_abertura.src="../img/logo/logoapp.png";
    caixa_esquerdo_tela_abertura.appendChild(logo_tela_abertura);
    info_esquerdo_tela_abertura.setAttribute("id","info_esquerdo_tela_abertura");
    info_esquerdo_tela_abertura.innerHTML="Carregando...";
    /* caixa_esquerdo_tela_abertura.appendChild(info_esquerdo_tela_abertura); */
  
    //aria do lado esquerdo da janela tela de abertura
    caixa_direita_tela_abertura.setAttribute("id","caixa_direita_tela_abertura");
    mainTelaAbertura.appendChild(caixa_direita_tela_abertura);
    titulo_direita_tela_abertura.setAttribute("id","titulo_direita_tela_abertura");
    titulo_direita_tela_abertura.innerHTML="Bem vindo";
    caixa_direita_tela_abertura.appendChild(titulo_direita_tela_abertura);
    info_direita_tela_abertura.setAttribute("id","info_direita_tela_abertura");
    info_direita_tela_abertura.innerHTML=`
      O gerenciador de tarefas desenvolvido com javascript,\n
      aproveite o programa e se inspire para desenvolver o seu.
    `;
    caixa_direita_tela_abertura.appendChild(info_direita_tela_abertura);
}

tela_de_abertura();