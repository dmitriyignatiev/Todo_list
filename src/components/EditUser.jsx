import React, {useState, useEffect} from 'react';
import {useSubscription} from "@apollo/react-hooks";
import gql from "graphql-tag";

const newSeconds = gql`
    subscription count($upTo: Int){
        countSeconds(upTo: $upTo)
    }
`

const EditUser = () => {

    const {data, error, loading} = useSubscription(newSeconds, {variables:{
             upTo:7
        }});

    const [count, setCount] = useState(0)

    useEffect(() => {
        if (data && data.countSeconds){
            setCount(data.countSeconds)
        }

    }, [data])


    if (loading) {
        return <div>loading....</div>
    }

    if (error) {
        return <div>Error {error.message}</div>
    }


    return (
        <div>
            Count is {count}
        </div>
    )
}

export default EditUser;