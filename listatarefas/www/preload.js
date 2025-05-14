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
  maximizarOuRestaurar: ()=> ipcRenderer.send("maximizarOuRestaurarJanela"),
  inserirDefinicoes: (dados)=> ipcRenderer.send("inserirDadosDasDefinicoes",dados),
  inserirlistas:(dados)=>{ipcRenderer.send("inserirDadosNaLista",dados)},
  inserirTarefaEDescricao:(dados)=>{ipcRenderer.send("inserirDadosNasTarefaseNasDescricoes",dados)},
  buscarDadosAoDB: ()=> ipcRenderer.invoke('dadosDoDB'),
  buscarListaSalva: ()=> ipcRenderer.invoke('ultimaListaSalva'),
  deletar_uma_tarefa_e_descricao:(dados)=> ipcRenderer.send("deletarTarefaEDescricao",dados),
  deletarTodasTarefasEDescricoes: (dados)=> ipcRenderer.send("deletarTodasTarefasEDescricoes",dados),
  atualizarNumeroDeListasSalvamento: (dados)=> ipcRenderer.send("atualizarNumeroDeListasSalvamento",dados),
  atualizarEstatosDaTarefa:(dados)=> ipcRenderer.send("atualizarEstatosDaTarefa",dados),
  atualizarTextoDeUmaTarefa: (dados)=> ipcRenderer.send("atualizarTextoDeUmaTarefa",dados),
  deletarTodasAsListas: (dados)=> ipcRenderer.send("deletarTodasAsListas",dados),
  atualizarTituloIguia: (dados)=> ipcRenderer.send("atualizarTituloIguia",dados),
  deletarListasSelecionadas: (dados)=> ipcRenderer.send("deletarListasSelecionadas",dados),
  atualizarDescricao: (dados)=> ipcRenderer.send("atualizarDescricao",dados)
});