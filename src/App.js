import React, { Component } from 'react'
import './App.css';
import Customer from './components/Customer';

const customers = [{
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/1',
  'name' : '짱구',
  'birthday' : '961222',
  'gender' : '남자',
  'job' : '대학생'
},
{
  'id' : 2,
  'image' : 'https://placeimg.com/64/64/2',
  'name' : '짱아',
  'birthday' : '040322',
  'gender' : '여자',
  'job' : '유아'
},
{
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/3',
  'name' : '철수',
  'birthday' : '961522',
  'gender' : '남자',
  'job' : '대학생'
}]


class App extends Component {
  render(){
    return (
      <div>
        {
          customers.map(c => {
            return( 
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.name}
                gender={c.gender}
                job={c.job}
              />
            )
          })
        }
      </div>
    );
  }
}

export default App;
