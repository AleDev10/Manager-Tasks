document.addEventListener("DOMContentLoaded", () => {
  //seleções gerais
  const main = document.getElementById("main");

  //aria das variaveis globais
  var nome_user;
  var ativar=false;
  var contador_listas=0;
  var menuconf=false;
  var menuhelp=false;
  var menuinicial=true;
  /* var estado_modal1=JSON.parse(localStorage.getItem("estado_modal1")) || [{
    user:"",
    states: true,
  }]; */


  /* criação da janela main */
  const WindowMain = document.createElement("div");
  WindowMain.setAttribute("id", "windowsmain");
  main.appendChild(WindowMain);

  /* aria esquerda de todas as janelas */
  const secao_esquerda = document.createElement("div");
  secao_esquerda.setAttribute("id", "secao_esquerda");
  WindowMain.appendChild(secao_esquerda);

  //logo aria esquerda
  const logo = document.createElement("img");
  logo.setAttribute("src", "img/logo/logoapp.png");
  logo.setAttribute("class", "logoPq");
  secao_esquerda.appendChild(logo);

  //caixa do menu
  const boxmenu = document.createElement("div");
  boxmenu.setAttribute("id", "boxmenu");
  secao_esquerda.appendChild(boxmenu);

  //botao home
  const item_menu_home = document.createElement("button");
  boxmenu.appendChild(item_menu_home);
  item_menu_home.setAttribute("class", "boxmenuitems");
  item_menu_home.setAttribute("id", "paginaincial");
  item_menu_home.addEventListener("click", (e) => {
    if (e.target.id == "paginaincial" && menuinicial==false){
      WindowMain.removeChild(secao_direita_config);
      help();
      WindowMain.removeChild(secao_direita_help);
      
      pagina_inicial();
      menuinicial=true;
      menuconf=false;
      menuhelp=false;
    }
  });
  const logo_home = document.createElement("img");
  logo_home.setAttribute("src", "img/icons/home.png");
  item_menu_home.innerHTML = "Pagina inicial";
  item_menu_home.appendChild(logo_home);

  //botao settings
  const item_menu_settings = document.createElement("button");
  boxmenu.appendChild(item_menu_settings);
  item_menu_settings.addEventListener("click",(e)=>{
    if (e.target.id == "configuracao" && menuconf==false){
      WindowMain.removeChild(secao_direita_pagina_inicial);
      help();
      WindowMain.removeChild(secao_direita_help);
      setup();
      menuconf=true;
      menuinicial=false;
      menuhelp=false;
    }
  });
  item_menu_settings.setAttribute("class", "boxmenuitems");
  item_menu_settings.setAttribute("id", "configuracao");
  const logo_settings = document.createElement("img");
  logo_settings.setAttribute("src", "img/icons/settings.png");
  item_menu_settings.innerHTML = "Configurações";
  item_menu_settings.appendChild(logo_settings);

  //botao help
  const item_menu_help = document.createElement("button");
  boxmenu.appendChild(item_menu_help);
  item_menu_help.setAttribute("class", "boxmenuitems");
  item_menu_help.setAttribute("id", "ajuda");
  item_menu_help.addEventListener("click",(e)=>{
    if(e.target.id=="ajuda" && menuhelp==false){
      WindowMain.removeChild(secao_direita_pagina_inicial);
      setup();
      WindowMain.removeChild(secao_direita_config);
      help();
      menuhelp=true;
      menuconf=false;
      menuinicial=false;
    }
  });
  const logo_help = document.createElement("img");
  logo_help.setAttribute("src", "img/icons/help.png");
  item_menu_help.innerHTML = "Sobre app";
  item_menu_help.appendChild(logo_help);

  //caixa do filtro
  const boxfilter = document.createElement("div");
  boxfilter.setAttribute("id", "boxfilter");
  secao_esquerda.appendChild(boxfilter);

  //barra do filtro
  const filter = document.createElement("div");
  filter.setAttribute("id", "filter");
  boxfilter.appendChild(filter);

  //filtro
  const filter_list = document.createElement("select");
  filter_list.setAttribute("id", "filterlist");
  filter.appendChild(filter_list);

  //itens da lista de filtro
  const item_filter_list1 = document.createElement("option");
  item_filter_list1.innerHTML = "Todos";
  filter_list.appendChild(item_filter_list1);
  const item_filter_list2 = document.createElement("option");
  item_filter_list2.innerHTML = "To do list";
  filter_list.appendChild(item_filter_list2);
  const item_filter_list3 = document.createElement("option");
  item_filter_list3.innerHTML = "Projetos";
  filter_list.appendChild(item_filter_list3);

  //icone lista de filtros
  const icon_list_filter = document.createElement("img");
  icon_list_filter.setAttribute("src", "img/icons/filterlist.png");
  filter.appendChild(icon_list_filter);

  //aria de apresentação do resultado do filtro
  const display_filter = document.createElement("div");
  display_filter.setAttribute("id", "displayfilter");
  boxfilter.appendChild(display_filter);

  //itens do display filter
  const display_filter_item1 = document.createElement("button");
  display_filter_item1.innerHTML = "começo";
  display_filter_item1.setAttribute("class", "display_filter_itens");
  display_filter.appendChild(display_filter_item1);
  const display_filter_item2 = document.createElement("button");
  display_filter_item2.innerHTML = "mercado";
  display_filter_item2.setAttribute("class", "display_filter_itens");
  display_filter.appendChild(display_filter_item2);


  //criação da janela modal tipo de lista
  function modal_nova_lista(){
    
      const modaltypelist=document.createElement("div");
      modaltypelist.setAttribute("id", "modaltypelist");
      WindowMain.appendChild(modaltypelist);
      const boxtypelist=document.createElement("div");
      boxtypelist.setAttribute("id","boxtypelist");
      modaltypelist.appendChild(boxtypelist);
      const btn_cancelar_modal=document.createElement("button");
      btn_cancelar_modal.setAttribute("id","btnCancel");
      btn_cancelar_modal.innerText="X";
      btn_cancelar_modal.addEventListener("click", ()=>{
        modaltypelist.remove(boxtypelist);
      });
      boxtypelist.appendChild(btn_cancelar_modal);
      const imgmodallist=document.createElement("div");
      imgmodallist.setAttribute("id","imgmodallist");
      imgmodallist.innerHTML=`<img src="img/logo/logoapp.png" alt="logo">`;
      boxtypelist.appendChild(imgmodallist);
      const modallistinfo = document.createElement("div");
      modallistinfo.setAttribute("id","modallistinfo");
      modallistinfo.innerHTML=`
        <h1>Tipo de lista</h1>
        <p>Escolha o tipo de lista<br>que deseja criar</p>
      `;
      boxtypelist.appendChild(modallistinfo);
      const boxmodallist=document.createElement("div");
      boxmodallist.setAttribute("id","boxmodallist");
      boxtypelist.appendChild(boxmodallist);
      const btnsmodallist_normal=document.createElement("button");
      btnsmodallist_normal.setAttribute("class","btnsmodallist");
      btnsmodallist_normal.innerText="Normal";
      boxmodallist.appendChild(btnsmodallist_normal);
      const btnsmodallist_tabela=document.createElement("button");
      btnsmodallist_tabela.setAttribute("class","btnsmodallist");
      btnsmodallist_tabela.innerText="Tabela";
      boxmodallist.appendChild(btnsmodallist_tabela);
      /*modaltypelist.innerHTML = `
        <div id="boxtypelist">
          <button id="btnCancel">X</button>
          <div id="imgmodallist"><img src="img/logo/logoapp.png" alt="logo"></div>
          <div id="modallistinfo">
            <h1>Tipo de lista</h1>
            <p>Escolha o tipo de lista<br>que deseja criar</p>
          </div>
          <div id="boxmodallist">
            <button class="btnsmodallist">Normal</button>
            <button class="btnsmodallist">Tabela</button>
          </div>
        </div>
  
      `;*/
    }
  //criação da janela pagina inicial
  function pagina_inicial(){
      /* aria direita da pagina inicial */
    const secao_direita_pagina_inicial = document.createElement("div");
    secao_direita_pagina_inicial.setAttribute("id","secao_direita_pagina_inicial");
    WindowMain.appendChild(secao_direita_pagina_inicial);
  
    // caixa do titulo e paragrafo
    const boxtitle = document.createElement("div");
    boxtitle.setAttribute("id", "boxtitle");
    secao_direita_pagina_inicial.appendChild(boxtitle);
    const titulo_direita = document.createElement("h1");
    titulo_direita.innerHTML = `&#x1F44B;Olá ${nome_user},`;
    boxtitle.appendChild(titulo_direita);
    const info_title = document.createElement("p");
    info_title.innerHTML = "pronto para organizar as tarefas.";
    boxtitle.appendChild(info_title);
  
    //caixa da barra de ferramentas da aria direita
    const boxtoolbar = document.createElement("div");
    boxtoolbar.setAttribute("id", "boxtoolbar");
    secao_direita_pagina_inicial.appendChild(boxtoolbar);
  
    //botões e item da barra de ferramenta
    const btn_new_list = document.createElement("button");
    btn_new_list.setAttribute("id", "btn_new_list");
    btn_new_list.innerHTML = "Nova lista";
    btn_new_list.addEventListener("click", () => {
      modal_nova_lista();
    });
    boxtoolbar.appendChild(btn_new_list);
    const btn_delete_list = document.createElement("button");
    btn_delete_list.setAttribute("class", "btn_clean");
    btn_delete_list.innerHTML = "Deletar listas";
    boxtoolbar.appendChild(btn_delete_list);
    const info_count_list = document.createElement("p");
    info_count_list.innerHTML = `${contador_listas} listas`;
    boxtoolbar.appendChild(info_count_list);
    const btn_select = document.createElement("button");
    btn_select.innerHTML = "Selecionar";
    btn_select.setAttribute("class", "btn_clean");
    btn_select.setAttribute("id", "btnslecionarlist");
    boxtoolbar.appendChild(btn_select);
  
    //caixa da barra de pesquisa
    const boxsearch = document.createElement("div");
    boxsearch.setAttribute("id", "boxsearch");
    boxtoolbar.appendChild(boxsearch);
  
    //entrada da caixa de pesquisa
    const input_search = document.createElement("input");
    input_search.setAttribute("id", "input_search");
    input_search.setAttribute("placeholder", "Pesquisa");
    boxsearch.appendChild(input_search);
  
    //icon da barra de pesquisa
    const icon_search = document.createElement("img");
    icon_search.setAttribute("src", "img/icons/search.png");
    boxsearch.appendChild(icon_search);
  
    //display das listas na pagina inicial aria direita
    const display_list = document.createElement("div");
    display_list.setAttribute("id", "display_list");
    secao_direita_pagina_inicial.appendChild(display_list);
  
    //listas a serem mostradas no display da aria direita
    const list1 = document.createElement("div");
    list1.setAttribute("class", "list");
    display_list.appendChild(list1);
    //titulo da lista
    const title_list1 = document.createElement("h4");
    title_list1.setAttribute("class", "title_list");
    title_list1.innerHTML = "Começo";
    list1.appendChild(title_list1);
  }
  //criação da janela modal inicial
  function modal_inicio(){
    const modalBox = document.createElement("div");
  modalBox.setAttribute("id", "modalbox");
  WindowMain.appendChild(modalBox);
  const box1=document.createElement("div");
  box1.setAttribute("class", "box1");
  modalBox.appendChild(box1);
  box1.innerHTML = `<div class="boximg">
                 <img src="img/logo/logoapp.png" alt="logo">
            </div> 
            <div class="boxinfo">
                <p>Seja Bem Vindo,<br>o <b>Manager Tasks</b> é um<br>gerenciador de tarefas simples e<br>fácil de usar, projetado para te ajudar na tua<br>produtividade, tenha um bom proveito e<br> muito obrigado por usar o nosso app.</p>
            </div>
            <input type="text" id="inputNome"  placeholder="Primeiro nome" autofocus>   
            <div class="boxinfo">
                <p>Caso queiras saber mais sobre o app<br>visite a secção "Sobre app".</p>
            </div>`;
    const buttonmodal= document.createElement("button");
    box1.appendChild(buttonmodal);
    buttonmodal.innerHTML = "Avançar";
    buttonmodal.addEventListener("click",()=> {
      let nome=document.getElementById("inputNome").value;
      if(nome==""){
        document.getElementById("inputNome").placeholder="Erro";
      }else{
        /* estado_modal1={
          user: nome,
          states: true,
        };
        localStorage.setItem("estado_modal1", JSON.stringify(estado_modal1)); */
        nome_user=nome;
        ativar=true;
        modalBox.style.display="none";
        pagina_inicial();
      }
    });
  }
  //criação da janela configurações
  function setup() {

  //aria direita da janela configurações
  const secao_direita_config = document.createElement("div");
  secao_direita_config.setAttribute("id", "secao_direita_config");
  secao_direita_config.setAttribute("class", "secao_direita");
  WindowMain.appendChild(secao_direita_config);

  //titulo da aria configurações
  const title_config = document.createElement("h1");
  title_config.setAttribute("id", "title_config");
  title_config.innerHTML = "CONFIGURAÇÕES";
  secao_direita_config.appendChild(title_config);

  //caixa de apresentação das configurações
  const BoxConfig = document.createElement("div");
  BoxConfig.setAttribute("id", "boxconfig");
  secao_direita_config.appendChild(BoxConfig);

  //itens da caixa de apresentação configurações

  //caixa de configurações de aparência
  const boxaparencia = document.createElement("div");
  boxaparencia.setAttribute("id", "boxaparencia");
  BoxConfig.appendChild(boxaparencia);
  //titulo
  const tituloaparencia = document.createElement("h3");
  tituloaparencia.innerHTML = "Aparência";
  boxaparencia.appendChild(tituloaparencia);
  //caixa aparência mudar cor
  const boxaparenciarCor = document.createElement("div");
  boxaparenciarCor.setAttribute("id", "boxaparenciacor");
  boxaparenciarCor.innerHTML = "Mudar cor:";
  boxaparencia.appendChild(boxaparenciarCor);
  //botões das cores
  const btn_cor1 = document.createElement("button");
  btn_cor1.setAttribute("class", "btnCorlors");
  btn_cor1.setAttribute("id", "btnCor1");
  boxaparenciarCor.appendChild(btn_cor1);
  const btn_cor2 = document.createElement("button");
  btn_cor2.setAttribute("class", "btnCorlors");
  btn_cor2.setAttribute("id", "btnCor2");
  boxaparenciarCor.appendChild(btn_cor2);
  const btn_cor3 = document.createElement("button");
  btn_cor3.setAttribute("class", "btnCorlors");
  btn_cor3.setAttribute("id", "btnCor3");
  boxaparenciarCor.appendChild(btn_cor3);

  //caixa de configurações de tamanho da font
  const boxfont = document.createElement("div");
  boxfont.setAttribute("id", "boxfont");
  boxfont.innerHTML = "Tamanho da font:";
  boxaparencia.appendChild(boxfont);
  //input tamanho da font
  const inputfont = document.createElement("input");
  inputfont.setAttribute("id", "inputfont");
  boxfont.appendChild(inputfont);
  boxfont.innerHTML += "%";

  //caixa de configurações armazenamento
  const boxstorage=document.createElement("div");
  boxstorage.setAttribute("id", "boxstorage");
  BoxConfig.appendChild(boxstorage);
  //titulo
  const titleStorage=document.createElement("h3");
  titleStorage.innerHTML="Armazenamento";
  boxstorage.appendChild(titleStorage);
  //botão apagar todo armazenamento
  const btn_delAll_storage=document.createElement("button");
  btn_delAll_storage.innerHTML="Apagar todo";
  boxstorage.appendChild(btn_delAll_storage);

  // caixa dis botões cancelar e salvar da configurações
  const btnsConfig=document.createElement("div");
  btnsConfig.setAttribute("id", "btnsconfig");
  BoxConfig.appendChild(btnsConfig);
  //botões
  const btnSalveconfig = document.createElement("button");
  btnSalveconfig.innerHTML="Salvar";
  btnsConfig.appendChild(btnSalveconfig);
  const btnCancelconfig = document.createElement("button");
  btnCancelconfig.innerHTML="Cancelar";
  btnsConfig.appendChild( btnCancelconfig);
  }
  
  //criação da janela sobre app
  function help() {

  //aria direita da janela sobre app
  const secao_direita_help = document.createElement("div");
  secao_direita_help.setAttribute("id", "secao_direita_help");
  secao_direita_help.setAttribute("class", "secao_direita");
  WindowMain.appendChild(secao_direita_help);

  //titulo da aria configurações
  const title_help = document.createElement("h1");
  title_help.setAttribute("id", "title_help");
  title_help.innerHTML = "SOBRE APP";
  secao_direita_help.appendChild(title_help);

  //caixa de apresentação das configurações
  const Boxhelp = document.createElement("div");
  Boxhelp.setAttribute("id", "boxhelp");
  secao_direita_help.appendChild(Boxhelp);

  //itens da caixa de apresentação help
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
//resto da aplicação
  function more(){  
    /* criação da janela 
    tipo de lista normal */

    //aria direita da pagina lista normal
    const secao_direita_list_normal=document.createElement("div");
    secao_direita_list_normal.setAttribute("id", "secao_direita_list_normal");
    secao_direita_list_normal.setAttribute("class", "secao_direita");
    WindowMain.appendChild(secao_direita_list_normal);

    //caixa de entrada de entrada da lista normal
    const boxlistinputnormal=document.createElement("div");
    boxlistinputnormal.setAttribute("id","boxlistinputnormal");
    secao_direita_list_normal.appendChild(boxlistinputnormal);

    //itens da caixa de entrada da lista normal
    const inputlistnormal = document.createElement("input");
    inputlistnormal.setAttribute("id","inputlistnormal");
    inputlistnormal.setAttribute("placeholder","Digite uma tarefa");
    boxlistinputnormal.appendChild(inputlistnormal);
    const btn_delet_tasks= document.createElement("button");
    btn_delet_tasks.setAttribute("id","btn_delet_tasks");
    btn_delet_tasks.setAttribute("class","btn_clean");
    btn_delet_tasks.innerHTML="Deletar tarefas";
    boxlistinputnormal.appendChild(btn_delet_tasks);
    const count_tasks_normal_list=document.createElement("p");
    count_tasks_normal_list.setAttribute("id","count_tasks_normal_list");
    /* count_tasks_normal_list.setAttribute("class",""); */
    count_tasks_normal_list.innerHTML="2 tarefas";
    boxlistinputnormal.appendChild(count_tasks_normal_list);

    //caixa dos botões de ações da list normal
    const box_btns_list_normal=document.createElement("div");
    box_btns_list_normal.setAttribute("id","box_btns_list_normal");
    secao_direita_list_normal.appendChild( box_btns_list_normal);

    //itens da caixa dos botões de ações da lista normal

    //botão adicionar
    const btn_add_list_normal=document.createElement("button");
    btn_add_list_normal.setAttribute("class","btnListNormal");
    btn_add_list_normal.innerHTML="Adicionar";
    box_btns_list_normal.appendChild( btn_add_list_normal );
    //botão cancelar
    const btn_cancel_list_normal=document.createElement("button");
    btn_cancel_list_normal.setAttribute("class","btnListNormal");
    btn_cancel_list_normal.innerHTML="Cancelar";
    box_btns_list_normal.appendChild( btn_cancel_list_normal );
    //botão salvar
    const btn_save_list_normal=document.createElement("button");
    btn_save_list_normal.setAttribute("class","btnListNormal");
    btn_save_list_normal.innerHTML="Salvar";
    box_btns_list_normal.appendChild( btn_save_list_normal );

    //caixa de apresentação das lista de tarefas normal
    const box_display_list_normal=document.createElement("div");
    box_display_list_normal.setAttribute("id","boxdisplaylistnormal");
    secao_direita_list_normal.appendChild(box_display_list_normal);

    //itens da caixa de apresentação das lista de tarefas normal
    
    //caixa do titulo da tarefa e o filtor de caterorias
    const boxtitle_list_normal=document.createElement("div");
    boxtitle_list_normal.setAttribute("id","boxtitle_list_normal");
    box_display_list_normal.appendChild(boxtitle_list_normal);
    //titulo da tarefa
    const title_task_normal=document.createElement("h1");
    title_task_normal.setAttribute("id","titletasknormal");
    title_task_normal.innerHTML="Titulo";
    boxtitle_list_normal.appendChild(title_task_normal);
    //caixa categorias
    const boxcategorias_list_normal=document.createElement("div");
    boxcategorias_list_normal.setAttribute("class","boxcategorias");
    boxtitle_list_normal.appendChild(boxcategorias_list_normal);
    //seletor categorias
    const seletor_categorias_normal=document.createElement("select");
    boxcategorias_list_normal.appendChild(seletor_categorias_normal);
    //itens da categorias
    const caterianormal1=document.createElement("option");
    caterianormal1.innerHTML="Categorias";
    seletor_categorias_normal.appendChild(caterianormal1);
    const caterianormal2=document.createElement("option");
    caterianormal2.innerHTML="Lista de tarefas";
    seletor_categorias_normal.appendChild(caterianormal2);
    const caterianormal3=document.createElement("option");
    caterianormal3.innerHTML="Projetos";
    seletor_categorias_normal.appendChild(caterianormal3);
    //icone da caixa categorias
    const iconCategoriaNormal=document.createElement("img");
    iconCategoriaNormal.setAttribute("src","img/icons/filter.png");
    boxcategorias_list_normal.appendChild(iconCategoriaNormal);

    //linha divisória
    const linha_lista_normal=document.createElement("hr");
    box_display_list_normal.appendChild(linha_lista_normal);

    //caixa de uma tarefa
    const boxTasklistnormal=document.createElement("div");
    boxTasklistnormal.setAttribute("class","boxTasklistnormal");
    box_display_list_normal.appendChild(boxTasklistnormal);

    // caixa de uma tarefa
    const boxTask=document.createElement("div");
    boxTask.setAttribute("class","boxTask");
    boxTasklistnormal.appendChild(boxTask);

    const boxTask1=document.createElement("div");
    boxTask1.setAttribute("class","boxTask1");
    boxTask.appendChild(boxTask1);
    const boxTask2=document.createElement("div");
    boxTask2.setAttribute("class","boxTask2");
    boxTask.appendChild(boxTask2);
    
    //itens da tarefa
    const iconchecktask = document.createElement("img");
    iconchecktask.setAttribute("src","img/icons/boxchak.png");
    iconchecktask.setAttribute("class","checkbox");
    boxTask1.appendChild(iconchecktask);
    const infoTask = document.createElement("span");
    infoTask.setAttribute("class","infoTask");
    infoTask.innerHTML="Começo de todo";
    boxTask1.appendChild(infoTask);

    const iconedittask = document.createElement("img");
    iconedittask.setAttribute("src","img/icons/edite.png");
    boxTask2.appendChild(iconedittask);
    const icondeletetask = document.createElement("img");
    icondeletetask.setAttribute("src","img/icons/delete.png");
    boxTask2.appendChild(icondeletetask);


    //aria de descrição da tarefa
    const descricaoTask=document.createElement("div");
    descricaoTask.setAttribute("class","descricaoTask");
    boxTasklistnormal.appendChild(descricaoTask);
    //itens da descrição
    const txtDescricao=document.createElement("textarea");
    txtDescricao.setAttribute("class","txtDescricao");
    txtDescricao.innerHTML="Descrição...";
    descricaoTask.appendChild(txtDescricao);

   }

  if(ativar==false){
    modal_inicio();
  }else{
    pagina_inicial();
  }
});
