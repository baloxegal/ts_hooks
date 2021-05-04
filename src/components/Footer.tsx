type Author = {
    firstName: string;
    lastName: string;
}

export default function Footer (props: Author){
    return(
        <h3 className='App-footer'> @ {props.firstName} {props.lastName} </h3>
    )
}