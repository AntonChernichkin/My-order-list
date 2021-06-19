import React from 'react';

import ListItem from '../list-item';

import './list.css'

const List = ({list}) => {

    const elements = list.map((item) => {
        return (
            <ListItem 
            label = {item.label}
            key = {item.id}
            important = {item.important}
            />
        )
        })

    return (
        <ul>
            {elements}
        </ul>
    )
}

export default List;