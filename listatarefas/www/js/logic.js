//seleções gerais
const main = document.getElementById("main");

document.addEventListener("keydown", (e) => {
  if (e.key === "Tab") {
    e.preventDefault();
  }
});

//aria das variaveis globais
var ativar = false;
var contador_listas = 0;
var contador_tarefas = 0;
var menu_activo = "paginaincial";
var confirmacao_de_lista_salva = false;
var tarefas = [];
var copia_das_tarefas = [];
var listas = [];
var estatos_modal_salvar_lista = false;
var pagina_que_a_lista_vai_remover = "";
var dados_salvo_no_arrey = false;
var detalhes_da_descricao = [];
var lista_aberta = 0;
var numero_de_salvamento = 0;
var evento_de_entrada_na_lista = true;
var titulo_iguais = 0;
var modo_da_lista = "";
var acesso_a_descricao = true;
var contador_de_listas_selecionadas = 0;
var configuracoes_salvas = true;
var pagina_que_configuracoes_vai_remover = "";
var dados_das_configuracoes = {
  nome_user: "",
  cor_sistema: "#c935f2",
  cor_modo_do_sistema: "escuro",
  percentagem_da_fonte: 13,
  logo: "img/logo/logoapp.png",
  logo2: "img/logo/logoapp2.png",
};
var copia_dos_dados_das_configuracoes = {};

/*declaração dos elementos
 de maneira global*/

//declaração dos elementos da janela principal
const WindowMain = document.createElement("div");
const secao_esquerda = document.createElement("div");
const logo = document.createElement("img");
const boxmenu = document.createElement("div");
const item_menu_home = document.createElement("button");
const logo_home = document.createElement("img");
const item_menu_settings = document.createElement("button");
const item_menu_help = document.createElement("button");
const logo_settings = document.createElement("img");
const logo_help = document.createElement("img");
const boxfilter = document.createElement("div");
const filter = document.createElement("div");
const filter_list = document.createElement("span");
const filter_list_opcoes = document.createElement("div");
const opcao_filter_list1 = document.createElement("span");
const opcao_filter_list2 = document.createElement("span");
const opcao_filter_list3 = document.createElement("span");
const icon_list_filter = document.createElement("img");
const display_filter = document.createElement("div");
const display_filter_item1 = document.createElement("button");
const display_filter_item2 = document.createElement("button");

//declaração dos elementos da modal inicial
const modalBox = document.createElement("div");
const box1 = document.createElement("div");

//declaração dos elementos da modal tipo de lista
const modaltypelist = document.createElement("div");
const boxtypelist = document.createElement("div");
const btn_cancelar_modal = document.createElement("button");
const imgmodallist = document.createElement("div");
const modallistinfo = document.createElement("div");
const boxmodallist = document.createElement("div");
const btnsmodallist_normal = document.createElement("button");
const btnsmodallist_tabela = document.createElement("button");

//declaração dos elementos da pagina inicial
const secao_direita_pagina_inicial = document.createElement("div");
const boxtitle = document.createElement("div");
const titulo_direita = document.createElement("h1");
const info_title = document.createElement("p");
const boxtoolbar = document.createElement("div");
const btn_new_list = document.createElement("button");
const btn_delete_list = document.createElement("button");
const btn_deletar_slc = document.createElement("button");
const info_count_list = document.createElement("p");
const btn_select = document.createElement("button");
const boxsearch = document.createElement("div");
const input_search = document.createElement("input");
const icon_search = document.createElement("img");
const display_list = document.createElement("div");
const list1 = document.createElement("div");
const title_list1 = document.createElement("h4");

//declaração dos elementos da configurações
const secao_direita_config = document.createElement("div");
const title_config = document.createElement("h1");
const BoxConfig = document.createElement("div");
const boxaparencia = document.createElement("div");
const tituloaparencia = document.createElement("h3");
const boxaparenciarCor = document.createElement("div");
const boxbtnCor1 = document.createElement("div");
const btn_cor1 = document.createElement("button");
const btn_cor2 = document.createElement("button");
const boxbtnCor2 = document.createElement("div");
const btn_cor3 = document.createElement("button");
const btn_cor4 = document.createElement("button");
const btn_cor5 = document.createElement("button");
const boxfont = document.createElement("div");
const inputfont = document.createElement("input");
const informacao_da_parcentagem_da_fonte = document.createElement("span");
const gerenciador = document.createElement("div");
const nome_do_gerencidor = document.createElement("input");
const boxstorage = document.createElement("div");
const titleStorage = document.createElement("h3");
const btn_delAll_storage = document.createElement("button");
const btnsConfig = document.createElement("div");
const btnSalveconfig = document.createElement("button");
const btnCancelconfig = document.createElement("button");

//declaração dos elementos da sobre app
const secao_direita_help = document.createElement("div");
const title_help = document.createElement("h1");
const Boxhelp = document.createElement("div");

//declaração dos elementos da lista normal
const secao_direita_list_normal = document.createElement("div");
const boxlistinputnormal = document.createElement("div");
const inputlistnormal = document.createElement("input");
const btn_delet_tasks = document.createElement("button");
const count_tasks_normal_list = document.createElement("p");
const box_btns_list_normal = document.createElement("div");
const btn_add_list_normal = document.createElement("button");
const btn_cancel_list_normal = document.createElement("button");
const btn_save_list_normal = document.createElement("button");
const estatos_lista = document.createElement("span");
const box_display_list_normal = document.createElement("div");
const boxtitle_list_normal = document.createElement("div");
const title_task_normal = document.createElement("h1");
const caixa_das_opcoes_e_das_categorias = document.createElement("div");
const box_opcoes__das_categorias_da_list_normal = document.createElement("div");
const boxcategorias_list_normal = document.createElement("div");
const seletor_categorias_normal = document.createElement("span");
const caterianormal1 = document.createElement("span");
const caterianormal2 = document.createElement("span");
const caterianormal3 = document.createElement("span");
const iconCategoriaNormal = document.createElement("img");
const linha_lista_normal = document.createElement("hr");
const boxTasklistnormal = document.createElement("div");
var editar = document.createElement("input");
const boxTask = document.createElement("div");
const boxTask1 = document.createElement("div");
const boxTask2 = document.createElement("div");
const iconchecktask = document.createElement("img");
var inputNormal = document.querySelector("#caixa_concluir");
const iconchecktask2 = document.createElement("img");
const iconedittask = document.createElement("img");
const icondeletetask = document.createElement("img");
const descricaoTask = document.createElement("div");
const txtDescricao = document.createElement("p");

//declaração dos elementos da lista normal
const modalsalvalista = document.createElement("div");
const info_salvar_lista = document.createElement("div");
const texto_salvar_lista = document.createElement("span");
const caixa_botoes_salvar_lista = document.createElement("div");
const botao_sim_salvar_lista = document.createElement("button");
const botao_nao_salvar_lista = document.createElement("button");

//declaração dos elementos da modal mensagens
var caixa_modal_mensagens = document.createElement("div");
var modal_mensagens = document.createElement("div");
var mensagens = document.createElement("span");

//declaração dos elementos da modal salvar configurações
var caixa_modal_salvar_configuracoes = document.createElement("div");
var modal_salvar_configuracoes = document.createElement("div");
var info_modal_salvar_configuracoes = document.createElement("span");
var caixa_btns_modal_salvar_configuracoes = document.createElement("div");
var btn1_modal_salvar_configuracoes = document.createElement("button");
var btn2_modal_salvar_configuracoes = document.createElement("button");

