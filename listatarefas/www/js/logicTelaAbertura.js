//seleções gerais
const mainTelaAbertura = document.getElementById("main_tela_de_abertura");

//arias das variaveis globais
var dados_das_configuracoes={
  nome_user: "",
  cor_sistema: "#c935f2",
  cor_modo_do_sistema: "escuro",
  percentagem_da_fonte: 13,
  logo: "../img/logo/logoapp.png",
  logo2: "../img/logo/logoapp2.png",
  execucao_do_app: false,
  titulo_iguais:0
};
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

function cor_da_tela_de_abertura(cor) {
  switch (cor) {
    case "#c935f2":
      document.documentElement.style.setProperty("--cor-main", "#c935f2");
      logo_tela_abertura.src=(dados_das_configuracoes.cor_modo_do_sistema==="escuro")? "../img/logo/logoapp4.png":"../img/logo/logoapp2.png";
      break;
    case "#5d35f2":
      document.documentElement.style.setProperty("--cor-main", "#5d35f2");
      logo_tela_abertura.src=(dados_das_configuracoes.cor_modo_do_sistema=="escuro")? "../img/logo/logoapp4-1.png":"../img/logo/logoapp2-1.png";
      break;
    default:
      console.log("operação invalida")
      break;
  }
}
function tema_da_tela_de_abertura(tema) {
  switch (tema) {
    case "escuro":
      document.documentElement.style.setProperty("--modo-primeira-cor", "#353535");
      document.documentElement.style.setProperty("--cor-do-texto", "#ffff");
      break;
    case "claro":
      document.documentElement.style.setProperty("--modo-primeira-cor", "#ffff");
      document.documentElement.style.setProperty("--cor-do-texto", "#353535");
      break;
    default:
      console.log("operação invalida")
      break;
  }
}

async function obter_dados_do_db() {
  return await api.buscarDadosAoDB();
}

window.onload = async ()=>{
  let dados = await obter_dados_do_db()
  console.log(dados);
  if (dados.definicoes=={}) {
    console.log("definições vazia");
  }else{
    dados_das_configuracoes={
      id:dados.definicoes.id,
      nome_user: dados.definicoes.nome_user,
      cor_sistema: dados.definicoes.cor_sistema,
      cor_modo_do_sistema: dados.definicoes.cor_modo_do_sistema,
      percentagem_da_fonte: dados.definicoes.percentagem_da_fonte,
      logo: dados.definicoes.logo,
      logo2: dados.definicoes.logo2,
      execucao_do_app: dados.definicoes.execucao_do_app == 1 ? true : false,
      titulo_iguais:dados.definicoes.titulo_iguais
    };
  }
  tela_de_abertura();
  tema_da_tela_de_abertura(dados_das_configuracoes.cor_modo_do_sistema);
  cor_da_tela_de_abertura(dados_das_configuracoes.cor_sistema);
};
