import React from 'react';
import "../App.css";
import Card from 'react-bootstrap/Card';
export default function Thanks(){
    return(
        <div className="App">
            <h1>Thanks</h1>
            <Card>
           <Card.Img variant="top" src="https://image.shutterstock.com/image-vector/hand-drawn-lettering-thankyou-decorative-260nw-1535896373.jpg"/>
          </Card>
        </div>
    );
}