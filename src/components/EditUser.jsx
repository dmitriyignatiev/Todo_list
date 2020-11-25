import React from 'react';
import {useSubscription} from "@apollo/react-hooks";
import gql from "graphql-tag";

const newSeconds = gql`
    subscription count($upTo: Int){
    countSeconds(upTo: $upTo)
    }
`

const EditUser = () => {
    const {data, error, loading} = useSubscription(newSeconds, {upTo: 100});

    if (loading) {
        return <div>loading....</div>
    }

    if (error) {
        return <div>Error {error.message}</div>
    }

    console.log(data)

    return (
        <div>

        </div>
    )
}

export default EditUser;