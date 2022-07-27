import React, { useState }  from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert'

const ReactBootstrap = () => {
    const [show, setShow] = useState(true);
  return(    
    
    <Card style={{width:"400px"}} className="p-1">
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>This card short description. This card short description. 
                This card short description. 
                This card short description. 
                This card short description. This card short description. 
            </Card.Text>
            <Button>Learn More</Button>
        </Card.Body>
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          Change this and that and try again. Duis mollis, est non commodo
          luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
          Cras mattis consectetur purus sit amet fermentum.
        </p>
      </Alert>      
      <Button onClick={() => setShow(true)}>Show Alert</Button>
    </Card>    

  ) 

  
}

export default ReactBootstrap
