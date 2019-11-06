class Tarefa {
  
  constructor(descricao, data, categoria_id){
    this._descricao = descricao
    this._data = data
    this._realizado = false
    this._categoria_id = categoria_id
  }

  toJSON() {
    return {
      descricao: this._descricao,
      data:  this._data,
      realizado:   this._realizado,
      categoria_id:   this._categoria_id
    };
  }
  
}
