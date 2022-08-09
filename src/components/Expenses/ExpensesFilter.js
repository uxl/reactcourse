import React, { useState } from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const [selectedOption, setSelectedOption] = useState('');
  const onFilterChangeHandler = (event) => {
    setSelectedOption(event.target.value);

    //TODO: investigate if folks use a callback after setting a state
    //state update scheduled and not available immediately

    console.log('from expensesFilter: ', selectedOption);

    const filterByYear = event.target.value;
    props.onFilterUpdateHandler(filterByYear);
  };
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={selectedOption} onChange={onFilterChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
