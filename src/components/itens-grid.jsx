import React from 'react'
import { Link } from 'react-router'


const displayNone = {'display': 'none'}

const GridItem = React.createClass({

  onRowClick() {
     this.props.onEdit(this.props.item)
  },

  onDelete() {
    this.props.onDelete(this.props.item)
  },

  renderButton(disabled) {

    let classes = 'btn btn-xs btn-danger'
    return disabled
      ? <button type='button' className={classes} disabled><i className='fa fa-times'/></button>
      : <button type='button' className={classes} onClick={() => {this.onDelete()}}><i className='fa fa-times'/></button>
  },

  render() {
    let {item, onRowClick} = this.props
    return (
      <tr className={item.id %2 !== 0 ? 'info' : ''}>
        <td className="text-center">{item.nome}</td>
        <td className="text-center">{item.tipo}</td>
        <td className="text-center">{item.preco}</td>
        <td className="text-center">{item.quantidade}</td>
        <td className="text-center">
          <Link
            title="Editar"
            to={``}
            className="btn btn-link btn-xs">
            <i className="glyphicon glyphicon-pencil" />
          </Link>
          <Link
            title="Excluir"
            to={``}
            className="btn btn-link btn-xs">
            <i className="glyphicon glyphicon-remove" />
          </Link>
        </td>
      </tr>
    )
  }
})

const GridItems = ({items}) => {
  return (
    <tbody>
      {items.map((item) => {
         return <GridItem item={item} key={item.id} />
      })}
    </tbody>
  )
}

let ItemGrid = (props) => {

  return (
    <div>
      <fieldset>
        <div className="row">
          <section id="conteudo-grid">
            <div className="container">
                <div className="panel">
                    <div className="">
                      <table id="table-grid" className="table table-bordered table-striped">
                        <thead>
                          <tr>
                            <th className="text-center col-md-2">Nome</th>
                            <th className="text-center col-md-2">Tipo</th>
                            <th className="text-center col-md-2">Preço</th>
                            <th className="text-center col-md-2">Quantidade</th>
                            <th className="text-center col-md-1"></th>
                          </tr>
                        </thead>
                        <GridItems items={props.model} />
                      </table>
                  </div>
                </div>
            </div>
          </section>
        </div>
      </fieldset>
      <footer className="form-footer">
      </footer>
      </div>
  )
}

export default ItemGrid;