//janela principal
function janela_principal() {
  //caixa principal do programa
  WindowMain.setAttribute("id", "windowsmain");
  main.appendChild(WindowMain);

  //aria de navegação esquerda
  secao_esquerda.setAttribute("id", "secao_esquerda");
  WindowMain.appendChild(secao_esquerda);

  //logo aria esquerda
  logo.setAttribute("class", "logoPq");
  logo.src = dados_das_configuracoes.logo;
  logo.addEventListener("click", abrir_pagina_inicial);
  secao_esquerda.appendChild(logo);

  //caixa do menu
  boxmenu.setAttribute("id", "boxmenu");
  secao_esquerda.appendChild(boxmenu);
  //botao home
  boxmenu.appendChild(item_menu_home);
  item_menu_home.setAttribute("class", "boxmenuitems");
  item_menu_home.setAttribute("id", "paginaincial");
  item_menu_home.addEventListener("click", abrir_pagina_inicial);
  logo_home.setAttribute("src", "img/icons/home.png");
  item_menu_home.innerHTML = "Pagina inicial";
  item_menu_home.appendChild(logo_home);
  //botao settings
  boxmenu.appendChild(item_menu_settings);
  item_menu_settings.addEventListener("click", abrir_configuracoes);
  item_menu_settings.setAttribute("class", "boxmenuitems");
  item_menu_settings.setAttribute("id", "configuracao");
  //logo configurações
  logo_settings.setAttribute("src", "img/icons/settings.png");
  item_menu_settings.innerHTML = "Configurações";
  item_menu_settings.appendChild(logo_settings);

  //botao help
  boxmenu.appendChild(item_menu_help);
  item_menu_help.setAttribute("class", "boxmenuitems");
  item_menu_help.setAttribute("id", "ajuda");
  item_menu_help.addEventListener("click", abrir_sobre_app);
  //logo ajuda
  logo_help.setAttribute("src", "img/icons/help.png");
  item_menu_help.innerHTML = "Sobre app";
  item_menu_help.appendChild(logo_help);

  //caixa do filtro
  boxfilter.setAttribute("id", "boxfilter");
  secao_esquerda.appendChild(boxfilter);

  //barra do filtro
  filter.setAttribute("id", "filter");
  filter.setAttribute("title", "caixa de filtros");
  filter.addEventListener("click", (e) => {
    ativar_ou_desativar_opcoes1("flex");
    e.stopPropagation();
    sair_do_filtro_de_opcoes();
  });
  boxfilter.appendChild(filter);
  //filtro
  filter_list.setAttribute("id", "filterlist");
  filter_list.innerHTML = "Todas";
  filter.appendChild(filter_list);
  //icone lista de filtros
  icon_list_filter.setAttribute("src", "img/icons/filterlist.png");
  filter.appendChild(icon_list_filter);

  //modal de opções do filtro
  filter_list_opcoes.setAttribute("id", "filter_list_opcoes");
  filter_list_opcoes.style.display = "none";
  boxfilter.appendChild(filter_list_opcoes);
  //poções
  opcao_filter_list1.setAttribute("class", "opcao_filter_list");
  opcao_filter_list1.addEventListener("click", () => {
    obter_opcao_selecionada("Todas");
  });
  opcao_filter_list1.innerHTML = "Todas";
  filter_list_opcoes.appendChild(opcao_filter_list1);
  opcao_filter_list2.setAttribute("class", "opcao_filter_list");
  opcao_filter_list2.addEventListener("click", () => {
    obter_opcao_selecionada("Listas");
  });
  opcao_filter_list2.innerHTML = "Listas de tarefas";
  filter_list_opcoes.appendChild(opcao_filter_list2);
  opcao_filter_list3.setAttribute("class", "opcao_filter_list");
  opcao_filter_list3.addEventListener("click", () => {
    obter_opcao_selecionada("Projetos");
  });
  opcao_filter_list3.innerHTML = "Projetos";
  filter_list_opcoes.appendChild(opcao_filter_list3);

  //aria de apresentação do resultado do filtro
  display_filter.setAttribute("id", "displayfilter");
  boxfilter.appendChild(display_filter);
  obter_opcao_selecionada("Todas");
}
//janela modal inicial
function modal_inicio() {
  //caixa principal da modal inicial
  modalBox.setAttribute("id", "modalbox");
  main.appendChild(modalBox);

  //caixa de conteúdo
  box1.setAttribute("class", "box1");
  modalBox.appendChild(box1);
  box1.innerHTML = `
   <div class="boximg">
     <img id="logomodaliniciar" src="${dados_das_configuracoes.logo2}" alt="logo">
   </div> 
   <div class="boxinfo">
     <p>Seja Bem Vindo,<br>o <b>Manager Tasks</b> é um<br>gerenciador de tarefas simples e<br>fácil de usar, projetado para te ajudar na tua<br>produtividade, tenha um bom proveito e<br> muito obrigado por usar o nosso app.</p>
   </div>
   <input type="text" id="inputNome"  placeholder="Primeiro nome" autofocus>   
   <div class="boxinfo">
     <p>Caso queiras saber mais sobre o app<br>visite a secção "Sobre app".</p>
   </div>
   <button id="btn_avancar">Avançar</button>`;

  //evento do input da janela modal
  document.getElementById("inputNome").addEventListener("keydown", (e) => {
    verificacao_input_modal_inicial_com_tecla(e.key);
    alteracoes_salvas();
  });

  //evento do botão da modal
  document
    .getElementById("btn_avancar")
    .addEventListener("click", verificacao_modal_inicial_com_botao);
}
//janela modal tipo de lista
function modal_tipo_lista() {
  //caixa principal da modal tipo de lista
  modaltypelist.setAttribute("id", "modaltypelist");
  modaltypelist.style.display = "none";
  main.appendChild(modaltypelist);

  //caixa typo de lista
  boxtypelist.setAttribute("id", "boxtypelist");
  modaltypelist.appendChild(boxtypelist);
  //btn_cancelar_modal
  btn_cancelar_modal.setAttribute("id", "btnCancel");
  btn_cancelar_modal.innerText = "X";
  btn_cancelar_modal.addEventListener("click", () => {
    modaltypelist.style.display = "none";
  });
  boxtypelist.appendChild(btn_cancelar_modal);
  //imgmodallist
  imgmodallist.setAttribute("id", "imgmodallist");
  imgmodallist.innerHTML = `<img src="img/logo/logoapp.png" alt="logo">`;
  boxtypelist.appendChild(imgmodallist);

  //informações da modal tipo de lista
  modallistinfo.setAttribute("id", "modallistinfo");
  modallistinfo.innerHTML = `
       <h1>Tipo de lista</h1>
       <p>Escolha o tipo de lista<br>que deseja criar</p>
     `;
  boxtypelist.appendChild(modallistinfo);

  //caixa dos botões da modal tipo de lista
  boxmodallist.setAttribute("id", "boxmodallist");
  boxtypelist.appendChild(boxmodallist);
  //btnsmodallist_normal
  btnsmodallist_normal.setAttribute("class", "btnsmodallist");
  btnsmodallist_normal.addEventListener("click", () => {
    modaltypelist.style.display = "none";
    /* abrir_lista_normal(); */
    //só vou ativar esta opção quanto a lista tipo tabela estiver pronta.
  });
  btnsmodallist_normal.innerText = "Normal";
  boxmodallist.appendChild(btnsmodallist_normal);
  //btnsmodallist_tabela
  btnsmodallist_tabela.setAttribute("class", "btnsmodallist");
  btnsmodallist_tabela.innerText = "Tabela";
  boxmodallist.appendChild(btnsmodallist_tabela);
}
//janela modal de confirmação para salvar
function modal_salvar_lista() {
  //elemento principal
  modalsalvalista.setAttribute("id", "modalsalvalista");
  modalsalvalista.style.display = "none";
  main.appendChild(modalsalvalista);

  info_salvar_lista.setAttribute("id", "info_salvar_lista");
  modalsalvalista.appendChild(info_salvar_lista);

  texto_salvar_lista.setAttribute("id", "texto_salvar_lista");
  texto_salvar_lista.innerHTML =
    "Deseja salvar as alterações<br>antes de sair da lista.";
  info_salvar_lista.appendChild(texto_salvar_lista);

  caixa_botoes_salvar_lista.setAttribute("id", "caixa_botoes_salvar_lista");
  info_salvar_lista.appendChild(caixa_botoes_salvar_lista);
  botao_sim_salvar_lista.setAttribute("id", "botao_sim_salvar_lista");
  botao_sim_salvar_lista.addEventListener("click", () => {
    estatos_modal_salvar_lista = true;
    verificar_se_a_lista_existe()
    verificar_modal_salvar_lista();
  });
  botao_sim_salvar_lista.innerHTML = "Sim";
  caixa_botoes_salvar_lista.appendChild(botao_sim_salvar_lista);
  botao_nao_salvar_lista.setAttribute("id", "botao_nao_salvar_lista");
  botao_nao_salvar_lista.addEventListener("click", () => {
    estatos_modal_salvar_lista = false;
    verificar_modal_salvar_lista();
  });
  botao_nao_salvar_lista.innerHTML = "Não";
  caixa_botoes_salvar_lista.appendChild(botao_nao_salvar_lista);
}
//janela modal de mensagem de aviso
function modalMensagem() {
  caixa_modal_mensagens.setAttribute("id", "caixa_modal_mensagens");
  caixa_modal_mensagens.style.display = "none";
  main.appendChild(caixa_modal_mensagens);

  modal_mensagens.setAttribute("class", "modal_mensagens");
  caixa_modal_mensagens.appendChild(modal_mensagens);

  mensagens.setAttribute("class", "mensagens");
  mensagens.innerHTML = "Mensagem";
  modal_mensagens.appendChild(mensagens);
}
//janela modal de mensagem de aviso
function modalSalvarConfiguracoes() {
  caixa_modal_salvar_configuracoes.setAttribute(
    "id",
    "caixa_modal_salvar_configuracoes"
  );
  caixa_modal_salvar_configuracoes.style.display = "none";
  main.appendChild(caixa_modal_salvar_configuracoes);

  modal_salvar_configuracoes.setAttribute(
    "class",
    "modal_salvar_configuracoes"
  );
  caixa_modal_salvar_configuracoes.appendChild(modal_salvar_configuracoes);

  info_modal_salvar_configuracoes.setAttribute(
    "class",
    "info_modal_salvar_configuracoes"
  );
  info_modal_salvar_configuracoes.innerHTML =
    "Deseja salvar as alterações feita nas configurações.";
  modal_salvar_configuracoes.appendChild(info_modal_salvar_configuracoes);

  caixa_btns_modal_salvar_configuracoes.setAttribute(
    "class",
    "caixa_btns_modal_salvar_configuracoes"
  );
  modal_salvar_configuracoes.appendChild(caixa_btns_modal_salvar_configuracoes);

  btn1_modal_salvar_configuracoes.setAttribute(
    "class",
    "btn1_modal_salvar_configuracoes"
  );
  btn1_modal_salvar_configuracoes.innerHTML = "sim";
  btn1_modal_salvar_configuracoes.addEventListener(
    "click",
    modal_configuracoes_btn_sim
  );
  caixa_btns_modal_salvar_configuracoes.appendChild(
    btn1_modal_salvar_configuracoes
  );

  btn2_modal_salvar_configuracoes.setAttribute(
    "class",
    "btn2_modal_salvar_configuracoes"
  );
  btn2_modal_salvar_configuracoes.innerHTML = "não";
  btn2_modal_salvar_configuracoes.addEventListener(
    "click",
    modal_configuracoes_btn_nao
  );
  caixa_btns_modal_salvar_configuracoes.appendChild(
    btn2_modal_salvar_configuracoes
  );
}
//janela pagina inicial
function pagina_inicial() {
  //caixa principal da pagina inicial
  secao_direita_pagina_inicial.setAttribute(
    "id",
    "secao_direita_pagina_inicial"
  );
  secao_direita_pagina_inicial.setAttribute("class", "secao_direita");
  WindowMain.appendChild(secao_direita_pagina_inicial);

  // caixa do titulo e paragrafo
  boxtitle.setAttribute("id", "boxtitle");
  secao_direita_pagina_inicial.appendChild(boxtitle);
  titulo_direita.innerHTML = `&#x1F44B;Olá ${dados_das_configuracoes.nome_user},`;
  boxtitle.appendChild(titulo_direita);
  info_title.innerHTML = "pronto/a para organizar as tarefas.";
  boxtitle.appendChild(info_title);

  //caixa da barra de ferramentas
  boxtoolbar.setAttribute("id", "boxtoolbar");
  secao_direita_pagina_inicial.appendChild(boxtoolbar);
  //botões e item da barra de ferramenta
  btn_new_list.setAttribute("id", "btn_new_list");
  btn_new_list.setAttribute("title", "Criar nova lista");
  btn_new_list.innerHTML = "Nova lista";
  btn_new_list.addEventListener("click", () => {
    //comando responsável por ativar a modal tipo de lista que está com display=none
    /* modaltypelist.style.display = "flex"; */
    abrir_lista_normal();
  });
  boxtoolbar.appendChild(btn_new_list);
  btn_delete_list.setAttribute("class", "btn_clean");
  btn_delete_list.innerHTML = "Deletar listas";
  btn_delete_list.addEventListener("click", deletar_todas_listas);
  boxtoolbar.appendChild(btn_delete_list);
  //btn deletar seleção
  btn_deletar_slc.setAttribute("class", "btn_clean");
  btn_deletar_slc.innerHTML = "Deletar seleção";
  btn_deletar_slc.addEventListener("click", deletar_selecao);
  //contador de listas
  info_count_list.innerHTML = `${contador_listas} listas`;
  boxtoolbar.appendChild(info_count_list);
  //btn selecionar
  btn_select.innerHTML = "Selecionar";
  btn_select.setAttribute("class", "btn_clean");
  btn_select.setAttribute("id", "btnslecionarlist");
  btn_select.addEventListener("click", trava_do_modo_selecao);
  boxtoolbar.appendChild(btn_select);

  //caixa da barra de pesquisa
  boxsearch.setAttribute("id", "boxsearch");
  boxtoolbar.appendChild(boxsearch);
  //entrada da caixa de pesquisa
  input_search.setAttribute("id", "input_search");
  input_search.setAttribute("placeholder", "Pesquisa");
  input_search.value = "";
  input_search.addEventListener("input", (e) => {
    obter_valor_a_ser_pesquisado(e.target.value);
  });
  boxsearch.appendChild(input_search);
  //icon da barra de pesquisa
  icon_search.setAttribute("src", "img/icons/search.png");
  boxsearch.appendChild(icon_search);

  //display das listas na pagina inicial
  display_list.setAttribute("id", "display_list");
  secao_direita_pagina_inicial.appendChild(display_list);
  apresentar_listas_na_pagina_inicial();
}
//janela configurações
function configuracoes() {
  //aria direita da janela configurações
  secao_direita_config.setAttribute("id", "secao_direita_config");
  secao_direita_config.setAttribute("class", "secao_direita");
  WindowMain.appendChild(secao_direita_config);

  //titulo da aria configurações
  title_config.setAttribute("id", "title_config");
  title_config.innerHTML = "CONFIGURAÇÕES";
  secao_direita_config.appendChild(title_config);

  //caixa de apresentação das configurações
  BoxConfig.setAttribute("id", "boxconfig");
  secao_direita_config.appendChild(BoxConfig);

  //itens da caixa de apresentação configurações
  //caixa de configurações de aparência
  boxaparencia.setAttribute("id", "boxaparencia");
  BoxConfig.appendChild(boxaparencia);
  //titulo
  tituloaparencia.innerHTML = "Aparência";
  boxaparencia.appendChild(tituloaparencia);
  //caixa aparência mudar cor
  boxaparenciarCor.setAttribute("id", "boxaparenciacor");
  boxaparencia.appendChild(boxaparenciarCor);
  //boxbtn1
  boxbtnCor1.setAttribute("class", "boxbtnCor");
  boxbtnCor1.innerHTML = "<b>Mudar cor:</b>";
  boxaparenciarCor.appendChild(boxbtnCor1);
  //botões das cores
  btn_cor1.setAttribute("class", "btnCorlors");
  btn_cor1.setAttribute("id", "btnCor1");
  btn_cor1.innerHTML = "Violeta";
  btn_cor1.addEventListener("click", () => {
    cor_do_sistema_escolhida("#c935f2");
    configuracoes_alteradas();
  });
  boxbtnCor1.appendChild(btn_cor1);
  btn_cor2.setAttribute("class", "btnCorlors");
  btn_cor2.setAttribute("id", "btnCor2");
  btn_cor2.innerHTML = "Azul";
  btn_cor2.addEventListener("click", () => {
    cor_do_sistema_escolhida("#5d35f2");
    configuracoes_alteradas();
  });
  boxbtnCor1.appendChild(btn_cor2);

  //boxbtn2
  boxbtnCor2.setAttribute("class", "boxbtnCor");
  boxbtnCor2.innerHTML = "<b>Mudar tema:</b>";
  boxaparenciarCor.appendChild(boxbtnCor2);
  btn_cor3.setAttribute("class", "btnCorlors");
  btn_cor3.setAttribute("id", "btnCor3");
  btn_cor3.innerHTML = "Claro";
  btn_cor3.addEventListener("click", () => {
    escolher_tema("claro");
    console.log("claro");
    configuracoes_alteradas();
  });
  boxbtnCor2.appendChild(btn_cor3);
  btn_cor4.setAttribute("class", "btnCorlors");
  btn_cor4.setAttribute("id", "btnCor4");
  btn_cor4.innerHTML = "Escuro";
  btn_cor4.addEventListener("click", () => {
    escolher_tema("escuro");
    console.log("escuro");
    configuracoes_alteradas();
  });
  boxbtnCor2.appendChild(btn_cor4);
  /* btn_cor5.setAttribute("class", "btnCorlors");
  btn_cor5.setAttribute("id", "btnCor5");
  btn_cor5.innerHTML="Sistema";
  btn_cor5.addEventListener("click", () => {
    console.log("system");
    
  });
  boxbtnCor2.appendChild(btn_cor5); */

  //caixa de configurações de tamanho da font
  boxfont.setAttribute("id", "boxfont");
  boxfont.innerHTML = "Tamanho da font:";
  boxaparencia.appendChild(boxfont);
  //input tamanho da font
  inputfont.setAttribute("id", "inputfont");
  inputfont.setAttribute("type", "range");
  inputfont.setAttribute("min", "10");
  inputfont.setAttribute("max", "16");
  inputfont.value = dados_das_configuracoes.percentagem_da_fonte;
  inputfont.addEventListener("input", novo_tamanho_da_fonte);
  inputfont.addEventListener("change", alterar_tamanho_da_fonte);
  boxfont.appendChild(inputfont);
  informacao_da_parcentagem_da_fonte.innerHTML = `${dados_das_configuracoes.percentagem_da_fonte}px`;
  boxfont.appendChild(informacao_da_parcentagem_da_fonte);

  gerenciador.setAttribute("class", "gerenciador");
  gerenciador.innerHTML = "Nome do utilizador:";
  boxaparencia.appendChild(gerenciador);
  nome_do_gerencidor.setAttribute("class", "nome_do_gerencidor");
  nome_do_gerencidor.value = dados_das_configuracoes.nome_user;
  nome_do_gerencidor.addEventListener("input", () => {
    configuracoes_alteradas();
  });
  gerenciador.appendChild(nome_do_gerencidor);

  //caixa de configurações armazenamento
  boxstorage.setAttribute("id", "boxstorage");
  BoxConfig.appendChild(boxstorage);
  //titulo
  titleStorage.innerHTML = "Armazenamento";
  boxstorage.appendChild(titleStorage);
  //botão apagar todo armazenamento
  btn_delAll_storage.innerHTML = "Apagar todo";
  boxstorage.appendChild(btn_delAll_storage);

  // caixa dis botões cancelar e salvar da configurações
  btnsConfig.setAttribute("id", "btnsconfig");
  BoxConfig.appendChild(btnsConfig);
  //botões
  btnSalveconfig.innerHTML = "Salvo";
  btnSalveconfig.addEventListener("click", salvar_configuracoes);
  btnsConfig.appendChild(btnSalveconfig);
  btnCancelconfig.innerHTML = "Cancelar";
  btnCancelconfig.addEventListener(
    "click",
    cancelar_alteracoes_das_configuracoes
  );
  btnsConfig.appendChild(btnCancelconfig);
}
//janela sobre app
function sobre_app() {
  //caixa principal janela sobre app
  secao_direita_help.setAttribute("id", "secao_direita_help");
  secao_direita_help.setAttribute("class", "secao_direita");
  WindowMain.appendChild(secao_direita_help);

  //titulo sobre app
  title_help.setAttribute("id", "title_help");
  title_help.innerHTML = "SOBRE APP";
  secao_direita_help.appendChild(title_help);

  //caixa das informações do app
  Boxhelp.setAttribute("id", "boxhelp");
  secao_direita_help.appendChild(Boxhelp);
  Boxhelp.innerHTML = `
   <div id="boxversao">
     <div><h3 id="versaotitle">Versão:  </h3><p>1.0</p></div>
     <div><h3><b>Criado por:</b></h3><p> Alexandre junqueiro</p></div>
     <div><h3><b>Lançamento:</b></h3><p> Sem data</p></div>
   </div>
   <div id="boxdescricao">
     <h3>Descrição:</h3>
     <p>
       Este app é um projecto que faz parte do processo de aprendizagem de programação,<br>
       ele é gratuito e open search, proibido a venda, a ideia era pegar em um projeto de<br> 
       nível beginner e construir um app que as pessoas podem utilizar no seu dia a dia.
     </p>
     <p>
       O armazenamento do app é limitado, então recomendo que apague as listas mais antigas<br>
       para melhor desempenho do app.
     </p>
     <p>
       Ele foi desenvolvido com tecnologia web <b>(HTML,CSS, JAVASCRIPT)</b>, electron <b>(um framework javascript)</b><br>
       e <b>apache cordova electron</b>. Caso queira participar deste projeto fique avontade em contribuir no repositório do github.
     </p>
   </div>
   <div id="boxredes">
     <h3><b>Redes:</b> (click para copiar um link)</h3>
     <p>
     LinkedIn: <a href="https://www.linkedin.com/in/alexandre-junqueiro/" class="links" >Perfil do criador</a><br>
     GitHub: <a href="https://github.com/AleDev10/Manager-Tasks" class="links" >Reportório do projeto</a><br>
     Instagram: <a href="https://www.instagram.com/alexandre_junqueiro/" class="links" >Perfil do criador</a><br>
     Facebook: <a href="https://web.facebook.com/profile.php?id=100008443771463" class="links" >Perfil do criador</a><br>
     </p>
   </div>
   <div id="dica">
     <p><i>"Burro não é aquele que começa com a má brincadeira, burro é aquele que continua com a má brincadeira."</i></p>
   </div>

 `;
  abrir_links_da_pagina_sobre();
}
//janela lista normal
function lista_normal() {
  item_menu_home.style.backgroundColor = "";
  logo_home.style.backgroundColor = "";
  item_menu_home.style.color = "";

  //caixa principal da janela lista normal
  secao_direita_list_normal.setAttribute("id", "secao_direita_list_normal");
  secao_direita_list_normal.setAttribute("class", "secao_direita");
  WindowMain.appendChild(secao_direita_list_normal);

  //caixa de entrada da lista normal
  boxlistinputnormal.setAttribute("id", "boxlistinputnormal");
  secao_direita_list_normal.appendChild(boxlistinputnormal);
  //itens da caixa de entrada da lista normal
  inputlistnormal.setAttribute("id", "inputlistnormal");
  inputlistnormal.setAttribute("placeholder", "Digite uma tarefa");
  inputlistnormal.value = "";
  inputlistnormal.addEventListener("keydown", (e) => {
    evento_do_input_lista_normal(e);
  });
  boxlistinputnormal.appendChild(inputlistnormal);
  //btn_delet_tasks
  btn_delet_tasks.setAttribute("id", "btn_delet_tasks");
  btn_delet_tasks.setAttribute("class", "btn_clean");
  btn_delet_tasks.addEventListener("click", deletar_lista);
  btn_delet_tasks.innerHTML = "Deletar tarefas";
  boxlistinputnormal.appendChild(btn_delet_tasks);
  //count_tasks_normal_list
  count_tasks_normal_list.setAttribute("id", "count_tasks_normal_list");
  count_tasks_normal_list.innerHTML = `${contador_tarefas} tarefas`;
  boxlistinputnormal.appendChild(count_tasks_normal_list);

  //caixa dos botões de ações da list normal
  box_btns_list_normal.setAttribute("id", "box_btns_list_normal");
  secao_direita_list_normal.appendChild(box_btns_list_normal);
  //itens da caixa
  //botão adicionar
  btn_add_list_normal.setAttribute("class", "btnListNormal");
  btn_add_list_normal.addEventListener(
    "click",
    verificacao_para_adicionar_tarefa
  );
  btn_add_list_normal.innerHTML = "Adicionar";
  box_btns_list_normal.appendChild(btn_add_list_normal);
  //botão cancelar
  btn_cancel_list_normal.setAttribute("class", "btnListNormal");
  btn_cancel_list_normal.addEventListener("click", cancelar_tarefa);
  btn_cancel_list_normal.innerHTML = "Cancelar";
  box_btns_list_normal.appendChild(btn_cancel_list_normal);
  //botão salvar
  btn_save_list_normal.setAttribute("class", "btnListNormal");
  btn_save_list_normal.addEventListener("click", verificar_se_a_lista_existe);
  btn_save_list_normal.innerHTML = "Salvar";
  box_btns_list_normal.appendChild(btn_save_list_normal);

  //informação do estado sa lista salvo ou não
  estatos_lista.setAttribute("class", "estatos_lista");
  estatos_lista.innerHTML = "* Lista alterada";
  box_btns_list_normal.appendChild(estatos_lista);

  //caixa de apresentação das tarefas
  box_display_list_normal.setAttribute("id", "boxdisplaylistnormal");
  secao_direita_list_normal.appendChild(box_display_list_normal);

  //caixa do titulo da tarefa e o filtor de caterorias
  boxtitle_list_normal.setAttribute("id", "boxtitle_list_normal");
  boxtitle_list_normal.addEventListener("click", alterar_titulo);
  box_display_list_normal.appendChild(boxtitle_list_normal);
  //titulo da tarefa
  title_task_normal.setAttribute("id", "titletasknormal");
  title_task_normal.innerHTML = "Titulo";
  boxtitle_list_normal.appendChild(title_task_normal);

  //caixa das categorias e suas opções
  caixa_das_opcoes_e_das_categorias.setAttribute(
    "id",
    "caixa_das_opcoes_e_das_categorias"
  );
  boxtitle_list_normal.appendChild(caixa_das_opcoes_e_das_categorias);

  //caixa das opções das categorias
  box_opcoes__das_categorias_da_list_normal.setAttribute(
    "id",
    "box_opcoes__das_categorias_da_list_normal"
  );
  box_opcoes__das_categorias_da_list_normal.style.display = "none";
  caixa_das_opcoes_e_das_categorias.appendChild(
    box_opcoes__das_categorias_da_list_normal
  );
  //opções
  caterianormal1.setAttribute("class", "opcoes_lista_normal");
  caterianormal1.addEventListener("click", () => {
    obter_opcao_selecionada(
      "Categoria",
      box_opcoes__das_categorias_da_list_normal
    );
    deixar_entrada_normal();
    infolista("alterada");
  });
  caterianormal1.innerHTML = "Nenhuma";
  box_opcoes__das_categorias_da_list_normal.appendChild(caterianormal1);
  caterianormal2.setAttribute("class", "opcoes_lista_normal");
  caterianormal2.addEventListener("click", () => {
    obter_opcao_selecionada(
      "Lista de tarefa",
      box_opcoes__das_categorias_da_list_normal
    );
    deixar_entrada_normal();
    infolista("alterada");
  });
  caterianormal2.innerHTML = "Lista de tarefa";
  box_opcoes__das_categorias_da_list_normal.appendChild(caterianormal2);
  caterianormal3.setAttribute("class", "opcoes_lista_normal");
  caterianormal3.addEventListener("click", () => {
    obter_opcao_selecionada(
      "Projeto",
      box_opcoes__das_categorias_da_list_normal
    );
    deixar_entrada_normal();
    infolista("alterada");
  });
  caterianormal3.innerHTML = "Projeto";
  box_opcoes__das_categorias_da_list_normal.appendChild(caterianormal3);

  //caixa categorias
  boxcategorias_list_normal.setAttribute("class", "boxcategorias");
  boxcategorias_list_normal.addEventListener("click", (e) => {
    ativar_ou_desativar_opcoes1(
      "flex",
      box_opcoes__das_categorias_da_list_normal
    );
    e.stopPropagation();
    sair_do_filtro_de_opcoes("box_opcoes__das_categorias_da_list_normal");
  });
  caixa_das_opcoes_e_das_categorias.appendChild(boxcategorias_list_normal);
  //seletor categorias
  seletor_categorias_normal.innerHTML = "Categoria";
  boxcategorias_list_normal.appendChild(seletor_categorias_normal);
  //icone da caixa categorias
  iconCategoriaNormal.setAttribute("src", "img/icons/filter.png");
  boxcategorias_list_normal.appendChild(iconCategoriaNormal);

  //linha divisória
  box_display_list_normal.appendChild(linha_lista_normal);

  //listas
  boxTasklistnormal.setAttribute("class", "boxTasklistnormal");
  box_display_list_normal.appendChild(boxTasklistnormal);

  inputlistnormal.focus();
}

