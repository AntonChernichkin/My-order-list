import React from 'react';

import './list-filter.sass'

class ListFilter extends React.Component {
    constructor(props) {
        super(props);
        this.buttons = [
            {name: 'all', label: 'Все'},
            {name: 'imp', label: 'Важные'},
            {name: 'check', label: 'Оставшиеся'},
        ]
        this.state = {
            term: ''
        }
        this.onUpdateFilter = this.omUpdateFilter.bind(this);
    }

    omUpdateFilter(event) {
        const term = event.target.value;
        this.setState({term});
        this.props.onUpdateFilter(term);
    }

    render() {
        const buttons = this.buttons.map(({name, label}) => {
            const active = this.props.filter === name;
            const newClass = active ? 'btn-active' : '';
            return (
                <button 
                    key = {name} 
                    className = {`${newClass}`} 
                    type="button"
                    onClick= {() => this.props.onFilterSelect(name)}>
                        {label}
                </button>
            )
        })
        return (
            <div className = 'list-filter'>
                <input 
                    type = 'text' 
                    placeholder = "Поиск по записям" 
                    onChange = {this.onUpdateFilter}
                />
                {buttons}
            </div>
        )
    }
}

export default ListFilter;