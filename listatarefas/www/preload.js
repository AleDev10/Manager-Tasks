const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api',{
  versao: process.versions.electron,
  temaEscuro: ()=> ipcRenderer.send("dark"),
  temaClaro: ()=> ipcRenderer.send("light"),
  temaAutomatico: ()=> ipcRenderer.send("temaSystem"),
  respostaTemaAutomatico: (mensagem)=> ipcRenderer.on("respostasTemaSystem",mensagem),
  abrirLinkEmNavegadorExterno:(link)=>{ipcRenderer.send("abrir-link",link)},
  fechar: ()=> ipcRenderer.send("fecharJanelas"),
  minimizar: ()=> ipcRenderer.send("minimizarJanela"),
  maximizarOuRestaurar: ()=> ipcRenderer.send("maximizarOuRestaurarJanela")
});