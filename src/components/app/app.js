import React from 'react';

import TitleHeader from '../title-header';
import List from '../list';
import NewListItem from '../new-list-item';

import './app.css'

const App = () => {

    const data = [
        {label: 'Potato', important: false, id: 'a'},
        {label: 'Apple', important: true, id: 'b'},
    ]

    return(
        <div className = "app">
            <TitleHeader />
            <div>
                <List list = {data}/>
                <NewListItem />
            </div>
        </div>
    )
}

export default App;