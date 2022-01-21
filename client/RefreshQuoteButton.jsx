import React from 'react';

const RefreshQuoteButton = (props) => {
  const handleClick = () => {
    props.refresh();
  }

  return (
    <button onClick={handleClick}>Give me a new quote</button>
  )
}

export default RefreshQuoteButton;