type StatusProps = {
    status: 'loading' | 'success' | 'error' //only accept any of these three values
}
export const Status = (props: StatusProps) => {

    let message

    if(props.status === 'loading'){
        message = 'Loading...';
    }else if(props.status === 'success'){
        message = 'Data fetched successfully'
    }else if(props.status === 'error'){
        message = 'Error fetching data'
    }

    return (
        <div>
            <h2>Status: {message}</h2>
        </div>
    )
}