console.log("Abrindo o programa ...");


//aria das importações
const path = require("path");
const fs = require('fs');
const notifier = require("node-notifier");
const Database = require('better-sqlite3');
const { app, BrowserWindow,ipcMain,nativeTheme,shell, ipcRenderer } = require("electron");
const { log, Console } = require("console");
const { get } = require("http");

//aria das variaveis de dados
let listas_do_db=[];
let definicoes_do_db={};
let tarefas_do_db=[];
let descricoes_do_db=[];
let ultima_lista_crida={};
let conteudo_do_db;
let ultimo_id_gerado_no_db

//caminho do db para desenvolvimento
//const dbPath = path.join(__dirname,"db","Listas_de_tarefas.db");

//caminho do db para compilação
const dbPath = path.join(app.getPath('userData'),"Listas_de_tarefas.db");

console.log(dbPath);
//comando para abrir ou criar o db
const db = new Database(`${dbPath}`, { verbose: console.log });

//criaÇão da tabela listas
db.exec(`create table if not exists lista(
  id integer primary key autoincrement,
  titulo_lista text not null default 'Titulo',
  categoria text not null default 'Nenhuma',
  num_tarefas integer not null default 0,
  lisa_salva integer not null default 1,
  codigo_de_lista integer not null unique
);`);

//criaÇão da tabela definições
db.exec(`create table if not exists definicoes(
  id integer primary key autoincrement,
  nome_user text not null,
  cor_sistema text not null default '#c935f2',
  cor_modo_do_sistema text not null default 'escuro',
  percentagem_da_fonte integer not null default 13,
  logo text not null default '../img/logo/logoapp5.png',
  logo2 text not null default '../img/logo/logoapp4.png',
  execucao_do_app integer not null default 0,
  titulo_iguais integer not null default 0
);
`);

//criaÇão da tabela descrições
db.exec(`create table if not exists descricao (
  id integer primary key autoincrement,
  texto text not null default '......',
  alturaDaCaixa integer not null default 54,
  codigo_de_lista integer not null,
  foreign key (codigo_de_lista) references  lista(codigo_de_lista) on delete cascade
);`);

//criação da tabela tarefas
db.exec(`create table if not exists tarefas (
  id integer primary key autoincrement,
  tarefa text not null,
  estatos integer not null,
  codigo_de_lista integer not null,
  foreign key (codigo_de_lista) references  lista(codigo_de_lista) on delete cascade
);`);

function inserir_dados_nas_definicoes(dados) {
  let inserir = db.prepare(`insert into definicoes (nome_user,cor_sistema,cor_modo_do_sistema,percentagem_da_fonte,logo,logo2,execucao_do_app,titulo_iguais) values (?,?,?,?,?,?,?,?);`);
  inserir.run(dados.nome_user,dados.cor_sistema,dados.cor_modo_do_sistema,dados.percentagem_da_fonte,dados.logo,dados.logo2,dados.execucao_do_app,dados.titulo_iguais);
}

function inserir_dados_na_lista(dados) {
  console.log(dados);
  let inserir = db.prepare(`insert into lista( titulo_lista,categoria,num_tarefas,lisa_salva,codigo_de_lista) values(?,?,?,?,?);`);
  inserir.run(dados.titulo_lista,dados.categoria,dados.num_tarefas,dados.lisa_salva,dados.codigo_de_lista);
}

const inserir_dados_das_tarefas_e_descricoes = db.transaction((dados)=>{
    let inserirTarefa = db.prepare(`insert into tarefas(tarefa,estatos,codigo_de_lista) values(?,?,?);`);
    let inserirDescricoes = db.prepare(`insert into descricao (id,texto,alturaDaCaixa,codigo_de_lista) values(?,?,?,?);`);

    let id = inserirTarefa.run(dados.tarefas.tarefa,dados.tarefas.estatos,dados.tarefas.codigo_de_lista);
    let idTarefa = id.lastInsertRowid;

    inserirDescricoes.run(idTarefa,dados.descricoes.texto,dados.descricoes.alturaDaCaixa,dados.descricoes.codigo_de_lista);
});

function buscar_difinicoes_ao_db() {
  let dados = db.prepare(`select  * from definicoes order by id desc limit 1;`).get();
  definicoes_do_db=dados;  
  console.log(definicoes_do_db);
}

