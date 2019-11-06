class CategoriaController {
  
  constructor(){
    this._categorias = new Categorias()
    this._categoriaService = new CategoriaService()
    this._categoriaView = new CategoriaView()
  }

  montar(){
    this._categorias.limpar()
    this._categoriaService.listarTodas()
      // Adiciona as categorias
      .then(categorias => {
        categorias.map(categoria => this._categorias.adicionar(categoria))
      })
      // Chama a view
      .then(() => this._categoriaView.montarListagem(this._categorias))
  }
}
