document.addEventListener("DOMContentLoaded", () => {
  //seleções gerais
  const main = document.getElementById("main");

  //aria das variaveis globais
  var nome_user = "";
  var ativar = false;
  var contador_listas = 0;
  var contador_tarefas = 0;
  var menu_activo = "paginaincial";
  var valor_entrada = "";
  var cor_sistema = "#c935f2";
  var tarefas = [];
  var listas = [];
  var ids= 1000;

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
  const filter_list = document.createElement("select");
  const item_filter_list1 = document.createElement("option");
  const item_filter_list2 = document.createElement("option");
  const item_filter_list3 = document.createElement("option");
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
   const btn_cor1 = document.createElement("button");
   const btn_cor2 = document.createElement("button");
   const btn_cor3 = document.createElement("button");
   const boxfont = document.createElement("div");
   const inputfont = document.createElement("input");
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
   const box_display_list_normal = document.createElement("div");
   const boxtitle_list_normal = document.createElement("div");
   const title_task_normal = document.createElement("h1");
   const boxcategorias_list_normal = document.createElement("div");
   const seletor_categorias_normal = document.createElement("select");
   const caterianormal1 = document.createElement("option");
   const caterianormal2 = document.createElement("option");
   const caterianormal3 = document.createElement("option");
   const iconCategoriaNormal = document.createElement("img");
   const linha_lista_normal = document.createElement("hr");
   const boxTasklistnormal = document.createElement("div");

  //janela principal
  function janela_principal() {

    //caixa principal do programa
    WindowMain.setAttribute("id", "windowsmain");
    main.appendChild(WindowMain);

    //aria de navegação esquerda
    secao_esquerda.setAttribute("id", "secao_esquerda");
    WindowMain.appendChild(secao_esquerda);

    //logo aria esquerda
    logo.setAttribute("src", "img/logo/logoapp.png");
    logo.setAttribute("class", "logoPq");
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
    item_menu_settings.addEventListener("click",abrir_configuracoes);
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
    item_menu_help.addEventListener("click",abrir_sobre_app);
    //logo ajuda
    logo_help.setAttribute("src", "img/icons/help.png");
    item_menu_help.innerHTML = "Sobre app";
    item_menu_help.appendChild(logo_help);

    //caixa do filtro
    boxfilter.setAttribute("id", "boxfilter");
    secao_esquerda.appendChild(boxfilter);
    //barra do filtro
    filter.setAttribute("id", "filter");
    boxfilter.appendChild(filter);
    //filtro
    filter_list.setAttribute("id", "filterlist");
    filter.appendChild(filter_list);
    //itens da lista de filtro
    item_filter_list1.innerHTML = "Todos";
    filter_list.appendChild(item_filter_list1);
    item_filter_list2.innerHTML = "To do list";
    filter_list.appendChild(item_filter_list2);
    item_filter_list3.innerHTML = "Projetos";
    filter_list.appendChild(item_filter_list3);
    //icone lista de filtros
    icon_list_filter.setAttribute("src", "img/icons/filterlist.png");
    filter.appendChild(icon_list_filter);

    //aria de apresentação do resultado do filtro
    display_filter.setAttribute("id", "displayfilter");
    boxfilter.appendChild(display_filter);
    //itens do display filter
    display_filter_item1.innerHTML = "começo";
    display_filter_item1.setAttribute("class", "display_filter_itens");
    display_filter.appendChild(display_filter_item1);
    display_filter_item2.innerHTML = "mercado";
    display_filter_item2.setAttribute("class", "display_filter_itens");
    display_filter.appendChild(display_filter_item2);
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
      <img src="img/logo/logoapp.png" alt="logo">
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
    document.getElementById("inputNome").addEventListener("keydown", (e) => { verificacao_input_modal_inicial_com_tecla(e.key)});

    //evento do botão da modal
    document.getElementById("btn_avancar").addEventListener("click",verificacao_modal_inicial_com_botao);
  }
  //janela modal tipo de lista
  function modal_tipo_lista() {

    //caixa principal da modal tipo de lista
    modaltypelist.setAttribute("id", "modaltypelist");
    WindowMain.appendChild(modaltypelist);

    //caixa typo de lista
    boxtypelist.setAttribute("id", "boxtypelist");
    modaltypelist.appendChild(boxtypelist);
    //btn_cancelar_modal
    btn_cancelar_modal.setAttribute("id", "btnCancel");
    btn_cancelar_modal.innerText = "X";
    btn_cancelar_modal.addEventListener("click", botao_cancelar_modal_tipo_de_lista);
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
    btnsmodallist_normal.addEventListener("click",abrir_lista_normal);
    btnsmodallist_normal.innerText = "Normal";
    boxmodallist.appendChild(btnsmodallist_normal);
    //btnsmodallist_tabela
    btnsmodallist_tabela.setAttribute("class", "btnsmodallist");
    btnsmodallist_tabela.innerText = "Tabela";
    boxmodallist.appendChild(btnsmodallist_tabela);
  }
  //janela pagina inicial
  function pagina_inicial() {
    
    //caixa principal da pagina inicial
    secao_direita_pagina_inicial.setAttribute("id","secao_direita_pagina_inicial");
    WindowMain.appendChild(secao_direita_pagina_inicial);

    // caixa do titulo e paragrafo
    boxtitle.setAttribute("id", "boxtitle");
    secao_direita_pagina_inicial.appendChild(boxtitle);
    titulo_direita.innerHTML = `&#x1F44B;Olá ${nome_user},`;
    boxtitle.appendChild(titulo_direita);
    info_title.innerHTML = "pronto/a para organizar as tarefas.";
    boxtitle.appendChild(info_title);

    //caixa da barra de ferramentas
    boxtoolbar.setAttribute("id", "boxtoolbar");
    secao_direita_pagina_inicial.appendChild(boxtoolbar);
    //botões e item da barra de ferramenta
    btn_new_list.setAttribute("id", "btn_new_list");
    btn_new_list.innerHTML = "Nova lista";
    btn_new_list.addEventListener("click",modal_tipo_lista);
    boxtoolbar.appendChild(btn_new_list);
    btn_delete_list.setAttribute("class", "btn_clean");
    btn_delete_list.innerHTML = "Deletar listas";
    boxtoolbar.appendChild(btn_delete_list);
    info_count_list.innerHTML = `${contador_listas} listas`;
    boxtoolbar.appendChild(info_count_list);
    btn_select.innerHTML = "Selecionar";
    btn_select.setAttribute("class", "btn_clean");
    btn_select.setAttribute("id", "btnslecionarlist");
    boxtoolbar.appendChild(btn_select);

    //caixa da barra de pesquisa
    boxsearch.setAttribute("id", "boxsearch");
    boxtoolbar.appendChild(boxsearch);
    //entrada da caixa de pesquisa
    input_search.setAttribute("id", "input_search");
    input_search.setAttribute("placeholder", "Pesquisa");
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
    boxaparenciarCor.innerHTML = "Mudar cor:";
    boxaparencia.appendChild(boxaparenciarCor);
    //botões das cores
    btn_cor1.setAttribute("class", "btnCorlors");
    btn_cor1.setAttribute("id", "btnCor1");
    boxaparenciarCor.appendChild(btn_cor1);
    btn_cor2.setAttribute("class", "btnCorlors");
    btn_cor2.setAttribute("id", "btnCor2");
    boxaparenciarCor.appendChild(btn_cor2);
    btn_cor3.setAttribute("class", "btnCorlors");
    btn_cor3.setAttribute("id", "btnCor3");
    boxaparenciarCor.appendChild(btn_cor3);

    //caixa de configurações de tamanho da font
    boxfont.setAttribute("id", "boxfont");
    boxfont.innerHTML = "Tamanho da font:";
    boxaparencia.appendChild(boxfont);
    //input tamanho da font
    inputfont.setAttribute("id", "inputfont");
    inputfont.setAttribute("type","number")
    boxfont.appendChild(inputfont);
    boxfont.innerHTML += "%";

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
    btnSalveconfig.innerHTML = "Salvar";
    btnsConfig.appendChild(btnSalveconfig);
    btnCancelconfig.innerHTML = "Cancelar";
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
      <h3>Redes:</h3>
      <p>
      LinkedIn: <a href="https://www.linkedin.com/in/alexandre-junqueiro/">Perfil do criador</a><br>
      GitHub: <a href="https://github.com/AleDev10/Manager-Tasks">Reportório do projeto</a><br>
      Instagram: <a href="https://www.instagram.com/alexandre_junqueiro/">Perfil do criador</a><br>
      Facebook: <a href="https://web.facebook.com/profile.php?id=100008443771463">Perfil do criador</a><br>
      </p>
    </div>
    <div id="dica">
      <p><i>"Burro não é aquele que começa com a má brincadeira, burro é aquele que continua com a má brincadeira."</i></p>
    </div>

  `;
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
    inputlistnormal.addEventListener("keydown",(e)=>{evento_do_input_lista_normal(e);});
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
    btn_add_list_normal.addEventListener("click",adicionar_tarefa);
    btn_add_list_normal.innerHTML = "Adicionar";
    box_btns_list_normal.appendChild(btn_add_list_normal);
    //botão cancelar
    btn_cancel_list_normal.setAttribute("class", "btnListNormal");
    btn_cancel_list_normal.addEventListener("click",cancelar_tarefa);
    btn_cancel_list_normal.innerHTML = "Cancelar";
    box_btns_list_normal.appendChild(btn_cancel_list_normal);
    //botão salvar
    btn_save_list_normal.setAttribute("class", "btnListNormal");
    btn_save_list_normal.addEventListener("click", salvar_lista);
    btn_save_list_normal.innerHTML = "Salvar";
    box_btns_list_normal.appendChild(btn_save_list_normal);

    //caixa de apresentação das tarefas
    box_display_list_normal.setAttribute("id", "boxdisplaylistnormal");
    secao_direita_list_normal.appendChild(box_display_list_normal);

    //caixa do titulo da tarefa e o filtor de caterorias
    boxtitle_list_normal.setAttribute("id", "boxtitle_list_normal");
    boxtitle_list_normal.addEventListener("click", function (e) {alterar_titulo(e)});
    box_display_list_normal.appendChild(boxtitle_list_normal);
    //titulo da tarefa
    title_task_normal.setAttribute("id", "titletasknormal");
    title_task_normal.innerHTML = "Titulo";
    boxtitle_list_normal.appendChild(title_task_normal);
    //caixa categorias
    boxcategorias_list_normal.setAttribute("class", "boxcategorias");
    boxtitle_list_normal.appendChild(boxcategorias_list_normal);
    //seletor categorias
    boxcategorias_list_normal.appendChild(seletor_categorias_normal);
    //itens da categorias
    caterianormal1.innerHTML = "Categorias";
    seletor_categorias_normal.appendChild(caterianormal1);
    caterianormal2.innerHTML = "Lista de tarefas";
    seletor_categorias_normal.appendChild(caterianormal2);
    caterianormal3.innerHTML = "Projetos";
    seletor_categorias_normal.appendChild(caterianormal3);
    //icone da caixa categorias
    iconCategoriaNormal.setAttribute("src", "img/icons/filter.png");
    boxcategorias_list_normal.appendChild(iconCategoriaNormal);

    //linha divisória
    box_display_list_normal.appendChild(linha_lista_normal);

    //caixa das tarefas
    boxTasklistnormal.setAttribute("class", "boxTasklistnormal");
  }

  /*aria de 
   funcionalidades*/

   //entrada de dados
   
   
   //processamento de dados
   function verificacao_modal_inicial() {
    if (ativar == false) {
      modal_inicio();
    } else {
      janela_principal();
      cor_menu_pagina_inicial();
      pagina_inicial();
      
    }
   }
   function abrir_pagina_inicial() {
    if (menu_activo == "configuracao") {
      remover_elemento_da_tela(WindowMain,secao_direita_config);
      menu_ativo_pagina_inicial();
    }
    if (menu_activo == "ajuda") {
      remover_elemento_da_tela(WindowMain,secao_direita_help);
      menu_ativo_pagina_inicial();
    }
    if (menu_activo == "lista_normal") {
      remover_elemento_da_tela(WindowMain,secao_direita_list_normal);
      menu_ativo_pagina_inicial();
    }
   }
   function abrir_configuracoes() {
    if (menu_activo == "paginaincial") {
      remover_elemento_da_tela(WindowMain,secao_direita_pagina_inicial);
      menu_ativo_configuracoes();
    }
    if (menu_activo == "ajuda") {
      remover_elemento_da_tela(WindowMain,secao_direita_help);
      menu_ativo_configuracoes();
    }
    if (menu_activo == "lista_normal") {
      remover_elemento_da_tela(WindowMain,secao_direita_list_normal);
      menu_ativo_configuracoes();
    }
   }
   function abrir_sobre_app() {
    if (menu_activo == "paginaincial") {
      remover_elemento_da_tela(WindowMain,secao_direita_pagina_inicial);
      menu_ativo_sobre_app();
    }
    if (menu_activo == "configuracao") {
      remover_elemento_da_tela(WindowMain,secao_direita_config);
      menu_ativo_sobre_app();
    }
    if (menu_activo == "lista_normal") {
      remover_elemento_da_tela(WindowMain,secao_direita_list_normal);
      menu_ativo_sobre_app();
    }
   }
   function abrir_lista_normal() {
      botao_cancelar_modal_tipo_de_lista();
      remover_elemento_da_tela(WindowMain,secao_direita_pagina_inicial);
      lista_normal();
      menu_activo = "lista_normal";
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
   function verificacao_input_modal_inicial_com_tecla(tecla) {
    if (tecla === "Enter") {
      //como os mesmos comandos usei a mesma função
      verificacao_modal_inicial_com_botao();
    }
   }
   function verificacao_modal_inicial_com_botao() {
    let nome = document.getElementById("inputNome").value.toLowerCase();
    if (nome == "") {
      erro_do_input_da_modal_inicial();
    } else {
      nome_user = nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();
      ativar = true;
      modalBox.style.display = "none";
      janela_principal();
      pagina_inicial();
      cor_menu_pagina_inicial();
      }
   }
   function evento_do_input_lista_normal(e) {
    if (e.key === "Enter") {
      adicionar_tarefa();
    } else if (e.key === "Escape") {
      cancelar_tarefa();
    }
   }
   function botao_cancelar_modal_tipo_de_lista() {
    modaltypelist.remove(boxtypelist);
   }
   function deletar_lista() {
    tarefas.splice(0, tarefas.length);
    contador_tarefas = 0;
    remover_elemento_da_tela(WindowMain,secao_direita_list_normal);
    janela_principal();
    lista_normal();
  }
  function salvar_lista() {
    listas.push({
      titulo_lista: title_task_normal.textContent,
      categoria: "listadetarefa",
      num_tarefas: contador_tarefas,
      tarefas: tarefas,
      id: ids,
    });
    contador_listas++;
    ids++;
    console.log(listas);
  }
   


   //saida de dados
   function cor_menu_pagina_inicial() {
      item_menu_settings.style.backgroundColor = "";
      logo_settings.style.backgroundColor = "";
      item_menu_settings.style.color = "";
      item_menu_help.style.backgroundColor = "";
      logo_help.style.backgroundColor = "";
      item_menu_help.style.color = "";
      item_menu_home.style.backgroundColor = `${cor_sistema}`;
      logo_home.style.backgroundColor = "#ffff";
      item_menu_home.style.color = "#ffff";
   }
   function cor_menu_configuracoes() {
      item_menu_settings.style.backgroundColor = `${cor_sistema}`;
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
      item_menu_help.style.backgroundColor = `${cor_sistema}`;
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
    listas.forEach((e) => {
      //lista
      list1.setAttribute("class", "list");
      display_list.appendChild(list1);
      //titulo da lista
      title_list1.setAttribute("class", "title_list");
      title_list1.innerHTML = `${e.titulo_lista}`;
      list1.appendChild(title_list1);
    });
   }
   function remover_elemento_da_tela(pai,filho) {
    pai.removeChild(filho);
   }
   function cancelar_tarefa() {
    inputlistnormal.value = "";
    inputlistnormal.focus();
  }
   
   
  
  
  function alterar_titulo(e) {
    if (e.target.id === "titletasknormal") {
      var editar = document.createElement("input");
      editar.setAttribute("class", "editar_campo");
      editar.value = title_task_normal.textContent;
      title_task_normal.replaceWith(editar);
      editar.focus();
      editar.addEventListener("blur", function () {
        title_task_normal.textContent = editar.value;
        editar.replaceWith(title_task_normal);
        inputlistnormal.focus();
      });
      editar.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
          title_task_normal.textContent = editar.value;
          editar.replaceWith(title_task_normal);
          inputlistnormal.focus();
        }
      });
    }
  }
  function adicionar_tarefa() {
    if (inputlistnormal.value == "") {
      inputlistnormal.placeholder = "Digite uma tarefa antes de adicionar";
      inputlistnormal.focus();
    } else {
      contador_tarefas++;
      count_tasks_normal_list.innerHTML = `${contador_tarefas} tarefas`;
      tarefas.push({
        id: contador_tarefas,
        tarefa: inputlistnormal.value,
        descricao: "Discrição...",
        estatos: false,
      });
      if (contador_tarefas === 1) {
        for (let index = 0; index < tarefas.length; index++) {
          apresentar_tarefas(index);
        }
      } else {
        for (
          let index = contador_tarefas - 1;
          index < tarefas.length;
          index++
        ) {
          apresentar_tarefas(index);
        }
      }
      inputlistnormal.value = "";
      inputlistnormal.placeholder = "Digite uma tarefa";
      inputlistnormal.focus();
      console.log(tarefas);
    }
  }
  function apresentar_tarefas(i) {
    box_display_list_normal.appendChild(boxTasklistnormal);

    // caixa de uma tarefa
    const boxTask = document.createElement("div");
    boxTask.setAttribute("class", "boxTask");
    boxTasklistnormal.appendChild(boxTask);

    const boxTask1 = document.createElement("div");
    boxTask1.setAttribute("class", "boxTask1");
    boxTask.appendChild(boxTask1);
    const boxTask2 = document.createElement("div");
    boxTask2.setAttribute("class", "boxTask2");
    boxTask.appendChild(boxTask2);

    //itens da tarefa
    const iconchecktask = document.createElement("img");
    iconchecktask.setAttribute("src", "img/icons/boxchak.png");
    iconchecktask.setAttribute("class", "checkbox");
    const iconchecktask2 = document.createElement("img");
    iconchecktask2.setAttribute("src", "img/icons/boxchek-verify.png");
    iconchecktask2.setAttribute("class", "checkbox");
    iconchecktask.addEventListener("click", () => {
      console.log(iconchecktask2);
      infoTask.classList.add("concluido");
      iconchecktask.replaceWith(iconchecktask2);
      iconchecktask2.addEventListener("click", () => {
        infoTask.classList.remove("concluido");
        iconchecktask2.replaceWith(iconchecktask);
      });
    });
    boxTask1.appendChild(iconchecktask);
    const infoTask = document.createElement("span");
    infoTask.setAttribute("class", "infoTask");
    infoTask.innerHTML = `${tarefas[i].tarefa}`;
    boxTask1.appendChild(infoTask);

    const iconedittask = document.createElement("img");
    iconedittask.setAttribute("src", "img/icons/edite.png");
    iconedittask.setAttribute("class", `${i}`);
    const confirmar_edicao = document.createElement("img");
    confirmar_edicao.setAttribute("src", "img/icons/dobleverificado.png");
    const cancelar_edicao = document.createElement("img");
    cancelar_edicao.setAttribute("src", "img/icons/cancel.png");
    iconedittask.addEventListener("click", (e) => {
      let entrada_edicao = document.createElement("input");
      entrada_edicao.setAttribute("class", "entrada_edicao");
      entrada_edicao.value = tarefas[i].tarefa;
      infoTask.replaceWith(entrada_edicao);
      iconedittask.replaceWith(confirmar_edicao);
      icondeletetask.replaceWith(cancelar_edicao);
      entrada_edicao.focus();
      //bug grande tenho que reparar
      confirmar_edicao.addEventListener("click", () => {
        console.log(entrada_edicao.value);
        if (entrada_edicao.value == "") {
          entrada_edicao.style.outlineColor = "#f2355e";
          iconedittask.replaceWith(confirmar_edicao);
          icondeletetask.replaceWith(cancelar_edicao);
          entrada_edicao.focus();
        } else {
          infoTask.textContent = entrada_edicao.value;
          tarefas[i].tarefa = entrada_edicao.value;
          entrada_edicao.replaceWith(infoTask);
          confirmar_edicao.replaceWith(iconedittask);
          cancelar_edicao.replaceWith(icondeletetask);
        }
      });
      cancelar_edicao.addEventListener("click", () => {
        entrada_edicao.replaceWith(infoTask);
        confirmar_edicao.replaceWith(iconedittask);
        cancelar_edicao.replaceWith(icondeletetask);
      });
      entrada_edicao.addEventListener("blur", () => {
        if (entrada_edicao.value == "") {
          entrada_edicao.style.outlineColor = "#f2355e";
          entrada_edicao.focus();
        } else {
          infoTask.textContent = entrada_edicao.value;
          tarefas[i].tarefa = entrada_edicao.value;
          entrada_edicao.replaceWith(infoTask);
          confirmar_edicao.replaceWith(iconedittask);
          cancelar_edicao.replaceWith(icondeletetask);
        }
      });
      entrada_edicao.addEventListener("keydown", (e) => {
        if (e.key == "Enter") {
          if (entrada_edicao.value == "") {
            entrada_edicao.style.outlineColor = "#f2355e";
            entrada_edicao.focus();
          } else {
            infoTask.textContent = entrada_edicao.value;
            tarefas[i].tarefa = entrada_edicao.value;
            entrada_edicao.replaceWith(infoTask);
            confirmar_edicao.replaceWith(iconedittask);
            cancelar_edicao.replaceWith(icondeletetask);
          }
        }
      });
    });
    boxTask2.appendChild(iconedittask);
    const icondeletetask = document.createElement("img");
    icondeletetask.setAttribute("src", "img/icons/delete.png");
    icondeletetask.setAttribute("class", `${i}`);
    icondeletetask.addEventListener("click", (e) => {
      console.log(e.target.classList.value);
      tarefas.splice(e.target.classList.value, 1);
      contador_tarefas -= 1;
      count_tasks_normal_list.innerHTML = `${contador_tarefas} tarefas`;
      boxTasklistnormal.innerHTML = "<div></div>";
      if (contador_tarefas === 1) {
        for (let index = 0; index < tarefas.length; index++) {
          apresentar_tarefas(index);
        }
      } else {
        tarefas.forEach((valor, index) => {
          apresentar_tarefas(index);
        });
      }
      inputlistnormal.focus();
    });
    boxTask2.appendChild(icondeletetask);

    //aria de descrição da tarefa
    const descricaoTask = document.createElement("div");
    descricaoTask.setAttribute("class", "descricaoTask");
    boxTasklistnormal.appendChild(descricaoTask);
    //itens da descrição
    const txtDescricao = document.createElement("p");
    txtDescricao.setAttribute("class", "txtDescricao");
    txtDescricao.setAttribute("contenteditable", "true");
    txtDescricao.innerHTML = `${tarefas[i].descricao}`;
    txtDescricao.addEventListener("click", () => {
      if (txtDescricao.innerHTML == "Discrição...") {
        txtDescricao.innerHTML = "";
      } else {
        txtDescricao.innerHTML = `${tarefas[i].descricao}`;
      }
    });
    txtDescricao.addEventListener("blur", () => {
      tarefas[i].descricao = txtDescricao.innerText;
    });
    descricaoTask.appendChild(txtDescricao);
  }

  
  verificacao_modal_inicial();
});
