type ListProps<T> = {
    items: T[] //array of type T
    onClick:(value:T) => void //value of type T
}

export const List = <T extends {}>({items, onClick}:ListProps<T>) => {

    // <T extends {}> means all data types

    // for string or number only
    //export const List = <T extends string | number>({items, onClick}:ListProps<T>) => {

    // for specific item, for example, property of an object
    //export const List = <T extends {id:number}>({items, onClick}:ListProps<T>) => {
    // then 
    // <div key={item.id} onClick={()=>onClick(item)}>

    return(
        <div>
            <h2>List of items</h2>
            {
                items.map((item,index) => {
                    return (
                        <div key={index} onClick={()=>onClick(item)}>
                            {item}
                        </div>
                    )
                })
            }
        </div>
    )
}