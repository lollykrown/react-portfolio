import React from 'react';
import Typewriter from 'typewriter-effect';


const TypeWriter = ({ texts }) => (
  <Typewriter
    options={{
      strings: texts,
      autoStart: true,
      cursor: '!',
      loop: false,
      deleteSpeed: 50,
    }}
  />
);

export default TypeWriter;