import React, {useState} from 'react'
import EditUser from "./EditUser";


const UserOne = (props) => {

    const [newEdit, setnewEdit] = useState(false)
    const [inputText, setInputtext] = useState(props.name)

    return (
        <li className="list-group-item text-capitalize d-flex justify-content-between my-2">

            {newEdit ?
                <input
                    value={inputText}
                    onChange={(event) =>
                                    setInputtext(event.target.value)}


                />
                    :props.name}


            <div className="todo-icon">
            <span className="mx-2 text-success">
              <i className="fas fa-pen"
                 onClick={()=> {
                     setnewEdit(true)
                    }
                     // TODO how to show inputtext or any other arguments when props
                     // from another
                   }
              >
              </i>
            </span>

                <span className="mx-2 text-success">
                        <i className="fas fa-home"
                           onClick={()=> {
                               props.SuperSub({inputText})
                               setnewEdit(false)
                           }}>
                        </i>
                    </span>

            <span className="mx-2 text-danger">
                        <i className="fas fa-trash" onClick={props.delNewUser}>
                        </i>
            </span>

        </div>
        </li>
    )
}

export default UserOne