/*aria de 
  funcionalidades*/

//entrada de dados
function terminar_edicao_do_titulo_lista_normal(e) {
  if (e.key === "Enter") {
    evento_de_foco_do_titulo();
  }
}
function adicionar_tarefa() {
  contador_tarefas++;
  detalhes_da_descricao.push({
    texto: "......",
    alturaDaCaixa: 54,
  }),
    tarefas.push({
      id: contador_tarefas,
      tarefa: inputlistnormal.value.trim(),
      descricao: detalhes_da_descricao[contador_tarefas - 1],
      estatos: false,
    });
  console.log(tarefas);
  apresentar_tarefas();
}
function evento_do_input_lista_normal(e) {
  if (e.key === "Enter") {
    verificacao_para_adicionar_tarefa();
  } else if (e.key === "Escape") {
    cancelar_tarefa();
  }
}
function verificacao_input_modal_inicial_com_tecla(tecla) {
  if (tecla === "Enter") {
    //como os mesmos comandos usei a mesma função
    verificacao_modal_inicial_com_botao();
  }
}
function salvar_lista() {
  numero_de_salvamento++;
  listas[lista_aberta] = {
    titulo_lista: title_task_normal.textContent,
    categoria: seletor_categorias_normal.textContent,
    num_tarefas: contador_tarefas,
    tarefas: tarefas,
    descricao: detalhes_da_descricao,
    lisa_salva: numero_de_salvamento,
  };
  dados_salvo_no_arrey = true;
  modo_da_lista = "lista_existente";
  console.log("a lista está no arrey");
  console.log(`lista numero ${lista_aberta} salva.`);
  console.log(listas);
  deixar_entrada_normal();
  verificar_filtro_selecionado();
  infolista("salvo");
}
function evento_de_foco_da_descricao(e, i) {
  detalhes_da_descricao[i] = {
    texto: e.target.value,
    alturaDaCaixa: e.target.scrollHeight,
  };
  tarefas[i].descricao = detalhes_da_descricao[i];
  console.log(detalhes_da_descricao);
  console.log(tarefas);
  console.log(e.target.scrollHeight);
  apresentar_tarefas();
}
function salvar_configuracoes() {
  dados_das_configuracoes = {
    nome_user: `${nome_do_gerencidor.value}`,
    cor_sistema: dados_das_configuracoes.cor_sistema,
    cor_modo_do_sistema: dados_das_configuracoes.cor_modo_do_sistema,
    percentagem_da_fonte: inputfont.value,
    logo: dados_das_configuracoes.logo,
  };
  alteracoes_salvas();
}

