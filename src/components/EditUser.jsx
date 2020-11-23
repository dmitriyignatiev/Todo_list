import React from 'react';
import {COUNT} from './mutation'
import {useSubscription} from "@apollo/react-hooks";
import {Subscription} from "react-apollo";
import gql from "graphql-tag";

const newSeonds = gql`
    subscription count($upTo: Int){
    countSeconds(upTo:$upTo)
    }
`

const EditUser = () => {
    return (
        <Subscription
            subscription={newSeonds}
            variables={{upTo: 5}}
        >
            //TODO subscription
         {(data) => {
                console.log(data)
                return null;
            }}


        </Subscription>
       
    )
}

export default EditUser;