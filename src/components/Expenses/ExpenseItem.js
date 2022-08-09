import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';

function ExpenseItem(props) {
  console.log('ExpenseItem evaluated by React');
  // array destructuring
  const [title, setTitle] = useState(props.title); //pointer at managed value //function to update
  const clickHandler = () => {
    setTitle('Updated!');
    console.log(title);
  };
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
      </div>
      <div className='expense-item__price'>${props.amount}</div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}
export default ExpenseItem;
