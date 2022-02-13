import { PersonProps } from "./Person.types"; // add types on other file
export const Person = (props: PersonProps) =>{
    return <div>{props.name.firstName} {props.name.secondName}</div>
}