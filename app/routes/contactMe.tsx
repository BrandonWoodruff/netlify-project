import React, { useState } from 'react';
import Head from '~/components/_header';
import Foot from '~/components/_footer';
import { useNavigate } from 'react-router-dom'; // Import useHistory hook from react-router-dom package


const ContactMe: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const history = useNavigate(); // Initialize useHistory hook

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    fetch("/submit.php", {
      method: "POST",
      body: formData
    })
    .then(response => {
      if (response.ok) {
        console.log("Form successfully submitted");
        setName('');
        setEmail('');
        setMessage('');
        history.push('/thank-you'); // Redirect to Thank You page
      } else {
        throw new Error("Form submission failed");
      }
    })
    .catch(error => {
      console.error("Error submitting form:", error);
      // Handle error, show error message to user, etc.
    });
  };

  return (
    <div className="relative z-10 text-black text-center">
      <header><Head /></header>
      <h1 className="text-3xl font-bold text-white mb-4">Contact Me</h1>
      <br></br>
      <form name="contact" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-lg text-white mb-2">Your Name:</label>
          <input type="text" name="name" className="input-box" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="mb-4">
          <label className="block text-white text-lg mb-2">Your Email:</label>
          <input type="email" name="email" className="input-box" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-4">
          <label className="block text-white text-lg mb-2">Message:</label>
          <textarea name="message" className="input-box" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
        </div>
        <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded-lg text-lg hover:bg-green-600">Send</button>
      </form>
      <footer className='text-white'><Foot /></footer>
    </div>
  );
};

export default ContactMe;
