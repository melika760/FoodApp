export default function Input(props){
    return(<div>
        <label >{props.label}</label>
        <input {...props.input}/>
    </div>)
}