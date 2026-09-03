export default function Ingredient (props){
    return(
    <li style={{backgroundColor: props.color}}>
        {props.name}
        
        {props.isStacked ? (
            <button onClick={() => props.removeFromBurger({name: props.name})}>
                X
                </button>
        ) : (
            <button onClick={() => props.addToBurger({name: props.name, color: props.color})}>
                +
                </button>
        )}
    </li>
    )
};