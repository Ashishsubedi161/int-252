import React from 'react'

function expense() {
  const expenseDate = new Date();
  var month = expenseDate.toLocaleString('en-US',{month: 'long'});
  var day = expenseDate.toLocaleString('en-US',{day: '2-digit'})
  const year = expenseDate.getFullYear();

  return (
    <div>
      <div className='date'>
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
      

      </div>
    </div>
  )
}

export default expense