import {default as AlertUI} from '@material-ui/lab/Alert';

export default function Alert (props : any = {type : "info", message : null}) {   

    console.log(props.message);
    if(props.message != null)
        return <AlertUI severity={props.type}>{props.message}</AlertUI>
    else
        return null;
}