function buscar_listas_ao_db() {
  let dados = db.prepare(`select * from lista;`).all();
  dados.forEach((item)=>{
    listas_do_db.push(item);
  });
  console.log(listas_do_db);
}

function buscar_tarefas_e_descrições_ao_db() {
  let numero_de_listas = db.prepare(`select count (*) as total from lista;`).get();
  let id_listas=[];

  db.prepare(`select id from lista;`).all().forEach((obj)=>{
    id_listas.push(obj.id);
  });

  console.log(id_listas)
  console.log(numero_de_listas);

  id_listas.forEach((posicao)=>{
  let tarefa_temporaria=[];
  let descricao_temporaria=db.prepare(`select * from descricao where codigo_de_lista=${posicao};`).all();

    db.prepare(`select * from tarefas where codigo_de_lista=${posicao};`).all().forEach((obj,index2)=>{
      
      tarefa_temporaria.push({
        id: obj.id,
        tarefa: obj.tarefa,
        descricao: descricao_temporaria[index2],
        estatos: obj.estatos,
        codigo_de_lista:obj.codigo_de_lista
      });
    });

    tarefas_do_db.push(tarefa_temporaria);
    tarefa_temporaria=[];
    descricoes_do_db.push(db.prepare(`select * from descricao where codigo_de_lista=${posicao};`).all());
  });

  console.log(tarefas_do_db);
  console.log(descricoes_do_db);

}

function buscar_ultima_lista_criada() {
  let dados = db.prepare(`select * from lista order by id desc limit 1 ;`).get();
  console.log(dados.id)
  let descricoes= db.prepare(`select * from descricao where codigo_de_lista=${dados.id};`).all();
  console.log(descricoes);

  let tarefas= [];
  db.prepare(`select * from tarefas where codigo_de_lista=${dados.id};`).all().forEach((obj,index)=>{
    tarefas.push({
      id: obj.id,
      tarefa: obj.tarefa,
      descricao: descricoes[index],
      estatos: obj.estatos,
      codigo_de_lista:obj.codigo_de_lista
    });
  });
  console.log(tarefas);

  listas={
      titulo_lista: dados.titulo_lista,
      categoria: dados.categoria,
      num_tarefas: dados.num_tarefas,
      tarefas: tarefas,
      descricao:descricoes,
      lisa_salva:dados.lisa_salva,
      codigo_de_lista:dados.codigo_de_lista
    };

  return listas
}

function buscar_o_ultimo_id_gerado() {
  let ultimo_id_tarefa = db.prepare(`select seq as ultimoid from sqlite_sequence where name = 'tarefas';`).get();
  let ultimo_id_descricao = db.prepare(`select seq as ultimoid from sqlite_sequence where name = 'descricao';`).get();

  if (ultimo_id_tarefa.ultimoid==ultimo_id_descricao.ultimoid) {
    ultimo_id_gerado_no_db=ultimo_id_tarefa.ultimoid;
    console.log(ultimo_id_gerado_no_db);
  }
}

function deletar_uma_tarefa_e_descricao(dados) {
  db.prepare(`delete from tarefas where id = ?;`).run(dados.id);
  db.prepare(`delete from descricao where id = ?;`).run(dados.id);
  db.prepare(`update lista set num_tarefas = ? where codigo_de_lista = ?;`).run((dados.num_tarefas)-1,dados.codigo_de_lista);
  console.log(`Tarefa e Descricao com ID ${dados.id} foram deletados`);
}

function deletar_todas_tarefas_e_descricoes(dados) {
  db.prepare(`delete from tarefas where codigo_de_lista = ?;`).run(dados);
  db.prepare(`delete from descricao where codigo_de_lista = ?;`).run(dados);
  db.prepare(`update lista set num_tarefas = ? where codigo_de_lista = ?;`).run(0,dados);
  console.log(`todas as Tarefa e Descricao com codigo_de_lista ${dados} foram deletados`);
}

function deletar_todas_as_listas() {
  db.prepare(`delete from lista;`).run();
  db.prepare(`delete from sqlite_sequence where name = 'lista';`).run();
  db.prepare(`delete from tarefas;`).run();
  db.prepare(`delete from sqlite_sequence where name = 'tarefas';`).run();
  db.prepare(`delete from descricao;`).run();
  db.prepare(`delete from sqlite_sequence where name = 'descricao';`).run();
  console.log(`Todas as Listas foram deletadas`);
}

