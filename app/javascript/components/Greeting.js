import React, { useEffect, useReducer } from 'react';

const initialState = {
  greeting: ''
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'setGreeting':
      return { ...state, greeting: action.payload };
    default:
      throw new Error();
  }
};

function fetch_greeting() {
  return fetch('http://127.0.0.1:3000/api/greetings/random')
    .then(response => response.json())
    .then(data => data.greeting);
}

const Greeting = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch_greeting().then(greeting => {
      dispatch({ type: 'setGreeting', payload: greeting });
    });
  }, []);

  return (
    <div>
                      <h1>Greeting message:  {state.greeting}</h1>
    </div>
    
       );
};

export default Greeting;
