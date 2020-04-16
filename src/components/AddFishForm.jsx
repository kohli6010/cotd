import React from 'react';

class AddFishForm extends React.Component {
    name = React.createRef();
    price = React.createRef();
    status = React.createRef();
    desc = React.createRef();
    image = React.createRef();

    createFish = (e) => {
        e.preventDefault();
        const fish = {
            name: this.name.current.value,
            price: parseFloat(this.price.current.value),
            status: this.status.current.value,
            desc: this.desc.current.value,
            image: this.image.current.value,
        };
        this.props.addFish(fish);
        e.currentTarget.reset();
    };

    render() {
        return (
            <form className='fish-edit' onSubmit={this.createFish}>
                <input type='text' ref={this.name} name='name' id='' placeholder='name' />
                <input type='text' ref={this.price} name='price' id='' placeholder='price' />
                <select name='status' ref={this.status}>
                    <option value='available'>Fresh!</option>
                    <option value='unavailable'>Sold Out!</option>
                </select>
                <textarea name='desc' placeholder='Desc' ref={this.desc}></textarea>
                <input type='text' name='image' id='' ref={this.image} placeholder='Image URL' />
                <button type='submit'>+ Add Fish</button>
            </form>
        );
    }
}

export default AddFishForm;
