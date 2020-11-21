import React, {useState} from 'react';





const Userprops = props => {
    // console.log('dewd', props)

    const [isEdit, setisEdit] = useState(false)
    const [inputText, setInputText] = useState(props.name)


    return(

        <li className="list-group-item text-capitalize d-flex justify-content-between my-2">

                {isEdit ? <input value={inputText}
                                 onChange={(event)=>
                                 {setInputText(event.target.value)}}/> : props.name }


            <div className="todo-icon">
                  <span className="mx-2 text-success">
                        <i className="fas fa-pen" onClick={()=>setisEdit(true)}>
                        </i>
                    </span>

                <span className="mx-2 text-success">
                        <i className="fas fa-home"
                           onClick={()=> {
                               props.MySub({inputText})
                               setisEdit(false)
                        }}>
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