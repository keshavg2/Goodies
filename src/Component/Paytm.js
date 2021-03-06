import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
export default class Paytm extends Component{
    constructor() {
        super();
        this.state = {
          input: '',
        };
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({
            input:event.target.value
        });
    }

    isDisabled(){
        let isValid=false;
        let input=this.state.input;
        if (typeof input !== "undefined") {
              
            var pattern = new RegExp(/^\+91?[0-9-]+$/);
            if (!pattern.test(input)) {
              isValid = true;
            }else if(input.length !== 13){
                isValid=true;
            }
          }
         //console.log(isValid);
       return isValid;
    }
    handleSubmit(){
       const { input } = this.state;
       localStorage.setItem('input',input);
    }

    componentDidMount() {
        const input= localStorage.getItem('input');
        this.setState({input});
    }

    render(){
    return(
    <div style={{textAlign:'center'}}>
        <h2>Man matters</h2>
         <h3>Congratulations</h3>
         <Card className="text-center">
           <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK2JPdZff_eehLI2N-CEcaGGnSIl_5MnQw8w&usqp=CAU" />
           <Card.Text>
           You have won the paytm giftcard of Rs200 for
           placing the order on man matters
           </Card.Text>
         </Card>
         <div class="form-group">
            <input style={{borderRadius:'30px'}}
              type="text"
              value={this.state.input}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter phone" 
              id="email" />
          </div>
        <Link to='/Thanks' style={{textDecoration:'none',borderRadius:'30px',}}>
        <Button onClick={this.handleSubmit} disabled={this.isDisabled()}>Wow! get my gift card</Button> 
        </Link>
    </div>
    );
}
}
