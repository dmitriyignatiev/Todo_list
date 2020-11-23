import React, {useEffect} from 'react';
import {gql, useMutation} from '@apollo/client';

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

export const UpdateUser = gql`
mutation update($id: Int, $name:String){
  updateUser(id:$id, name:$name){
    ok
  }
}
`

const Users = () => {

    const del2 = (id) => {
        client.mutate({
            mutation:DELETE_USER,
            variables:{id:id},
            refetchQueries:[{query:allusers}]
        })
            .then((response) => console.log(response.data))
            .catch((err) => console.error(err));
    }



    const {loading, error, data} = useQuery(allUSers);
    if (loading) return <div>Fetching</div>
    if (error) return <div>Error</div>

    const allusers = data.allUsers.edges

    return allusers.map((item) => (

        <div key={item.node.id}>

            <Userprops
                name = {item.node.name}
                id = {item.node.id}
                // delUser = {()=>del2(item.node.id)}
                delUser = {() => {
                    client.mutate({
                        mutation: DELETE_USER,
                        variables: {id: item.node.id},
                        refetchQueries: [{query: allUSers}]
                    })
                        .then((response) => console.log(response.data))
                        .catch((err) => console.error(err));
                }}

                MySub = {({inputText}) => {
                    client.mutate({
                        mutation: UpdateUser,
                        variables: {id: item.node.id, name: inputText},
                        refetchQueries: [{query: allUSers}]
                    })
                        .then((response) => console.log(response.data))
                        .catch((err) => console.error(err));
                }}


            />
        </div>

    ))

}


export default Users;