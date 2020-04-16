import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import Fish from './Fish';
import base from '../base';
import sampleFishes from '../sample-fishes';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            fishes: {},
            orders: {},
        };
    }

    componentDidMount() {
        const localStorageRef = localStorage.getItem(this.props.match.params.storeId);
        if (localStorageRef) { 
            this.setState({orders: JSON.parse(localStorageRef)})
        }
        this.ref = base.syncState(`${this.props.match.params.storeId}/fishes`, {
            context: this,
            state: 'fishes',
        });
    }

    componentDidUpdate() {
        localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.orders));
    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    addFish = (fish) => {
        const fishes = this.state.fishes;
        fishes[`fish${Date.now()}`] = fish;
        this.setState({ fishes });
    };

    addOrder = (key) => {
        const orders = { ...this.state.orders };
        orders[key] = orders[key] + 1 || 1;
        this.setState({ orders });
    };

    addSampleFishes = () => {
        this.setState({ fishes: sampleFishes });
    };

    render() {
        return (
            <div className='catch-of-the-day'>
                <div className='menu'>
                    <Header tagline='Fresh Seafood Daily' />
                    <ul className='fishes'>
                        {Object.keys(this.state.fishes).map((fish) => {
                            const fishObject = this.state.fishes[fish];
                            return <Fish key={fish} index={fish} fishObject={fishObject} addOrder={this.addOrder} />;
                        })}
                    </ul>
                </div>
                <Order fishes={this.state.fishes} orders={this.state.orders} />
                <Inventory addFish={this.addFish} addSampleFishes={this.addSampleFishes} fishes={{}/>
            </div>
        );
    }
}

export default App;
