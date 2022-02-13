type GreetProps = {
    name:string
    messageCount?: number //optional type, not required
    isLoggedin:boolean
}
export const Greet = (props: GreetProps) =>{
    //or export const Greet = ({name, messageCount, isLoggedin}: Greetprops) => {
    const { messageCount = 0 } = props; 
    return (
        <div>
            {props.isLoggedin ? 
            <h2>Welcome {props.name} Message {props.messageCount}</h2>
            : <h2> Welcome guste</h2>}
        </div>
    )
}