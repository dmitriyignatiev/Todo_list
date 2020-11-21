import Recat from 'react';
import {client} from "../App";
import {DELETE_USER} from "./AddUser";
import {allUSers, UpdateUser} from "./Users";

export const del3 = (id) => {
    client.mutate({
        mutation:DELETE_USER,
        variables:{id},
        refetchQueries:[{query:allUSers}]
    })
        .then((response) => console.log(response.data))
        .catch((err) => console.error(err));
}

export const newUpdate = (id, name) => {
    client.mutate({
        mutation: UpdateUser,
        variables:{id, name},
        refetchQueries: [{query: allUSers}]
    })
}
