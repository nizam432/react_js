import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import card1 from './components/Card1';
import Card1 from './components/Card1';
//import Card from './components/Card';
import List from './components/UniqueList/List';
//import Data from './data.json';

const users =[
  {
    fullName:"Nizam Uddin0",
    age:32,
    phones:[
      {home:"01822484490"},
      {personal:"01822484491"}
    ]
  },
  {
    fullName:"Nizam Uddin1",
    age:32,
    phones:[
      {home:"01822484490"},
      {personal:"01822484491"}
    ]
  },
  {
    fullName:"Nizam Uddin2",
    age:32,
    phones:[
      {home:"01822484490"},
      {personal:"01822484491"}
    ]
  }
];

function App() {

  return <div>
    <Card1 name="Card1" desc="This test description" />
  </div>

 // let items=[];
 // for(let i=0;i<Data.length;i++){
 //   item.push(<Card textTitle={Data[i].title} textDescription={Data[i].desc} />);
 // }
 //items=Data.map((item)=><Card textTitle={item.title} textDescription={item.desc} />);
  /*return (
    <div>
      <h1>Nested Lists</h1>
       {
         users.map((user,index)=><article>
          <h3>Full Name: {user.fullName}</h3>
          <p>Age: {user.age}</p>
          {
            user.phones.map((phone,index)=><div>
              <p>Home: {phone.home}</p>            
              <p>Personal: {phone.personal}</p>            
            </div>)
          }
          </article>)
       }
    </div>
  );*/
}

export default App;
