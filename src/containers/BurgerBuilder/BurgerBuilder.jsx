import React from 'react';
import Aux from '../../hoc/Auxilliary';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }

  render() {
    return (
      <Aux>
        <Burger />
        <div>Build Controls</div>
      </Aux>
    )
  }
  
}

export default BurgerBuilder;