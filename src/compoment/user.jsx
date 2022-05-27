
import React from 'react'
import {Card,Col} from "react-bootstrap"
const User = ({el}) => {

  return (

    <Col  key={el.id}>
      <Card>
        <Card.Body>
          <Card.Title>{el.name}</Card.Title>
          <Card.Text>
          
            
         
            <div>{el.username}</div>
            <div>{el.email}</div>
            <div>{el.address.street}{el.address.suite}{el.address.zipcode}{el.address.geo.lat}{el.address.geo.lng}</div>
            <div>{el.phone}</div>
            <div>{el.company.name}{el.company.catchPhrase}{el.company.bs}</div>
     
     
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  
     
  
  )
}

export default User