document.addEventListener("DOMContentLoaded",()=>{
    //seleções gerais
    const main = document.getElementById("main");
    
    //criação da janela modal inicial
    const modalBox = document.createElement("div");
    modalBox.setAttribute("id", "modalbox");
    main.appendChild(modalBox);
    modalBox.innerHTML = `
        <div class="box1">
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
            <button >Avançar</button>
        </div>
    `;

    /* declarações de funções */
    
    
    /* criação da janela pagina inicial */
    const pagina_inicial= document.createElement("div");
    pagina_inicial.setAttribute("id", "pagina_inicial");
    main.appendChild(pagina_inicial);

    /* aria esquerda da pagina inicial */
    const secao_esquerda= document.createElement("div");
    secao_esquerda.setAttribute("id","secao_esquerda");
    pagina_inicial.appendChild(secao_esquerda);

    //logo aria esquerda
    const logo= document.createElement("img");
    logo.setAttribute("src", "img/logo/logoapp.png");
    logo.setAttribute("class", "logoPq");
    secao_esquerda.appendChild(logo);

    //caixa do menu
    const boxmenu= document.createElement("div");
    boxmenu.setAttribute("id","boxmenu");
    secao_esquerda.appendChild(boxmenu);

    //botao home
    const item_menu_home= document.createElement("button");
    boxmenu.appendChild(item_menu_home);
    item_menu_home.setAttribute("class","boxmenuitems");
    const logo_home= document.createElement("img");
    logo_home.setAttribute("src","img/icons/home.png");
    item_menu_home.innerHTML="Pagina inicial";
    item_menu_home.appendChild(logo_home);

    //botao settings
    const item_menu_settings= document.createElement("button");
    boxmenu.appendChild(item_menu_settings);
    item_menu_settings.setAttribute("class","boxmenuitems");
    const logo_settings= document.createElement("img");
    logo_settings.setAttribute("src","img/icons/settings.png");
    item_menu_settings.innerHTML="Configurações";
    item_menu_settings.appendChild(logo_settings);

    //botao help
    const item_menu_help= document.createElement("button");
    boxmenu.appendChild(item_menu_help);
    item_menu_help.setAttribute("class","boxmenuitems");
    const logo_help= document.createElement("img");
    logo_help.setAttribute("src","img/icons/help.png");
    item_menu_help.innerHTML="Sobre app";
    item_menu_help.appendChild(logo_help);

    //caixa do filtro
    const boxfilter = document.createElement("div");
    boxfilter.setAttribute("id","boxfilter");
    secao_esquerda.appendChild(boxfilter);

    //barra do filtro
    const filter = document.createElement("div");
    filter.setAttribute("id","filter");
    boxfilter.appendChild(filter);

    //filtro
    const filter_list = document.createElement("select");
    filter_list.setAttribute("id","filterlist");
    filter.appendChild(filter_list);

    //itens da lista de filtro
    const item_filter_list1=document.createElement("option");
    item_filter_list1.innerHTML="Todos";
    filter_list.appendChild(item_filter_list1);
    const item_filter_list2=document.createElement("option");
    item_filter_list2.innerHTML="To do list";
    filter_list.appendChild(item_filter_list2);
    const item_filter_list3=document.createElement("option");
    item_filter_list3.innerHTML="Projetos";
    filter_list.appendChild(item_filter_list3);

    //icone lista de filtros
    const icon_list_filter = document.createElement("img");
    icon_list_filter.setAttribute("src","img/icons/filterlist.png");
    filter.appendChild(icon_list_filter);

    //aria de apresentação do resultado do filtro
    const display_filter = document.createElement("div");
    display_filter.setAttribute("id","displayfilter");
    boxfilter.appendChild(display_filter);

    //itens do display filter
    const display_filter_item1 = document.createElement("button");
    display_filter_item1.innerHTML="começo";
    display_filter_item1.setAttribute("class","display_filter_itens");
    display_filter.appendChild(display_filter_item1);
    const display_filter_item2 = document.createElement("button");
    display_filter_item2.innerHTML="mercado";
    display_filter_item2.setAttribute("class","display_filter_itens");
    display_filter.appendChild(display_filter_item2);

    

    /* aria direita da pagina inicial */
    const secao_direita= document.createElement("div");
    secao_direita.setAttribute("id","secao_direita");
    pagina_inicial.appendChild(secao_direita);

    // caixa do titulo e paragrafo
    const boxtitle=document.createElement("div");
    boxtitle.setAttribute("id","boxtitle");
    secao_direita.appendChild(boxtitle);
    const titulo_direita=document.createElement("h1");
    titulo_direita.innerHTML=`&#x1F44B;Olá Alexandre,`;
    boxtitle.appendChild(titulo_direita);
    const info_title=document.createElement("p");
    info_title.innerHTML="pronto para organizar as tarefas.";
    boxtitle.appendChild(info_title);

    //caixa da barra de ferramentas da aria direita
    const boxtoolbar=document.createElement("div");
    boxtoolbar.setAttribute("id","boxtoolbar");
    secao_direita.appendChild(boxtoolbar);

    //botões e item da barra de ferramenta
    const btn_new_list=document.createElement("button");
    btn_new_list.setAttribute("id","btn_new_list");
    btn_new_list.innerHTML="Nova lista";
    boxtoolbar.appendChild(btn_new_list);
    const btn_delete_list=document.createElement("button");
    btn_delete_list.setAttribute("class","btn_clean");
    btn_delete_list.innerHTML="Deletar listas";
    boxtoolbar.appendChild(btn_delete_list);
    const info_count_list=document.createElement("p");
    info_count_list.innerHTML="4 listas";
    boxtoolbar.appendChild(info_count_list);
    const btn_select=document.createElement("button");
    btn_select.innerHTML="Selecionar";
    btn_select.setAttribute("class","btn_clean");
    boxtoolbar.appendChild(btn_select);

    //caixa da barra de pesquisa
    const boxsearch= document.createElement("div");
    boxsearch.setAttribute("id","boxsearch");
    boxtoolbar.appendChild(boxsearch);

    //entrada da caixa de pesquisa
    const input_search= document.createElement("input");
    input_search.setAttribute("id","input_search");
    input_search.setAttribute("placeholder","Pesquisa");
    boxsearch.appendChild(input_search);

    //icon da barra de pesquisa
    const icon_search= document.createElement("img");
    icon_search.setAttribute("src","img/icons/search.png");
    boxsearch.appendChild(icon_search);

    //display das listas na pagina inicial aria direita
    const display_list=document.createElement("div");
    display_list.setAttribute("id","display_list");
    secao_direita.appendChild(display_list);

    //listas a serem mostradas no display da aria direita
    const list1 =document.createElement("div");
    list1.setAttribute("class","list");
    display_list.appendChild(list1);
    //titulo da lista
    const title_list1=document.createElement("h4");
    title_list1.setAttribute("class","title_list");
    title_list1.innerHTML="Começo";
    list1.appendChild(title_list1);
    //lista 2
    const list2 =document.createElement("div");
    list2.setAttribute("class","list");
    display_list.appendChild(list2);
    //titulo da lista
    const title_list2=document.createElement("h4");
    title_list2.setAttribute("class","title_list");
    title_list2.innerHTML="Mercado";
    list2.appendChild(title_list2);
    //lista 3
    const list3 =document.createElement("div");
    list3.setAttribute("class","list");
    display_list.appendChild(list3);
    //titulo da lista
    const title_list3=document.createElement("h4");
    title_list3.setAttribute("class","title_list");
    title_list3.innerHTML="Projecto";
    list3.appendChild(title_list3);
    //lista 4
    const list4 =document.createElement("div");
    list4.setAttribute("class","list");
    display_list.appendChild(list4);
    //titulo da lista
    const title_list4=document.createElement("h4");
    title_list4.setAttribute("class","title_list");
    title_list4.innerHTML="to do";
    list4.appendChild(title_list4);
    //lista 5
    const list5 =document.createElement("div");
    list5.setAttribute("class","list");
    display_list.appendChild(list5);
    //titulo da lista
    const title_list5=document.createElement("h4");
    title_list5.setAttribute("class","title_list");
    title_list5.innerHTML="to do";
    list5.appendChild(title_list5);
    //lista 6
    const list6 =document.createElement("div");
    list6.setAttribute("class","list");
    display_list.appendChild(list6);
    //titulo da lista
    const title_list6=document.createElement("h4");
    title_list6.setAttribute("class","title_list");
    title_list6.innerHTML="to do";
    list6.appendChild(title_list6);
    //lista 7
    const list7 =document.createElement("div");
    list7.setAttribute("class","list");
    display_list.appendChild(list7);
    //titulo da lista
    const title_list7=document.createElement("h4");
    title_list7.setAttribute("class","title_list");
    title_list7.innerHTML="to do";
    list7.appendChild(title_list7);
    //lista 8
    const list8 =document.createElement("div");
    list8.setAttribute("class","list");
    display_list.appendChild(list8);
    //titulo da lista
    const title_list8=document.createElement("h4");
    title_list8.setAttribute("class","title_list");
    title_list8.innerHTML="to do";
    list8.appendChild(title_list8);
    //lista 9
    const list9 =document.createElement("div");
    list9.setAttribute("class","list");
    display_list.appendChild(list9);
    //titulo da lista
    const title_list9=document.createElement("h4");
    title_list9.setAttribute("class","title_list");
    title_list9.innerHTML="to do";
    list9.appendChild(title_list9);

})
