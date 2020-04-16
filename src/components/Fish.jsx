import React from 'react';
import { formatPrice } from '../helpers';
class Fish extends React.Component {
    handleClick = () => {
        this.props.addOrder(this.props.index);
    };

    render() {
        const { name, image, price, desc, status } = this.props.fishObject;
        const isAvailable = status === 'available';
        return (
            <li className='menu-fish'>
                <img src={image} alt='' />
                <h3 className='fish-name'>
                    {name}
                    <span className='price'>{formatPrice(price)}</span>
                </h3>
                <p>{desc}</p>
                <button disabled={!isAvailable} onClick={this.handleClick}>
                    {isAvailable ? 'Add To Cart' : 'Sold Out!'}
                </button>
            </li>
        );
    }
}

export default Fish;
