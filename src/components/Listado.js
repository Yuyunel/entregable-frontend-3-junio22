import React from "react"
import Item from './Item'
import data from './data.json'

// Debemos importar el listado de objetos del archivo JSON para usarlos como array a la hora de crear cada Item.
// El componente Listado es el padre de:
// - varios Item
// ESTADO: Listado no necesita manejar un estado.
// MÉTODOS: Listado no requiere de métodos.
// PROPS: Listado recibe el método para aumentar el estado de App y se lo pasa a cada uno de sus hijos.

const Listado = ({adding}) => {
  return (
    <div className='container'>
      {/* renderizamos los Item aquí */}
      {data.map((producto)=>(
        <Item
        adding = {adding}
        id = {producto.id}
        nombre = {producto.producto.nombre}
        descripcion = {producto.producto.descripcion}
        stock = {producto.stock}
        />
      ))}
    </div>
  )
  }
export default Listado;

