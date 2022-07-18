import {FC} from 'react';

interface Item {
    name : string,
    version : number
}

interface ItemList {
    data : Item[]
}

const List : FC<ItemList> = (ItemList) => {
    return (
        <ul>
            {ItemList.data.map(prop => <><li>{prop.name}</li><li>{prop.version}</li></>)}
        </ul>
    )
}

export default List;