function deletar_listas_selecionadas(dados) {
  db.prepare(`delete from lista where codigo_de_lista = ?;`).run(dados.codigo_de_lista);
  db.prepare(`delete from tarefas where codigo_de_lista = ?;`).run(dados.codigo_de_lista);
  db.prepare(`delete from descricao where codigo_de_lista = ?;`).run(dados.codigo_de_lista);
  console.log(`Todas as Listas selecionadas foram deletadas`);
}

function atualizar_lista_existente(dados) {
  db.prepare(`update lista set titulo_lista = ?, categoria = ?, num_tarefas = ?, lisa_salva = ? where codigo_de_lista = ?;`).run(dados.titulo_lista,dados.categoria,dados.num_tarefas,dados.lisa_salva,dados.codigo_de_lista);
  console.log(`Numero de tarefas e Salvamento da lista com codigo_de_lista ${dados.codigo_de_lista} foram atualizado`);
}

function atualizar_estatos_de_uma_tarefa(dados) {
  db.prepare(`update tarefas set estatos = ? where id = ?;`).run(dados.estatos,dados.id);
  console.log(`A Tarefa com ID ${dados.id} foi atualizado`);
}

function atualizar_texto_de_uma_tarefa(dados) {
  db.prepare(`update tarefas set tarefa = ? where id = ?;`).run(dados.tarefa,dados.id);
  console.log(`A Tarefa com ID ${dados.id} foi atualizado`);
}

function atualizar_titulos_iguais(dados) {
  db.prepare(`update definicoes set titulo_iguais = ? where id = ?;`).run(dados.titulo_iguais,dados.id);
  console.log(`As definições com ID ${dados.id} foram atualizadas`);
}

function atualizar_uma_descricao(dados) {
  db.prepare(`update descricao set texto = ?, alturaDaCaixa = ? where id = ?;`).run(dados.texto,dados.alturaDaCaixa,dados.id);
  console.log(`A Descrição com ID ${dados.id} foi atualizada`);
}

function verificar_contiudo_no_db() {
  let conteudo_definicoes = db.prepare(`select count (*) as total from definicoes;`).get();
  let conteudo_lista = db.prepare(`select count (*) as total from lista;`).get();

  console.log(conteudo_definicoes);
  console.log(conteudo_lista);


  if (conteudo_definicoes.total==0 && conteudo_lista.total==0) {
    console.log("banco vazio");
    conteudo_do_db="nenhum";
    definicoes_do_db={
      id:1,
      nome_user: "",
      cor_sistema: "#c935f2",
      cor_modo_do_sistema: "escuro",
      percentagem_da_fonte: 13,
      logo: "../img/logo/logoapp.png",
      logo2: "../img/logo/logoapp2.png",
      execucao_do_app:false,
      titulo_iguais:0
    }
  }else if(conteudo_lista.total==0){
    console.log("listas vazias");
    conteudo_do_db="definições";
    buscar_difinicoes_ao_db();
  }else{
    console.log("dados obtidos");
    conteudo_do_db="todos";
    buscar_difinicoes_ao_db();
    buscar_listas_ao_db();
    buscar_tarefas_e_descrições_ao_db();
    buscar_o_ultimo_id_gerado();
  }
}



verificar_contiudo_no_db();

let janela_de_abertura;
let janela_de_execucao;

