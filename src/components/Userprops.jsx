import React from 'react';



const Userprops = props => {
    // console.log('dewd', props)



    return(

        <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                {props.id} - {props.name}
            <div className="todo-icon">
                  <span className="mx-2 text-success">
                        <i className="fas fa-pen" onClick={props.EditUser}>
                        </i>
                    </span>

                <span className="mx-2 text-danger">
                        <i className="fas fa-trash" onClick={props.delUser}>
                        </i>
                </span>
            </div>
        </li>

    )
}

export default Userprops;