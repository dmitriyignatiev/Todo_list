import React, {Component} from 'react';

import { Query } from "react-apollo";
import gql from "graphql-tag";


const allUSers = gql `
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

                  const U = data.allUsers.edges
                  const userName =  U.map(item => {
                      return item.node.name

                  })
                  console.log(userName)


        return (
            <div>
                Users
            </div>
        )
              }}
          </Query>
        )
    }

}

export default Users;