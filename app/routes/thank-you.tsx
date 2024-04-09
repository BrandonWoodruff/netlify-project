import React from 'react';
import Head from '~/components/_header';
import Foot from '~/components/_footer';

const ThankYou: React.FC = () => {
  return (
    <div className="relative z-10 text-black text-center">
      <header><Head /></header>
      <h1 className="text-3xl font-bold text-white mb-4">Thank You!</h1>
      <p className="text-white">Your form has been successfully submitted. We'll get back to you shortly.</p>
      <p className="text-white">In the meantime, feel free to email me at <a mailto="brandonwoodywoodruff@gmail.com">brandonwoodywoodruff@gmail.com</a>.</p>
      <br></br>
      <footer className='text-white'><Foot /></footer>
    </div>
  );
};

export default ThankYou;
