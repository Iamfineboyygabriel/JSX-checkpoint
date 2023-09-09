import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import './App.css'; // Import your CSS file
import Images from './../src/Images/ryan-hoffman-A7f7XRKgUWc-unsplash.jpg'

function App() {
  const [firstName, setFirstName] = useState(''); // State to store user's first name

  const handleInputChange = (event) => {
    setFirstName(event.target.value); // Update first name on input change
  };

  return (
    <div>
      <Card className='big'>
      <Card.Img variant="top" src={Images} />
        <Card.Body>
          <Card.Title> <h4>Name</h4> <Name /></Card.Title>
          <Card.Text>
           <h4>Description</h4><Description />
          </Card.Text>
          <Card.Text>
            <h4>Price</h4> <Price />
          </Card.Text>
          <Button variant="primary">Buy Now!</Button>
        </Card.Body>
      </Card>

      <div className="greeting">
        Hello, {firstName ? firstName : 'there'}!
        {firstName && <img src= {Images} alt="" />} 
      </div>

      <input
        type="text"
        placeholder="Enter your first name"
        value={firstName}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default App;