//processamento de dados
function verificacao_modal_inicial() {
  if (!ativar) {
    modal_inicio();
    modal_tipo_lista();
    modal_salvar_lista();
    modalMensagem();
    modalSalvarConfiguracoes();
  } else {
    modal_tipo_lista();
    modal_salvar_lista();
    modalMensagem();
    modalSalvarConfiguracoes();
    janela_principal();
    cor_menu_pagina_inicial();
    pagina_inicial();
  }
  escolher_tema(dados_das_configuracoes.cor_modo_do_sistema);
  cor_do_sistema_escolhida(dados_das_configuracoes.cor_sistema);
  alterar_tamanho_da_fonte();
  alteracoes_salvas();
}
function abrir_pagina_inicial() {
  if (menu_activo == "configuracao") {
    verificacao_do_salvamento_das_configuracoes("paginaincial");
  }
  if (menu_activo == "ajuda") {
    remover_elemento_da_tela(WindowMain, secao_direita_help);
    menu_ativo_pagina_inicial();
  }
  if (menu_activo == "lista_normal") {
    verificar_da_Saida_da_lista("paginaincial");
  }
}
function abrir_configuracoes() {
  if (menu_activo == "paginaincial") {
    desativar_modo_selecao();
    remover_elemento_da_tela(WindowMain, secao_direita_pagina_inicial);
    menu_ativo_configuracoes();
  }
  if (menu_activo == "ajuda") {
    remover_elemento_da_tela(WindowMain, secao_direita_help);
    menu_ativo_configuracoes();
  }
  if (menu_activo == "lista_normal") {
    verificar_da_Saida_da_lista("configuracao");
  }
}
function abrir_sobre_app() {
  if (menu_activo == "paginaincial") {
    desativar_modo_selecao();
    remover_elemento_da_tela(WindowMain, secao_direita_pagina_inicial);
    menu_ativo_sobre_app();
  }
  if (menu_activo == "configuracao") {
    verificacao_do_salvamento_das_configuracoes("ajuda");
  }
  if (menu_activo == "lista_normal") {
    verificar_da_Saida_da_lista("ajuda");
  }
}
function abrir_lista_normal() {
  desativar_modo_selecao();
  remover_elemento_da_tela(WindowMain, secao_direita_pagina_inicial);
  limpar_tarefas();
  lista_normal();
  menu_activo = "lista_normal";
  contador_listas++;
  lista_aberta = contador_listas - 1;
  numero_de_salvamento = 0;
  dados_salvo_no_arrey = false;
  modo_da_lista = "nova_lista";
  console.log("a lista não está no arrey");
  infolista("inicio");
  console.log(`Abriu a lista de tarefas normal.`);
  console.log(`lista numero ${lista_aberta} criada.`);
}
function menu_ativo_pagina_inicial() {
  cor_menu_pagina_inicial();
  pagina_inicial();
  menu_activo = "paginaincial";
}
function menu_ativo_configuracoes() {
  cor_menu_configuracoes();
  configuracoes();
  menu_activo = "configuracao";
}
function menu_ativo_sobre_app() {
  cor_menu_sobre_app();
  sobre_app();
  menu_activo = "ajuda";
}
function verificacao_modal_inicial_com_botao() {
  let nome = document.getElementById("inputNome").value.toLowerCase();
  if (nome == "") {
    erro_do_input_da_modal_inicial();
  } else {
    dados_das_configuracoes.nome_user =
      nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();
    ativar = true;
    modalBox.style.display = "none";
    janela_principal();
    pagina_inicial();
    cor_menu_pagina_inicial();
    console.log(`Usuario ${dados_das_configuracoes.nome_user} registrado.`);
    alteracoes_salvas();
  }
}
function deletar_lista() {
  limpar_tarefas();
  tarefas.splice(0, tarefas.length);
  detalhes_da_descricao.splice(0, detalhes_da_descricao.length);
  contador_tarefas = 0;
  console.log(`tarefas da lista numero ${contador_listas} deletadas.`);
  atualizar_num_listas();
  deixar_entrada_normal();
  infolista("alterada");
}
function alterar_titulo(e) {
  if (e.target.id === "titletasknormal") {
    editar.setAttribute("class", "editar_campo");
    editar.setAttribute("maxlength", "19");
    evento_de_troca_de_elemento_do_titulo();
    editar.addEventListener("blur", evento_de_foco_do_titulo);
    editar.addEventListener("keydown", terminar_edicao_do_titulo_lista_normal);
  }
}
function verificacao_para_adicionar_tarefa() {
  if (inputlistnormal.value.trim() == "") {
    deixar_entrada_normal();
  } else {
    adicionar_tarefa();
    deixar_entrada_normal();
  }
}
function apresentar_tarefas() {
  limpar_tarefas();
  atualizar_num_listas();
  infolista("alterada");
  tarefas.forEach((tarefas, i) => {
    criacao_da_tarefas(tarefas, i);
  });
  deixar_entrada_normal();
}
function caixas_de_verificacao() {
  var caixas_check = document.querySelectorAll(".checkbox");
  caixas_check.forEach(function (caixa) {
    caixa.addEventListener("change", verificar_caixa_de_verificacao_de_tarefa);
  });
}
function verificar_caixa_de_verificacao_de_tarefa(e) {
  for (let index = 0; index < contador_tarefas; index++) {
    if (e.target.id == `caixa_concluir${index}`) {
      if (e.target.checked) {
        tarefas[index].estatos = true;
      } else {
        tarefas[index].estatos = false;
      }
    }
  }
  apresentar_tarefas();
}
function deletar_uma_tarefa() {
  let botoes_deletar = document.querySelectorAll(".deletartarefa");
  botoes_deletar.forEach((tag) => {
    tag.addEventListener("click", (e) => {
      verificacao_botao_deletar_selecionado(e.target);
    });
  });
}
function verificacao_botao_deletar_selecionado(ele) {
  for (let index = 0; index < contador_tarefas; index++) {
    if (ele.id == `delete${index}`) {
      deletar_tarefa_selecionada(index);
    }
  }
}
function deletar_tarefa_selecionada(i) {
  tarefas.splice(i, 1);
  detalhes_da_descricao.splice(i, 1);
  contador_tarefas -= 1;
  apresentar_tarefas();
}
function editar_uma_tarefas() {
  let botoes_editar = [...document.querySelectorAll(".editartarefa")];
  botoes_editar.forEach((editar) => {
    editar.addEventListener("click", verificacao_botao_editar_selecionado);
  });
}
function verificacao_botao_editar_selecionado(e) {
  for (let index = 0; index < contador_tarefas; index++) {
    if (e.target.id == `edite${index}`) {
      const botao_editar = document.querySelector(`#edite${index}`);
      const texto_tarefa = document.querySelector(`#infoTask${index}`);
      const botao_deletar = document.querySelector(`#delete${index}`);
      const verificacao_da_tarefa = document.querySelector(
        `#caixa_concluir${index}`
      );
      const desativar_verificacao_da_tarefa = [
        ...document.querySelectorAll(".checkbox"),
      ];
      let confirmar_edicao = document.createElement("img");
      let cancelar_edicao = document.createElement("img");
      let entrada_edicao = document.createElement("input");

      confirmar_edicao.setAttribute("src", "img/icons/dobleverificado.png");
      cancelar_edicao.setAttribute("src", "img/icons/cancel.png");
      entrada_edicao.setAttribute("class", "entrada_edicao");

      if (!verificacao_da_tarefa.checked) {
        troca_de_elemento(botao_editar, confirmar_edicao);
        troca_de_elemento(botao_deletar, cancelar_edicao);
        troca_de_elemento(texto_tarefa, entrada_edicao);
        troca_de_valor(entrada_edicao, index);
        desativar_verificacao_da_tarefa.forEach((item) => {
          item.removeEventListener(
            "change",
            verificar_caixa_de_verificacao_de_tarefa
          );
          item.addEventListener("click", (e) => {
            e.preventDefault();
          });
        });
      }

      //eventos
      confirmar_edicao.addEventListener("click", () => {
        if (entrada_edicao.value == "") {
          erro_entrada_edicao(entrada_edicao);
        } else {
          troca_de_elemento(confirmar_edicao, botao_editar);
          troca_de_elemento(cancelar_edicao, botao_deletar);
          troca_de_elemento(entrada_edicao, texto_tarefa);
          guardar_tarefa_editada(entrada_edicao, texto_tarefa, index);
        }
      });
      cancelar_edicao.addEventListener("click", () => {
        troca_de_elemento(confirmar_edicao, botao_editar);
        troca_de_elemento(cancelar_edicao, botao_deletar);
        troca_de_elemento(entrada_edicao, texto_tarefa);
      });
      entrada_edicao.addEventListener("blur", () => {
        if (entrada_edicao.value == "") {
          erro_entrada_edicao(entrada_edicao);
        } else {
          troca_de_elemento(confirmar_edicao, botao_editar);
          troca_de_elemento(cancelar_edicao, botao_deletar);
          troca_de_elemento(entrada_edicao, texto_tarefa);
          guardar_tarefa_editada(entrada_edicao, texto_tarefa, index);
        }
      });
      entrada_edicao.addEventListener("keydown", (e) => {
        if (e.key == "Enter") {
          if (entrada_edicao.value == "") {
            erro_entrada_edicao(entrada_edicao);
          } else {
            troca_de_elemento(confirmar_edicao, botao_editar);
            troca_de_elemento(cancelar_edicao, botao_deletar);
            troca_de_elemento(entrada_edicao, texto_tarefa);
            guardar_tarefa_editada(entrada_edicao, texto_tarefa, index);
          }
        }
      });
    }
  }
}
function guardar_tarefa_editada(pai, filho, i) {
  filho.textContent = pai.value;
  tarefas[i].tarefa = pai.value;
  apresentar_tarefas();
}
function verificar_modal_salvar_lista() {
  if (estatos_modal_salvar_lista) {
    salvar_lista();
    sair_da_modal_salvar_lista();
    sairDaLista();
    console.log("sim");
  } else {
    if (numero_de_salvamento > 0) {
      listas[lista_aberta].tarefas = copia_das_tarefas;
      sair_da_modal_salvar_lista();
      sairDaLista();
      console.log("sim sim");
    } else {
      contador_listas--;
      sair_da_modal_salvar_lista();
      sairDaLista();
      console.log("sim sim sim");
    }
  }
}
function verificar_da_Saida_da_lista(e="paginaincial") {
  pagina_que_a_lista_vai_remover = e;
  if (confirmacao_de_lista_salva && dados_salvo_no_arrey == false) {
    contador_listas--;
    sairDaLista();
  } else {
    if (confirmacao_de_lista_salva) {
      sairDaLista();
    } else {
      abrir_modal_salvar_lista();
    }
  }
}
function sairDaLista() {
  tarefas = [];
  detalhes_da_descricao = [];
  contador_tarefas = 0;
  lista_aberta = -1;
  numero_de_salvamento = 0;
  copia_das_tarefas = [];
  modo_da_lista = "";
  remover_lista_normal(pagina_que_a_lista_vai_remover);
  console.log("saio da lista");
  console.log("nenhuma lista aberta " + lista_aberta);
}
function remover_lista_normal(texto,ativado_por="lista_normal") {
  switch (texto) {
    case "paginaincial":
      remover_elemento_da_tela(WindowMain, (ativado_por!="lista_filtrada")?secao_direita_list_normal:secao_direita_pagina_inicial);
      (ativado_por!="lista_filtrada")?menu_ativo_pagina_inicial():menu_activo = "lista_normal";
      break;
    case "configuracao":
      remover_elemento_da_tela(WindowMain, (ativado_por!="lista_filtrada")?secao_direita_list_normal:secao_direita_config);
      (ativado_por!="lista_filtrada")?menu_ativo_configuracoes():menu_activo = "lista_normal";
      break;
    case "ajuda":
      remover_elemento_da_tela(WindowMain, (ativado_por!="lista_filtrada")?secao_direita_list_normal:secao_direita_help);
      (ativado_por!="lista_filtrada")?menu_ativo_sobre_app():menu_activo = "lista_normal";
      break;
    case "lista_normal":
      remover_elemento_da_tela(WindowMain, (ativado_por!="lista_filtrada")?secao_direita_list_normal:secao_direita_list_normal);
      break;
    default:
      console.log("ação solicitada invalida");
      break;
  }
}
function identificar_descricao() {
  let descricoes = [...document.querySelectorAll(".txtDescricao")];
  descricoes.forEach((item) => {
    item.addEventListener("click", (e) => {
      if (acesso_a_descricao) {
        console.log(detalhes_da_descricao);
        console.log(e.target.style.height);
        acesso_a_descricao = false;
        for (let index = 0; index < contador_tarefas; index++) {
          if (e.target.id == `txtDescricao${index}`) {
            e.target.addEventListener("keydown", (ele) => {
              editar_descricao(ele);
            });
            e.target.addEventListener("blur", (ele) => {
              if (e.target.value === "") {
                e.target.value = "......";
                e.target.style.height = "auto";
              } else {
                evento_de_foco_da_descricao(ele, index);
                acesso_a_descricao = true;
              }
            });
          }
        }
      }
    });
  });
}
function verificar_lista_selecionada() {
  let listas_elementos = [...document.querySelectorAll(`.list`)];
  listas_elementos.forEach((item) => {
    item.addEventListener("click", (e) => {
      for (let index = 0; index < contador_listas; index++) {
        if (e.target.id == `${index}lista`) {
          if (evento_de_entrada_na_lista) {
            abrir_lista_normal_pela_pagina_inicial(index);
          } else {
            e.stopPropagation();
          }
        }
      }
    });
  });
}
function abrir_lista_normal_pela_pagina_inicial(i) {
  remover_elemento_da_tela(WindowMain, secao_direita_pagina_inicial);
  lista_normal();
  limpar_tarefas();
  menu_activo = "lista_normal";
  lista_aberta = i;
  dados_salvo_no_arrey = true;
  tarefas = listas[lista_aberta].tarefas;
  copia_das_tarefas = JSON.parse(JSON.stringify(tarefas));
  detalhes_da_descricao = listas[lista_aberta].descricao;
  contador_tarefas = listas[lista_aberta].num_tarefas;
  seletor_categorias_normal.innerHTML = `${listas[lista_aberta].categoria}`;
  title_task_normal.innerHTML = `${listas[lista_aberta].titulo_lista}`;
  numero_de_salvamento = listas[lista_aberta].lisa_salva;
  modo_da_lista = "lista_existente";
  apresentar_tarefas();
  infolista("inicio");
  console.log(`lista numero ${lista_aberta} aberta`);
}
function deletar_todas_listas() {
  listas.splice(0, contador_listas);
  contador_listas = 0;
  titulo_iguais = 0;
  actualizar_contador_de_listas();
  apresentar_listas_na_pagina_inicial();
  apresentar_listas_no_display_do_filtro(filter_list.innerHTML);
}
function deletar_selecao() {
  let todaslistas = [...document.querySelectorAll(".selecionado")];
  contador_listas -= todaslistas.length;
  todaslistas.forEach((item) => {
    listas.splice(parseInt(item.id), 1);
  });
  actualizar_contador_de_listas();
  ativar_btn_deletar_selecao("Cancelar-seleção");
  mudar_texto_do_btn_selecionar("Selecionar");
  evento_de_entrada_na_lista = true;
  apresentar_listas_na_pagina_inicial();
  apresentar_listas_no_display_do_filtro(filter_list.innerHTML);
}
function selecionar_lista(e) {
  if (!e.target.classList.contains("title_list")) {
    let index = parseInt(e.target.id);
    e.target.classList.toggle("selecionado");
    if (e.target.classList.contains("selecionado")) {
      contador_de_listas_selecionadas++;
      actualizar_contador_de_listas_selecionadas();
      console.log("Selecionei a lista " + index);
    } else {
      contador_de_listas_selecionadas--;
      actualizar_contador_de_listas_selecionadas();
      console.log("deselecionei a lista " + index);
    }
  }
}
function verificar_selecao() {
  let todaslistas = [...document.querySelectorAll(".list")];
  if (todaslistas.length != 0) {
    if (!todaslistas[0].classList.contains("discelecionado")) {
      evento_de_entrada_na_lista = true;
      apresentar_listas_na_pagina_inicial();
    }
  }
}
function ativar_modo_selecionar() {
  let todaslistas = [...document.querySelectorAll(".list")];
  todaslistas.forEach((item) => {
    item.classList.toggle("discelecionado");
    item.addEventListener("click", selecionar_lista);
  });
  evento_de_entrada_na_lista = todaslistas[0].classList.contains(
    "discelecionado"
  )
    ? false
    : true;
  todaslistas[0].classList.contains("discelecionado")
    ? mudar_texto_do_btn_selecionar("Cancelar-seleção")
    : mudar_texto_do_btn_selecionar("Selecionar");
  todaslistas[0].classList.contains("discelecionado")
    ? ativar_btn_deletar_selecao("Selecionar")
    : ativar_btn_deletar_selecao("Cancelar-seleção");
  todaslistas[0].classList.contains("discelecionado")
    ? ativar_contador_de_listas_selecionadas("Selecionar")
    : ativar_contador_de_listas_selecionadas("Cancelar-seleção");
  verificar_selecao();
  console.log(evento_de_entrada_na_lista);
}
function trava_do_modo_selecao() {
  if (listas.length != 0) {
    ativar_modo_selecionar();
  }
}
function verificar_se_a_lista_existe() {
  let resultado = listas.findIndex(
    (item) => item.titulo_lista === title_task_normal.textContent
  );
  if (resultado == -1) {
    salvar_lista();
    ativar_modalMensagem("Lista salva");
  } else if (modo_da_lista === "lista_existente") {
    salvar_lista();
    ativar_modalMensagem("Lista salva");
  } else {
    titulo_iguais++;
    title_task_normal.textContent = `Titulo${titulo_iguais}`;
    salvar_lista();
    ativar_modalMensagem("Lista salva");
  }
}
function desativar_modo_selecao() {
  evento_de_entrada_na_lista = true;
  contador_de_listas_selecionadas = 0;
  mudar_texto_do_btn_selecionar("Selecionar");
  ativar_btn_deletar_selecao("Cancelar-seleção");
  ativar_contador_de_listas_selecionadas("Cancelar-seleção");
}
function abrir_links_da_pagina_sobre() {
  let todoslinks = document.querySelectorAll(".links");
  todoslinks.forEach((item) => {
    item.addEventListener("click", async (e) => {
      e.preventDefault();
      ativar_modalMensagem("Abrindo link no navegador");
      setTimeout(() => {
        api.abrirLinkEmNavegadorExterno(e.target.href);
      }, 1500);
    });
  });
}
function verificacao_do_salvamento_das_configuracoes(texto) {
  if (configuracoes_salvas) {
    sair_das_configuracoes(texto);
  } else {
    estado_da_modal_salvar_configuracoes("flex");
    pagina_que_configuracoes_vai_remover = texto;
  }
}
function sair_das_configuracoes(texto) {
  switch (texto) {
    case "paginaincial":
      remover_elemento_da_tela(WindowMain, secao_direita_config);
      menu_ativo_pagina_inicial();
      break;
    case "ajuda":
      remover_elemento_da_tela(WindowMain, secao_direita_config);
      menu_ativo_sobre_app();
      break;
    default:
      break;
  }
}
function modal_configuracoes_btn_sim() {
  salvar_configuracoes();
  estado_da_modal_salvar_configuracoes("none");
  sair_das_configuracoes(pagina_que_configuracoes_vai_remover);
  console.log("sim");
}
function modal_configuracoes_btn_nao() {
  cancelar_alteracoes_das_configuracoes();
  estado_da_modal_salvar_configuracoes("none");
  sair_das_configuracoes(pagina_que_configuracoes_vai_remover);
  console.log("não");
}
function alteracoes_salvas() {
  btnSalveconfig.innerHTML = "Salvo";
  copia_dos_dados_das_configuracoes = JSON.parse(
    JSON.stringify(dados_das_configuracoes)
  );
  configuracoes_salvas = true;
}
function cancelar_alteracoes_das_configuracoes() {
  dados_das_configuracoes.nome_user =
    copia_dos_dados_das_configuracoes.nome_user;
  nome_do_gerencidor.value = dados_das_configuracoes.nome_user;
  dados_das_configuracoes.cor_sistema =
    copia_dos_dados_das_configuracoes.cor_sistema;
  dados_das_configuracoes.cor_modo_do_sistema =
    copia_dos_dados_das_configuracoes.cor_modo_do_sistema;
  inputfont.value = copia_dos_dados_das_configuracoes.percentagem_da_fonte;
  dados_das_configuracoes.percentagem_da_fonte = inputfont.value;
  informacao_da_parcentagem_da_fonte.innerHTML = `${inputfont.value}px`;
  dados_das_configuracoes.logo = copia_dos_dados_das_configuracoes.logo;

  escolher_tema(dados_das_configuracoes.cor_modo_do_sistema);
  cor_do_sistema_escolhida(dados_das_configuracoes.cor_sistema);
  alterar_tamanho_da_fonte();
  alteracoes_salvas();
}
function obter_valor_a_ser_pesquisado(texto) {
  pesquisar_lista(texto);
}
function pesquisar_lista(texto) {
  let listas_apresentadas = document.querySelectorAll(".list");
  listas_apresentadas.forEach((lista, index) => {
    if (
      lista.children[0].textContent
        .toLowerCase()
        .trim()
        .includes(texto.toLowerCase().trim())
    ) {
      actulizar_display_das_listas(lista, "flex");
    } else if (texto == "") {
      actulizar_display_das_listas(lista, "flex");
    } else {
      actulizar_display_das_listas(lista, "none");
    }
  });
}
function obter_opcao_selecionada(texto, elemento = filter_list_opcoes) {
  if (elemento == filter_list_opcoes) {
    filter_list.innerHTML = texto;
    ativar_ou_desativar_opcoes1("none");
    apresentar_listas_no_display_do_filtro(texto);
  } else {
    seletor_categorias_normal.innerHTML = texto;
    ativar_ou_desativar_opcoes1("none", elemento);
  }
}
function verificar_filtro_selecionado() {
  switch (filter_list.textContent) {
    case "Todas":
      obter_opcao_selecionada("Todas");
      break;
    case "Listas":
      obter_opcao_selecionada("Listas");
      break;
    case "Projetos":
      obter_opcao_selecionada("Projetos");
      break;
  
    default:
      console.log("opção invalida");
      break;
  }
}
function sair_do_filtro_de_opcoes(elemento = "filter_list_opcoes") {
  document.addEventListener("click", (e) => {
    let elemento1 = document.querySelector(`#${elemento}`);
    if (!elemento1.contains(e.target)) {
      if (elemento == "box_opcoes__das_categorias_da_list_normal") {
        ativar_ou_desativar_opcoes1(
          "none",
          box_opcoes__das_categorias_da_list_normal
        );
      } else {
        ativar_ou_desativar_opcoes1("none");
      }
    }
  });
}