const criar_janela_segundaria = () => {
  janela_de_execucao = new BrowserWindow({
    width: 1280,
    height: 720,
    minWidth:800,
    minHeight:600,
    frame: false,
    autoHideMenuBar: true,
    icon: path.join(__dirname, "img", "logo", "icone.png"),
    webPreferences: {
      devTools: false,
      contextIsolation: true,
      nodeIntegration: false,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  let pagina = path.join(__dirname, "view", "telasecundaria.html");
  janela_de_execucao.loadFile(`${pagina}`);
  //janela_de_execucao.webContents.openDevTools();
};

const criar_janela_principal = () => {
  janela_de_abertura = new BrowserWindow({
    width: 800,
    height: 400,
    frame: false,
    resizable: false,
    icon: path.join(__dirname, "img", "logo", "icone.png"),
    webPreferences: {
      devTools: false,
      contextIsolation: true,
      nodeIntegration: false,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  let pagina = path.join(__dirname, "view", "telainicial.html");
  janela_de_abertura.loadFile(`${pagina}`);
  janela_de_abertura.webContents.on("did-finish-load", () => {
    console.log("Tela de abertura carregada");
    setTimeout(() => {
      console.log("Saindo da tela de abertura");
      janela_de_abertura.close();
      criar_janela_segundaria();
    }, 10000);
  });
};

app.whenReady().then(() => {
  criar_janela_principal();
  notifier.notify({
    title: "Bem vindo",
    message: "O app está abrindo.",
    icon: path.join(__dirname, "img", "logo", "icone.png"),
  });

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) criar_janela_principal();
  });

  //aria da comunicação entre os processos
  ipcMain.on("temaSystem", (event) => {
    nativeTheme.themeSource = "system";
    event.reply("respostasTemaSystem",nativeTheme.shouldUseDarkColors ? "escuro" : "claro");
  });
  ipcMain.on("dark", () => {
    nativeTheme.themeSource = "dark";
  });
  ipcMain.on("light", () => {
    nativeTheme.themeSource = "light";
  });
  ipcMain.on("abrir-link", (event, link) => {
    shell.openExternal(link);
  });
  ipcMain.on("fecharJanelas", () => {
    app.quit();
    console.log("Programa encerrado");
  });
  ipcMain.on("minimizarJanela", () => {
    janela_de_execucao.minimize();
    console.log("Programa minimizado");
  });
  ipcMain.on("maximizarOuRestaurarJanela", () => {
    if (janela_de_execucao.isMaximized()) {
      janela_de_execucao.restore();
      console.log("Programa restaurado");
    } else {
      janela_de_execucao.maximize();
      console.log("Programa maximizado");
    }
  });
  ipcMain.on("inserirDadosDasDefinicoes",(event,dados)=>{
    inserir_dados_nas_definicoes(dados);
  });
  ipcMain.on("inserirDadosNaLista",(event,dados)=>{
    inserir_dados_na_lista(dados);
  });
  ipcMain.on("inserirDadosNasTarefaseNasDescricoes",(event,dados)=>{
    console.log(dados);
    inserir_dados_das_tarefas_e_descricoes(dados);
  });
  ipcMain.handle('ultimaListaSalva', async ()=>{
    return buscar_ultima_lista_criada();
  });
  ipcMain.handle("dadosDoDB", async ()=>{
    let listas_enviadas=[]

    listas_do_db.forEach((item,index)=>{
      listas_enviadas.push({
        titulo_lista: item.titulo_lista,
        categoria: item.categoria,
        num_tarefas: item.num_tarefas,
        tarefas: tarefas_do_db[index],
        descricao:descricoes_do_db[index],
        lisa_salva:item.lisa_salva,
        codigo_de_lista:item.codigo_de_lista
      });
    });

    return {
      listas: listas_enviadas,
      definicoes:definicoes_do_db,
      controlador_de_IDs:(listas_enviadas.length==0)?0:ultimo_id_gerado_no_db
    };
  });
  ipcMain.on("deletarTarefaEDescricao",(event,dados)=>{
    console.log(dados);
    deletar_uma_tarefa_e_descricao(dados);
  });
  ipcMain.on("deletarTodasTarefasEDescricoes",(event,dados)=>{
    console.log(dados)
    deletar_todas_tarefas_e_descricoes(dados);
  });
  ipcMain.on("atualizarNumeroDeListasSalvamento",(event,dados)=>{
    console.log(dados);
    atualizar_lista_existente(dados)
  });
  ipcMain.on("atualizarEstatosDaTarefa",(event,dados)=>{
    console.log(dados);
    atualizar_estatos_de_uma_tarefa(dados);
  });
  ipcMain.on("atualizarTextoDeUmaTarefa",(event,dados)=>{
    console.log(dados);
    atualizar_texto_de_uma_tarefa(dados);
  });
  ipcMain.on("deletarTodasAsListas",()=>{
    deletar_todas_as_listas();
  });
  ipcMain.on("atualizarTituloIguia",(event,dados)=>{
    console.log(dados);
    atualizar_titulos_iguais(dados);
  });
  ipcMain.on("deletarListasSelecionadas",(event,dados)=>{
    console.log(dados);
    deletar_listas_selecionadas(dados);
  });
  ipcMain.on("atualizarDescricao",(event,dados)=>{
    console.log(dados);
    atualizar_uma_descricao(dados);
  });


});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
