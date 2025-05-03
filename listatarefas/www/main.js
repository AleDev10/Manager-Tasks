console.log("Abrindo o programa ...");


//aria das importações
const path = require("path");
const fs = require('fs');
const notifier = require("node-notifier");
const Database = require('better-sqlite3');
const { app, BrowserWindow,ipcMain,nativeTheme,shell, ipcRenderer } = require("electron");
const { log } = require("console");

//aria das variaveis de dados
let listas_do_db=[];
let definicoes_do_db={};
let tarefas_do_db=[];
let descricao_do_db=[];
let conteudo_do_db;

//caminho do db para desenvolvimento
const dbPath = path.join(__dirname,"db","Listas_de_tarefas.db");

//caminho do db para compilação
//const dbPath = path.join(app.getPath('userData'),"Listas_de_tarefas.db");

//comando para abrir ou criar o db
const db = new Database(`${dbPath}`, { verbose: console.log });

//criaÇão da tabela listas
db.exec(`create table if not exists lista(
  id integer primary key autoincrement,
  titulo text not null default 'Titulo',
  categoria text not null default 'Nenhuma',
  numero_de_tarefas integer not null default 0,
  qtd_de_salvamento_da_lista integer not null default 1
);`);

//criaÇão da tabela definições
db.exec(`create table if not exists definicoes(
  id integer primary key autoincrement,
  nome_usuario text not null,
  cor_do_Sistema text not null default '#c935f2',
  cor_modo_sistema text not null default 'escuro',
  tamanho_da_font integer not null default 13,
  logo1 text not null default '../img/logo/logoapp5.png',
  logo2 text not null default '../img/logo/logoapp4.png',
  execucao_do_app integer not null default 0
);
`);

//criaÇão da tabela descrições
db.exec(`create table if not exists descricao (
  id integer primary key autoincrement,
  texto text not null default '......',
  altura integer not null default 54,
  id_lista integer not null,
  foreign key (id_lista) references  lista(id) on delete cascade
);`);

//criação da tabela tarefas
db.exec(`create table if not exists tarefas (
  id integer primary key autoincrement,
  tarefa text not null,
  estado integer not null,
  id_lista integer not null,
  foreign key (id_lista) references  lista(id) on delete cascade
);`);

function inserir_dados_nas_definicoes(dados) {
  let inserir = db.prepare(`insert into definicoes (nome_usuario,cor_do_Sistema,cor_modo_sistema,tamanho_da_font,logo1,logo2,execucao_do_app) values (?,?,?,?,?,?,?);`);
  inserir.run(dados.nome,dados.cor_sistema,dados.cor_modo_do_sistema,dados.tamanho_da_fonte,dados.logo1,dados.logo2,dados.execucao);
}

function inserir_dados_na_lista(dados) {
  console.log(dados);
  let inserir = db.prepare(`insert into lista( titulo,categoria,numero_de_tarefas,qtd_de_salvamento_da_lista) values(?,?,?,?);`);
  inserir.run(dados.titulo,dados.categoria,dados.num_tarefas,dados.lista_salva);
}

const inserir_dados_das_tarefas_e_descricoes = db.transaction((dados)=>{
    let inserirTarefa = db.prepare(`insert into tarefas(tarefa,estado,id_lista) values(?,?,?);`);
    let inserirDescricoes = db.prepare(`insert into descricao (id,texto,altura,id_lista) values(?,?,?,?);`);

    let id = inserirTarefa.run(dados.tarefas.tarefa,dados.tarefas.estado,dados.tarefas.id_lista);
    let idTarefa = id.lastInsertRowid;

    inserirDescricoes.run(idTarefa,dados.descricoes.texto,dados.descricoes.altura,dados.descricoes.id_lista);
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

function verificar_contiudo_no_db() {
  let conteudo_definicoes = db.prepare(`select count (*) as total from definicoes;`).get();
  let conteudo_lista = db.prepare(`select count (*) as total from lista;`).get();

  console.log(conteudo_definicoes);

  if (conteudo_definicoes.total==0 && conteudo_lista.total==0) {
    console.log("banco vazio");
    conteudo_do_db="nenhum";
  }else if(conteudo_lista.total==0){
    console.log("listas vazias");
    conteudo_do_db="definições";
    buscar_difinicoes_ao_db();
  }else{
    console.log("dados obtidos");
    conteudo_do_db="todos";
    buscar_difinicoes_ao_db();
    buscar_listas_ao_db();
  }
}

verificar_contiudo_no_db();

let janela_de_abertura;
let janela_de_execucao;

const criar_janela_segundaria = () => {
  janela_de_execucao = new BrowserWindow({
    width: 1280,
    height: 720,
    frame: false,
    autoHideMenuBar: true,
    icon: path.join(__dirname, "img", "logo", "icone.png"),
    webPreferences: {
      devTools: true,
      contextIsolation: true,
      nodeIntegration: false,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  let pagina = path.join(__dirname, "view", "telasecundaria.html");
  janela_de_execucao.loadFile(`${pagina}`);
  janela_de_execucao.webContents.openDevTools();
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
  ipcMain.handle("dadosDoDB", async ()=>{
    let listas_enviadas=[]
    listas_do_db.forEach((item)=>{
      listas_enviadas.push({
        titulo_lista: item.titulo,
        categoria: item.categoria,
        num_tarefas: item.numero_de_tarefas,
        tarefas: [],
        descricao:[],
        lisa_salva:item.qtd_de_salvamento_da_lista,
      });
    });
    return {
      listas: listas_enviadas,
      definicoes:definicoes_do_db
    };
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
