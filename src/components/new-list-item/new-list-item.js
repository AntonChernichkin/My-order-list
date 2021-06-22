import React from 'react';

import './new-list-item.css'

class NewListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            textValue: ''
        }
        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onValueChange(event){
        this.setState({
            textValue: event.target.value
        })
        console.log(event.target.value);
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.onAdd(this.state.textValue)
        this.setState({
            textValue: ''
        })
    }

    render() {
        return(
            <form 
            className ="new-list-item"
            onSubmit = {this.onSubmit}
            >
                <input 
                    type = "text" 
                    placeholder = "Введите название новой покупки"
                    onChange={this.onValueChange}
                    value = {this.state.textValue}
                />
                <button type = "submit">
                Добавить
                </button>
            </form>
        )
    }

}



export default NewListItem;