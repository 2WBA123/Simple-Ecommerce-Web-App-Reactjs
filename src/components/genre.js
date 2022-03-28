import React, { Component } from 'react';
import { genres } from './genreData';
import ListGroup from 'react-bootstrap/ListGroup';

export default class Genre extends Component {

    render() {
        return (
           
            <div className="bg-white h-screen flex flex-col item-center">
               <div className="m-14 ">
              <ListGroup className="ListGroup">
              <ListGroup.Item  className="font-bold text-5xl">Genre</ListGroup.Item>
              {
                genres.map((val) => (<ListGroup.Item className="hover:text-blue-300" onClick={() => alert("Hi This is good movie watch it soon !!!")}>{val.name}</ListGroup.Item>))
              }
            </ListGroup>
          </div>
            </div>
        )
    }
}
