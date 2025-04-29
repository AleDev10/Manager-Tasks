console.log("Abrindo o programa ...");

const path = require("path");
const fs = require('fs');
const notifier = require("node-notifier");
const Database = require('better-sqlite3');
const { app, BrowserWindow,ipcMain,nativeTheme,shell } = require("electron");

const dbPath = path.join(__dirname, "db", "Listas_de_tarefas.db");
const db = new Database(`${dbPath}`, { verbose: console.log });

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

if (!fs.existsSync(dbPath)) {
  console.log('O banco de dados não existe. Criando um novo...');
}

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
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
