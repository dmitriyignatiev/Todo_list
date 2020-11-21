import React from "react";
import {allUSers, UpdateUser} from "./Users";
import {DELETE_USER} from './AddUser';

import {useQuery} from "@apollo/react-hooks";
import UserOne from "./UserOne";
import {del3, newUpdate} from './mutation'



const All = () => {

    const {loading, error, data} = useQuery(allUSers);
    if(loading) return <div>loading</div>;
    if(error) return  <div>Error</div>;

    const alle = data.allUsers.edges;


    const edit = (id) => {
        console.log(id)
    }

    return alle.map((item) => (
        <div key={item.node.id}>

            <UserOne
                name={item.node.id}
                delNewUser = {()=>{del3(item.node.id)}}


                SuperSub = {({inputText})=>{
                    newUpdate(item.node.id, inputText)

                }}
            />


        </div>
    ))

}

export default All;