class TarefaView {

  constructor(){
    
    this._grid = document.querySelector('#grid')

    // Adicionando um listernet no botão que carrega o formulário
    this._btnNovo = document.querySelector('#btn-novo')
    this._btnNovo.addEventListener('click', (event) => {
      event.preventDefault()
    })

    // Campos do Formulário
    this._campoDescricao = document.querySelector('#descricao')
    this._campoData = document.querySelector('#data')
    this._campoCategoria = document.querySelector('#categoria')
  }

  get campoDescricao(){
    return this._campoDescricao.value
  }

  get campoData(){
    return this._campoData.value
  }

  get campoCategoria(){
    return this._campoCategoria.options[this._campoCategoria.selectedIndex].value;
  }


  templateGrid(tarefas){
    return `
      ${tarefas.listar().map(tarefa => {
        return `
          <section class="task-background d-flex m-3">
            <div>
              <input type="checkbox" class="mt-1">
            </div>
            <div class="flex-fill ml-2 mr-2">
              <div><a href="#" class="link-task">${tarefa.descricao}</a></div>
              <div class="text-muted font-text">${tarefa.data}</div>
              <div class="mt-2 font-text">
                <img src="assets/images/blue.svg" alt="" class="mr-1">${tarefa.categoria} 
              </div>
            </div>
            <div>
              <a href="#"><img src="assets/images/delete.svg" alt=""></a>
            </div>
          </section>
        `
      }).join('')}
    `
  }

  montarGrid(tarefas){
    // tarefas.listar().map(t => console.log(t))
    this._grid.innerHTML = ''
    this._grid.innerHTML = this.templateGrid(tarefas)
  }  
}
