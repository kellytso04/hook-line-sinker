import React from 'react';
import Message from './levelOne/Message.jsx';
import Clock from './levelOne/Clock.jsx';

/*
Note 1: If you're not deconstructing your props, please start!
That way you don't have to write `props.prop` for each one,
and it greatly improves the readability of your code.

Note 2: You'll notice that this component does not contain a `return` statement;
that's because if we use parentheses to open the component instead of curly braces,
you can completely omit the `return` statement.
Remember that this only works when your component is ONLY returning something.
It won't work if you have any methods inside!
*/

const App = ( {samplePhrases} ) => (
  <div className='app'>
    <Message samplePhrases={samplePhrases} />
    <Clock />
  </div>
)

export default App;