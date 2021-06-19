import React from 'react';

import './new-list-item.css'

const NewListItem = () => {
    return(
        <div className ="new-list-item">
            <input type = "text" placeholder = "Введите название новой покупки"/>
            <button type = "submit">Добавить</button>
        </div>
    )
}

export default NewListItem;