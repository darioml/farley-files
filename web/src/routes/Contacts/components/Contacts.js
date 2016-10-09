import React from 'react'

export const Counter = (props) => (
  <div style={{ margin: '0 auto' }} >
    <h2>Counter:</h2>
    <div>{props.contacts.map(item =>
      <div key={item.id}>{JSON.stringify(item)}</div>
    )}</div>
    <button className='btn btn-default' onClick={props.increment}>
      Increment
    </button>
    <button className='btn btn-default' onClick={props.fetch}>
      Fetch
    </button>
  </div>
)

Counter.propTypes = {
  contacts    : React.PropTypes.array.isRequired,
  increment   : React.PropTypes.func.isRequired,
  fetch       : React.PropTypes.func.isRequired
}

export default Counter
