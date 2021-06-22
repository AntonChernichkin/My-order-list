import React from "react"

import './title-header.sass';

const TitleHeader = ({allImportant, allChek, allItems}) => {
    return(
        <>
            <h1> Мой лист покупок </h1>
            <h2> Всего записей: {allItems}.</h2>
            <h2> Из них важных: {allImportant}, выполненных {allChek}</h2>
        </>
    )
}

export default TitleHeader;