//saida de dados
function cor_menu_pagina_inicial() {
  item_menu_settings.style.backgroundColor = "";
  logo_settings.style.backgroundColor = "";
  item_menu_settings.style.color = "";
  item_menu_help.style.backgroundColor = "";
  logo_help.style.backgroundColor = "";
  item_menu_help.style.color = "";
  item_menu_home.style.backgroundColor = `${dados_das_configuracoes.cor_sistema}`;
  logo_home.style.backgroundColor = "#ffff";
  item_menu_home.style.color = "#ffff";
}
function cor_menu_configuracoes() {
  item_menu_settings.style.backgroundColor = `${dados_das_configuracoes.cor_sistema}`;
  logo_settings.style.backgroundColor = "#ffff";
  item_menu_settings.style.color = "#ffff";
  item_menu_help.style.backgroundColor = "";
  logo_help.style.backgroundColor = "";
  item_menu_help.style.color = "";
  item_menu_home.style.backgroundColor = "";
  logo_home.style.backgroundColor = "";
  item_menu_home.style.color = "";
}
function cor_menu_sobre_app() {
  item_menu_settings.style.backgroundColor = "";
  logo_settings.style.backgroundColor = "";
  item_menu_settings.style.color = "";
  item_menu_help.style.backgroundColor = `${dados_das_configuracoes.cor_sistema}`;
  logo_help.style.backgroundColor = "#ffff";
  item_menu_help.style.color = "#ffff";
  item_menu_home.style.backgroundColor = "";
  logo_home.style.backgroundColor = "";
  item_menu_home.style.color = "";
}
function erro_do_input_da_modal_inicial() {
  document.getElementById("inputNome").placeholder = "Tens que digitar um nome";
  document.getElementById("inputNome").style.outlineColor = "#f2355e";
  document.getElementById("inputNome").focus();
}
function apresentar_listas_na_pagina_inicial() {
  //lista
  display_list.innerHTML = `<div style="position:absolute"></div>`;
  listas.forEach((e, i) => {
    display_list.innerHTML =
      `
     <div id="${i}lista" class="list">
       <span class="title_list">${e.titulo_lista}</span>
     </div>
     ` + display_list.innerHTML;
  });
  verificar_lista_selecionada();
}
function remover_elemento_da_tela(pai, filho) {
  pai.removeChild(filho);
}
function cancelar_tarefa() {
  inputlistnormal.value = "";
  inputlistnormal.focus();
}
function troca_de_elemento(pai, filho) {
  pai.replaceWith(filho);
}
function evento_de_foco_do_titulo() {
  if (editar.value == "") {
    editar.focus();
  } else {
    infolista("alterada");
    title_task_normal.textContent = editar.value;
    boxtitle_list_normal.appendChild(title_task_normal);
    editar.replaceWith(title_task_normal);
    inputlistnormal.focus();
  }
}
function evento_de_troca_de_elemento_do_titulo() {
  editar.value = title_task_normal.textContent;
  troca_de_elemento(title_task_normal, editar);
  editar.focus();
  editar.select();
}
function deixar_entrada_normal() {
  inputlistnormal.value = "";
  inputlistnormal.focus();
}
function limpar_tarefas() {
  boxTasklistnormal.innerHTML = "<div></div>";
}
function atualizar_num_listas() {
  count_tasks_normal_list.innerHTML = `${contador_tarefas} tarefas`;
}
function erro_entrada_edicao(e) {
  e.style.outlineColor = "#f2355e";
  e.focus();
}
function troca_de_valor(e, i) {
  e.value = tarefas[i].tarefa;
  e.focus();
}
function infolista(e) {
  estatos_lista.style.display = "flex";
  switch (e) {
    case "inicio":
      confirmacao_de_lista_salva = true;
      estatos_lista.innerHTML = "<b>Estado:</b>lista aberta";
      console.log("lista aberta");
      break;
    case "salvo":
      confirmacao_de_lista_salva = true;
      estatos_lista.innerHTML = "<b>Estado:</b>Lista salva";
      console.log("lista salva");
      break;
    case "alterada":
      confirmacao_de_lista_salva = false;
      estatos_lista.innerHTML = "<b>Estado:</b>*Salve a lista";
      console.log("lista alterada");
      break;
    default:
      console.log("Nenhuma ação solicitada");
      break;
  }
}
function sair_da_modal_salvar_lista() {
  modalsalvalista.style.display = "none";
}
function abrir_modal_salvar_lista() {
  modalsalvalista.style.display = "flex";
}
function editar_descricao(e) {
  if (e.key === "Tab") {
    e.target.value += "    ";
  } else {
    e.target.style.height = `auto`;
    e.target.style.height = `${e.target.scrollHeight}px`;
    console.log(e.target.scrollHeight);
  }
}
function criacao_da_tarefas(tarefas, i) {
  //caixa principal das tarefas
  boxTasklistnormal.innerHTML =
    `
   <div class="boxTask">
     <div class="boxTask1">
       <input type="checkbox" id="caixa_concluir${i}"  class="checkbox" ${
      tarefas.estatos ? (checked = "checked") : false
    }>
       <span id="infoTask${i}" class="infoTask ${
      tarefas.estatos ? "concluido" : "nao_concluido"
    }">${tarefas.tarefa}</span>
     </div>
     <div class="boxTask2">
       <img src="img/icons/edite.png" id="edite${i}" class="editartarefa">
       <img src="img/icons/delete.png" id="delete${i}" class="deletartarefa">
     </div>
   </div>
   <div class="descricaoTask">
     <textarea id="txtDescricao${i}" class="txtDescricao" style="height:${
      tarefas.descricao.alturaDaCaixa
    }px;">${tarefas.descricao.texto}</textarea> 
    </div>` + boxTasklistnormal.innerHTML;

  //função das checkbox
  caixas_de_verificacao();
  deletar_uma_tarefa();
  editar_uma_tarefas();
  identificar_descricao();
}
function actualizar_contador_de_listas() {
  info_count_list.innerHTML = `${contador_listas} listas`;
}
function actualizar_contador_de_listas_selecionadas() {
  info_count_list.innerHTML = `${contador_de_listas_selecionadas} listas selecionadas`;
}
function mudar_texto_do_btn_selecionar(texto) {
  if (texto == "Selecionar") {
    btn_select.innerHTML = "Selecionar";
  } else {
    btn_select.innerHTML = "Cancelar seleção";
  }
}
function ativar_btn_deletar_selecao(ele) {
  if (ele == "Selecionar") {
    btn_delete_list.replaceWith(btn_deletar_slc);
  } else {
    btn_deletar_slc.replaceWith(btn_delete_list);
  }
}
function ativar_contador_de_listas_selecionadas(ele) {
  if (ele == "Selecionar") {
    contador_de_listas_selecionadas = 0;
    info_count_list.innerHTML = `${contador_de_listas_selecionadas} listas selecionadas`;
  } else {
    info_count_list.innerHTML = `${contador_listas} listas`;
  }
}
function ativar_modalMensagem(texto) {
  caixa_modal_mensagens.style.display = "flex";
  mensagens.innerHTML = texto;
  setTimeout(() => {
    caixa_modal_mensagens.style.display = "none";
  }, 1500);
}
function novo_tamanho_da_fonte(e) {
  dados_das_configuracoes.percentagem_da_fonte = e.target.value;
  informacao_da_parcentagem_da_fonte.innerHTML = `${dados_das_configuracoes.percentagem_da_fonte}px`;
}
function alterar_tamanho_da_fonte() {
  document.documentElement.style.setProperty(
    "--tamanho-principal-da-fonte",
    `${dados_das_configuracoes.percentagem_da_fonte}px`
  );
  configuracoes_alteradas();
}
function cor_do_sistema_escolhida(cor) {
  switch (cor) {
    case "#c935f2":
      document.documentElement.style.setProperty("--cor-main", "#c935f2");
      document.documentElement.style.setProperty("--cor-secund", "#4c1a59");
      document.documentElement.style.setProperty("--cor-de-realce", "#5d35f2");
      document.documentElement.style.setProperty("--cor-para-erros", "#f2355e");
      document.documentElement.style.setProperty(
        "--primeira-cor-do-modo-selecao",
        "#765380c9"
      );
      document.documentElement.style.setProperty(
        "--segunda-cor-do-modo-selecao",
        "#3535359d"
      );
      dados_das_configuracoes.cor_sistema = "#c935f2";
      dados_das_configuracoes.logo2 =
        dados_das_configuracoes.cor_modo_do_sistema === "escuro"
          ? "img/logo/logoapp4.png"
          : "img/logo/logoapp2.png";
      document.getElementById("logomodaliniciar").src =
        dados_das_configuracoes.logo2;
      cor_menu_configuracoes();
      console.log("feito1");
      break;
    case "#5d35f2":
      document.documentElement.style.setProperty("--cor-main", "#5d35f2");
      document.documentElement.style.setProperty("--cor-secund", "#201a59");
      document.documentElement.style.setProperty("--cor-de-realce", "#b148f3");
      document.documentElement.style.setProperty("--cor-para-erros", "#f2355e");
      document.documentElement.style.setProperty(
        "--primeira-cor-do-modo-selecao",
        "#4f4552a6"
      );
      document.documentElement.style.setProperty(
        "--segunda-cor-do-modo-selecao",
        "#0f0f0fc7"
      );
      dados_das_configuracoes.cor_sistema = "#5d35f2";
      dados_das_configuracoes.logo2 =
        dados_das_configuracoes.cor_modo_do_sistema === "escuro"
          ? "img/logo/logoapp4-1.png"
          : "img/logo/logoapp2-1.png";
      document.getElementById("logomodaliniciar").src =
        dados_das_configuracoes.logo2;
      cor_menu_configuracoes();
      console.log("feito2");
      break;
    default:
      console.log("opção invalida");
      break;
  }
}
function escolher_tema(e) {
  switch (e) {
    case "escuro":
      dados_das_configuracoes.cor_modo_do_sistema = "escuro";
      api.temaEscuro();
      document.documentElement.style.setProperty(
        "--modo-primeira-cor",
        "#353535"
      );
      document.documentElement.style.setProperty(
        "--modo-segunda-cor",
        "#7c7c7c"
      );
      document.documentElement.style.setProperty(
        "--modo-terceira-cor",
        "#c0bfbf"
      );
      document.documentElement.style.setProperty("--cor-do-texto", "#ffff");
      document.documentElement.style.setProperty(
        "--primeira-cor-do-modo-selecao",
        "#4f4552a6"
      );
      document.documentElement.style.setProperty(
        "--segunda-cor-do-modo-selecao",
        "#0f0f0fc7"
      );
      dados_das_configuracoes.logo = "img/logo/logoapp5.png";
      logo.src = dados_das_configuracoes.logo;
      break;
    case "claro":
      api.temaClaro();
      dados_das_configuracoes.cor_modo_do_sistema = "claro";
      document.documentElement.style.setProperty(
        "--modo-primeira-cor",
        "#ffffff"
      );
      document.documentElement.style.setProperty(
        "--modo-segunda-cor",
        "#f0f0f0"
      );
      document.documentElement.style.setProperty(
        "--modo-terceira-cor",
        "#b1b1b1"
      );
      document.documentElement.style.setProperty("--cor-do-texto", "#353535");
      document.documentElement.style.setProperty(
        "--primeira-cor-do-modo-selecao",
        "#4f4552a6"
      );
      document.documentElement.style.setProperty(
        "--segunda-cor-do-modo-selecao",
        "#0f0f0fc7"
      );
      dados_das_configuracoes.logo = "img/logo/logoapp.png";
      logo.src = dados_das_configuracoes.logo;
      break;

    default:
      console.log("opção invalida");
      break;
  }
}
function estado_da_modal_salvar_configuracoes(texto) {
  if (texto === "flex") {
    caixa_modal_salvar_configuracoes.style.display = "flex";
  } else {
    caixa_modal_salvar_configuracoes.style.display = "none";
  }
}
function configuracoes_alteradas() {
  btnSalveconfig.innerHTML = "**Salvar";
  configuracoes_salvas = false;
}
function actulizar_display_das_listas(elemento, texto) {
  texto == "flex"
    ? (elemento.style.display = "flex")
    : (elemento.style.display = "none");
}
function ativar_ou_desativar_opcoes1(texto, elemento = filter_list_opcoes) {
  if (texto == "flex") {
    elemento.style.display = "flex";
  } else {
    elemento.style.display = "none";
  }
}
function apresentar_listas_no_display_do_filtro(texto) {
  switch (texto) {
    case "Todas":
      display_filter.innerHTML = ``;
      listas.forEach((lista, index) => {
        display_filter.innerHTML = `
        <div id="${index}listaNoFiltro" class="display_filter_itens" data-index=${index}>${lista.titulo_lista}</div>
      `+display_filter.innerHTML ;
      });
      verificar_lista_filtrada_a_ser_aberto();
      break;
    case "Listas":
      display_filter.innerHTML = ``;
      listas.forEach((lista, index) => {
        if (lista.categoria=="Lista de tarefa") {
          display_filter.innerHTML = `
          <div id="${index}listaNoFiltro" class="display_filter_itens" data-index=${index}>${lista.titulo_lista}</div>
        `+display_filter.innerHTML ;
        }
      });
      verificar_lista_filtrada_a_ser_aberto();
      break;
    case "Projetos":
      display_filter.innerHTML = ``;
      listas.forEach((lista, index) => {
        if (lista.categoria=="Projeto") {
          display_filter.innerHTML = `
          <div id="${index}listaNoFiltro" class="display_filter_itens" data-index=${index}>${lista.titulo_lista}</div>
        `+display_filter.innerHTML ;
        }
      });
      verificar_lista_filtrada_a_ser_aberto();
      break;

    default:
      console.log("opção invalida");
      break;
  }
}


