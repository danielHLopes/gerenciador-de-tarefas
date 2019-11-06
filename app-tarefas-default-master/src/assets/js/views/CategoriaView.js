class CategoriaView{

  constructor(){
    this._listagem = document.querySelector('#lista-categorias')
  }

  templateListagem(categorias){
    return `
      ${categorias.listar().map(categoria => {
        return `
        <li>
          <a href="#" class="link-category">
          <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg" class="mr-1">
            <ellipse cx="4.5" cy="5" rx="4.5" ry="5" fill="#F2C94C"/>
          </svg> ${categoria.descricao}
          </a>
        </li>
        `
      }).join('')}
    `
  }

  montarListagem(categorias){
    // categorias.listar().map(c => console.log(c))
    this._listagem.innerHTML = ''
    this._listagem.innerHTML = this.templateListagem(categorias)
  }
}
