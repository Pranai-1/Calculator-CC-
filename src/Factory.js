 function Factory(props){
    return(
        <div className="font-bold text-xl text-center">
            Hello  {props.name}
        </div>
    )
}
const Element = () => <Factory name="Pranai" />;
 export default Element;