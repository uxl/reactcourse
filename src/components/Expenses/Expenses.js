import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

//bring in component
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
  //array deconstruction of useState - sets 2022 as default
  const [filteredYear, setFilteredYear] = useState('2022');

  //filterChangeHandler - takes selected year and setsFiltered year to it
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log('selected year from form: ', selectedYear);
  };

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          //keeps filtered year up to date by passing it down to props
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        />
      </Card>
    </div>
  );
};

export default Expenses;
