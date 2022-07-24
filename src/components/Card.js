
import ReactDOM from 'react-dom/client';

const date=new Date();
const name="Nizam";
const root = ReactDOM.createRoot(document.getElementById('root'));
const day=date.getDate();
const month=date.getMonth();
const year=date.getFullYear();

function Card(props){
  //onsole.log(props);
 // const(textTitle,textDescription) =props;
    return<div className='Card'>
      <p>{props.textTitle}</p>
      <p>{props.textDescription}</p>
      <h1 >Welcome to my first react js website</h1>
      <h2>{name}</h2>
      <p>{day+"/"+month+"/"+year}</p>
    </div>
  
  }

  export default Card;