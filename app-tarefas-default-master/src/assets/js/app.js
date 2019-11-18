const categoriaController = new CategoriaController()
categoriaController.montar()

const tarefaController = new TarefaController()
tarefaController.listar("")

//alterar by Daniel
var btnAlterarTarefa = document.getElementById('btn-alterarT');
btnAlterarTarefa.addEventListener("click", function(){
    tarefaController.alterar()
})
