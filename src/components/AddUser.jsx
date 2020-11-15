import React, { useState} from 'react';
import gql from "graphql-tag";
import {useMutation} from "@apollo/react-hooks";
import {allUSers} from './Users';

const ADD_USER = gql`
   mutation createU($name: String){
  createUser(name: $name){
    ok
    user{
      id
      name
    }
  }
}
`;


const AddUser = () => {

    const [userInput, setUserInput] = useState('')

    const updateCache = (cache, {data}) =>
    {
        const existingUsers = cache.readQuery({
            query: allUSers
        });

        // const newUser = data.insert_user.returnin

    }



    const [addUser] = useMutation(ADD_USER, {update: updateCache});

    return (
        <form
            className="formInput" onSubmit= { (e) => {
            e.preventDefault()
            addUser({variables:{name:userInput}})
        }}

        >
            <input
                className="input"
                placeholder="What needs to be done?"
                value={userInput}
                onChange={e => (setUserInput(e.target.value))}
            />
            <i className="inputMarket fa fa-angle-right" />
        </form>
    )
}




export default AddUser;