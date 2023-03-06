import { Component } from 'react';

import './card-list.styles.css';
import './card.styles.css';

class CardList extends Component {
  render() {
    console.log('render')
    const { monsters } = this.props;

    return (
      <div className="card-list">
        {monsters.map(monster => (
          <div className="card-container">


          </div>
        ))}
      </div>
    )
  }
}

export default CardList;