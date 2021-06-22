import React from 'react';

import TitleHeader from '../title-header';
import List from '../list';
import NewListItem from '../new-list-item';
import ListFilter from '../list-filter';

import './app.css'

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [
                {label: 'Potato', important: true, check: true, id: 1},
                {label: 'Apple', important: false, check: false, id: 2},
                {label: 'Blackberrys', important: false, check: false, id: 3},
            ],
            term: '',
            filter: 'all',
        }

        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.toggleImportant = this.toggleImportant.bind(this);
        this.toggleCheck = this.toggleCheck.bind(this);
        this.searchItem = this.searchItem.bind(this);
        this.filterItem = this.filterItem.bind(this);
        this.filterCheckItems = this.filterCheckItems.bind(this);
        this.onUpdateFilter = this.onUpdateFilter.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);

        this.maxId = 4;
    }

    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const before = data.slice(0, index);
            const after = data.slice(index + 1);

            const newArray = [...before, ...after];
            return {
                data: newArray
            }
        });
        // console.log(id);
    }

    addItem(text) {
        const newItem = {
            label: text,
            important: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArray = [...data, newItem];
            return {
                data: newArray
            }
        });
    }
    
    toggleImportant(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];
            const newObj = {...old, important: !old.important}
            
            const before = data.slice(0, index);
            const after = data.slice(index + 1);

            const newArray = [...before, newObj, ...after];
            return {
                data: newArray
            }
        });
    }

    toggleCheck(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];
            const newObj = {...old, check: !old.check}
            
            const before = data.slice(0, index);
            const after = data.slice(index + 1);

            const newArray = [...before, newObj, ...after];
            return {
                data: newArray
            }
        });
    }

    searchItem(items, term) {
        if (term.length === 0) {
            return items
        }

        return items.filter((item) => {
            return item.label.indexOf(term) > -1
        })
    }

    filterItem (items, filter) {
        if( filter === 'imp' ) {
            return items.filter(item => item.important)
        } else {
            return items
        }
    }

    filterCheckItems (items, filter) {
        if(filter === 'check') {
            return items.filter(item => !item.check)
        } else {
            return items
        }
    }

    onFilterSelect(filter) {
        this.setState({filter})
    }

    onFilterSelectCheck(filterCheck) {
        this.setState({filterCheck})
    }

    onUpdateFilter(term) {
        this.setState({term})
    }
    

    render() {
        const {data, term, filter, filterCheck} = this.state;
        const allImportant = data.filter(item => item.important).length;
        const allChek = data.filter(item => item.check).length;
        const allItems = data.length;
        
        const visibleItems = this.filterCheckItems(this.filterItem((this.searchItem(data, term)), filter), filter);
        
        return(
            <div className = "app">
                <TitleHeader 
                    allImportant = {allImportant}
                    allChek = {allChek}
                    allItems = {allItems}/>
                <div>
                    <ListFilter 
                        onUpdateFilter = {this.onUpdateFilter}
                        filter = {filter}
                        onFilterSelect ={this.onFilterSelect}
                        onFilterCheckSelect = {this.onFilterCheckSelect}
                    />
                    <List 
                        list = {visibleItems}
                        onDelete = {this.deleteItem}
                        onImportant = {this.toggleImportant}
                        onCheck = {this.toggleCheck}/>
                    <NewListItem 
                          onAdd = {this.addItem}/>
                </div>
            </div>
        )
    }

}



// const data = [
//     {label: 'Potato', important: false, id: '1'},
//     {label: 'Apple', important: true, id: '2'},
// ]



// data[0].important = !data[0].important;
// data[1].important = !data[1].important;
// console.log(data)


// const index = data.findIndex(elem => elem.id === 1);
// console.log(index);
// const before = data.slice(0, index);
// const newCenter = data[index].important = !(data[index].important);
// const after = data.slice(index + 1);

// const newArray = [...before, ...newCenter, ...after];

// console.log(newCenter);