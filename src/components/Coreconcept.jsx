export function Coreconcept(props){
    return (
      <li>
        <img src={props.image} alt={props.title}/>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </li>
    )
  }