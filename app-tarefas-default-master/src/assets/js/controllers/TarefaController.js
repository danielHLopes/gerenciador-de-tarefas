class TarefaController {

  constructor(){
    this._tarefas = new Tarefas()
    this._tarefaService = new TarefaService()
    this._tarefaView = new TarefaView()
  }

  listar(){
    this._tarefas.limpar()
    this._tarefaService.listarTodas("")
      // Adiciona as tarefas recebidas na lista de tarefas
      .then(tarefas => {
        tarefas.map(tarefa => this._tarefas.adicionar(tarefa))
      })
      // Passa os dados para a View
      .then(() => this._tarefaView.montarGrid(this._tarefas))
  }

  carregarFormulario(){
    
    // Mostra o formulário
    $('#modalTarefa').modal('show')
  }
  trocarModalEditar(){
    const modalTarefa = document.querySelector('#tituloModalTarefa')
    modalTarefa.innerText = 'Editar Tarefa'

    document.getElementById('btn-salvarT').style.display = 'none'
    document.getElementById('btn-alterarT').style.display = 'inline-block'

   
  }

  trocarModalSalvar(){
    const modalTarefa = document.querySelector('#tituloModalTarefa')
    modalTarefa.innerText = 'Inserir tarefa'

    document.getElementById('btn-salvarT').style.display = 'inline-block'
    document.getElementById('btn-alterarT').style.display = 'none'
  }

  
  
  editar(Descricao,Data,Categoria,Prioridade){
    const data = document.querySelector('#dataTarefa')
    data.value = Data
    
    const descricao = document.querySelector('#descricaoTarefa')
    descricao.value = Descricao

    const categoria = document.querySelector('#categoriaTarefa')
    categoria.value = Categoria

    const prioridade = document.querySelector('#prioridadeTarefa')
    prioridade.value = Prioridade
  }
  inserir(){
    
    // Capturar os dados
    // const descricao = document.querySelector('#descricao').value
    // const datahorario = document.querySelector('#data').value
    // const categoria_id = document.querySelector('#categoria').value
    
    const tarefa = new Tarefa(this._tarefaView.campoDescricao, this._tarefaView.campoData, this._tarefaView.campoCategoria)

    // Criar a tarefa
    // const tarefa = new Tarefa(descricao, datahorario, categoria_id)
    
    // Enviar a tarefa
    this._tarefaService.inserir(tarefa.toJSON())
      .then(res => console.log(res))
  }

  alterar(){

  }

  deletar(){
    
  }
}
