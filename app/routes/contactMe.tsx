import React, { useState } from 'react';
import Head from '~/components/_header';
import Foot from '~/components/_footer';

const ContactMe: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted!');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Submit form
    const myForm = e.target as HTMLFormElement;
    const formDataToSend = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formDataToSend).toString(),
    })
    .then(() => {
      console.log("Form successfully submitted");
      setSubmitted(true); // Set submitted state to true
    })
    .catch((error) => alert(error));
  };

  if (submitted) {
    return (
      <div className="relative z-10 text-black text-center">
        <header><Head /></header>
        <h1 className="text-3xl font-bold text-white mb-4">Thank You!</h1>
        <p className="text-white">Your message has been successfully submitted.</p>
        <footer className='text-white'><Foot /></footer>
      </div>
    );
  }

  return (
    <div className="relative z-10 text-black text-center">
      <header><Head /></header>
      <h1 className="text-3xl font-bold text-white mb-4">Contact Me</h1>
      <br></br>
      <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
        <input type="hidden" name="form-name" value="contact" />
        <div className="mb-4">
          <label className="block text-lg text-white mb-2">Your Name:</label>
          <input type="text" name="name" className="input-box" onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="mb-4">
          <label className="block text-white text-lg mb-2">Your Email:</label>
          <input type="email" name="email" className="input-box" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-4">
          <label className="block text-white text-lg mb-2">Message:</label>
          <textarea name="message" className="input-box" onChange={(e) => setMessage(e.target.value)}></textarea>
        </div>
        <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded-lg text-lg hover:bg-green-600">Send</button>
      </form>
      <footer className='text-white'><Foot /></footer>
    </div>
  );
};

export default ContactMe;
