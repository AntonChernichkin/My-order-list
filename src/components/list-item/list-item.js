import React, {Component} from 'react';

import './list-item.css'


export default class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            important: false,
            check: false
        }
        this.addImportant = this.addImportant.bind(this);
        this.addCheck = this.addCheck.bind(this);
    }

    addImportant() {
        this.setState(({important}) => ({
            important: !important
        }))
    }

    addCheck() {
        this.setState(({check}) => ({
            check: !check
        }))
    }

    render() {
        const {label, key} = this.props;
        const {important, check} = this.state;
        let style = "list-item" ,
            styleCheck = 'bi bi-check-circle',
            styleExclamation = 'bi bi-exclamation-lg'

        if (important) {
            style += " important";
            styleExclamation = 'bi bi-exclamation-circle-fill';
        }

        if (check) {
            style += " check";
            styleCheck = "bi bi-check-circle-fill"
        }

        return(
            <li className = {style} 
            key = {key}>
                <span onClick = {this.addCheck}>{label}</span>
                <div className = "list-item__block">
                    <button onClick={this.addImportant}><i class={styleExclamation}></i></button>
                    <button><i class="bi bi-trash"></i></button>
                    <i class={styleCheck}></i>
                </div>
            </li>
        )
    }
}