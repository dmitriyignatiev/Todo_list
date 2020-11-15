import React, {Component} from 'react';
import { gql} from '@apollo/client';

import { Query } from "react-apollo";



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

class Users extends Component {

    render() {

        return (

          <Query query={allUSers}>

              {({ loading, error, data }) => {
                  if (loading) return <div>Fetching</div>
                  if (error) return <div>Error</div>


        return  data.allUsers.edges.map((item) => (


            <div key={item.node.id}>

                {`${item.node.name} ${item.node.id}`}

            </div>

        ))
              }}
          </Query>
        )
    }

}

export default Users;