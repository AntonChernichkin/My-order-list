import React, {Component} from 'react';

import './list-item.sass'


export default class ListItem extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         important: false,
    //         check: false
    //     }
    //     this.addImportant = this.addImportant.bind(this);
    //     this.addCheck = this.addCheck.bind(this);
    // }

    // addImportant() {
    //     this.setState(({important}) => ({
    //         important: !important
    //     }))
    // }

    // addCheck() {
    //     this.setState(({check}) => ({
    //         check: !check
    //     }))
    // }

    render() {
        const {label, key, important, check, onDelete, onImportant, onCheck} = this.props;
        // const {important, check} = this.state;
        let style = "list-item" ,
            styleCheck = 'bi bi-check-circle',
            styleExclamation = 'bi bi-exclamation-lg'
        
        if (check) {
            style += " check";
            styleCheck = "bi bi-check-circle-fill"
        }

        if (important) {
            style += " important";
            styleExclamation = 'bi bi-exclamation-circle-fill';
        }


        return(
            <li className = {style} 
            key = {key}>
                <span onClick = {onCheck}>{label}</span>
                <div className = "list-item__block">
                    <button onClick={onImportant}><i class={styleExclamation}></i></button>
                    <button onClick={onDelete}><i class="bi bi-trash"></i></button>
                    <i onClick = {onCheck} class={styleCheck}></i>
                </div>
            </li>
        )
    }
}