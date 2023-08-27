import React from 'react';
// import styledAnimals from './Animals.module.css'

export default class Animals extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.animals)
    return (
      <div>
        {this.props.animals.map((animal, index)=>{
          return (
            // todos los elementos de una iteracion requieren una key
            <div key={index}> 
              <h5>{animal.name}</h5>
              <img src={animal.image} alt={animal.name} width='300px' />
              <span>{animal.specie}</span>
            </div>
          )
        })}
      </div>
  )}
}