function verificar_lista_filtrada_a_ser_aberto() {
  const listas_filtradas = [...document.querySelectorAll('.display_filter_itens')];
  listas_filtradas.forEach((item)=>{
    item.addEventListener("click",(e)=>{
      let index = e.target.getAttribute("data-index");
      if (condition) {
        
      } else {
        
      }
      abrir_lista_filtrada(index);
    });
  });
}

function abrir_lista_filtrada(index) {
  remover_lista_normal(menu_activo,"lista_filtrada");
  lista_normal();
  limpar_tarefas();
  lista_aberta = index;
  dados_salvo_no_arrey = true;
  tarefas = listas[lista_aberta].tarefas;
  copia_das_tarefas = JSON.parse(JSON.stringify(tarefas));
  detalhes_da_descricao = listas[lista_aberta].descricao;
  contador_tarefas = listas[lista_aberta].num_tarefas;
  seletor_categorias_normal.innerHTML = `${listas[lista_aberta].categoria}`;
  title_task_normal.innerHTML = `${listas[lista_aberta].titulo_lista}`;
  numero_de_salvamento = listas[lista_aberta].lisa_salva;
  modo_da_lista = "lista_existente";
  apresentar_tarefas();
  infolista("inicio");
  console.log("abriu o filtro " + index);
}

window.onload = () => {
  verificacao_modal_inicial();
};
