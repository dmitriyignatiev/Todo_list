import React, {useEffect} from 'react';
import {gql, useMutation} from '@apollo/client';

// import { Query } from "react-apollo";
import {useQuery} from "@apollo/react-hooks";
import Userprops from "./Userprops";

import {DELETE_USER} from './AddUser';
import {client} from '../App'


export const allUSers = gql `
    {
      allUsers{
        edges{
          node{
            id
            name
          }
        }
      }
    }
`

const Users = () => {

    // const del = client.mutate({
    //     mutation:DELETE_USER,
    //     variables:{id:id},
    //     refetchQueries:[{query:allusers}]
    //     })
    //     .then((response) => console.log(response.data))



    const {loading, error, data} = useQuery(allUSers);
    if (loading) return <div>Fetching</div>
    if (error) return <div>Error</div>

    const allusers = data.allUsers.edges

    return allusers.map((item) => (

        <div key={item.node.id}>

            <Userprops
                name = {item.node.name}
                id = {item.node.id}
                delUser = {() => {
                    client.mutate({
                        mutation:DELETE_USER,
                        variables:{id:item.node.id},
                        refetchQueries:[{query:allUSers}]
                    })
                        .then((response) => console.log(response.data))
                        .catch((err) => console.error(err));
                }}
                EditUser = {() => {
                    console.log('id')}
                }
            />
        </div>

    ))

}


export default Users;