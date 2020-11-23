import React from 'react';
import {COUNT} from './mutation'
import {useSubscription} from "@apollo/react-hooks";

const EditUser = () => {


        const { loading, error, data } = useSubscription(COUNT);
        if (loading) {
            return <span>Loading...</span>;
        }
        if (error) {
            return <span>Error</span>;
        }





    return (
        <div>
            UserEdit
            {data}





        </div>
    )
}

export default EditUser;