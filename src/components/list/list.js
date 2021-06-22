import React from 'react';

import ListItem from '../list-item';

import './list.css'

const List = ({list, onDelete, onImportant, onCheck}) => {

    const elements = list.map((item) => {
        return (
            <ListItem 
                label = {item.label}
                key = {item.id}
                important = {item.important}
                check = {item.check}
                onDelete = {() => onDelete(item.id)}
                onImportant = {() => onImportant(item.id)}
                onCheck = {() => onCheck(item.id)}
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