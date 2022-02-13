import { Name } from './Person.types';

type PersonListProps = {
    names: Name[] //array
}
export const PersonList = (prosp: PersonListProps) =>{
    return (
        <div>
            {prosp.names.map(name =>{
                return (
                    <h2 key={name.firstName}>{name.firstName} {name.secondName}</h2>
                )
            })}
        </div>
    )
}