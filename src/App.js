import React, {Component} from 'react';
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import Users from "./components/Users";
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

import 'bootstrap/dist/css/bootstrap.min.css';
import { v4 as uuidv4 } from 'uuid';

const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql'
});


class App extends Component {

    state={
        items:[],
        id: uuidv4(),
        item:'',
        editItem:false
    }

    handleChange = e => {
        this.setState({
            item: e.target.value

        })
        console.log('state is ', this.state)
    };
    handleSubmit = e => {
        e.preventDefault();

        const newItem = {
            id:this.state.id,
            title: this.state.item
        }

        console.log("sdsds", newItem)

        const updateItems = [...this.state.items, newItem];
        this.setState({
            items:updateItems,
            item:"",
            id: uuidv4(),
            editItem:false
        })

    };

    clearList = () => {
        this.setState({
            items:[]
        })
    };

    handleDelete = (id) => {
        const filteredItems = this.state.items.filter(item => item.id !== id)


        this.setState({
            items: filteredItems,


        })
    };

    handleEdit = id => {
        const filteredItems =   this.state.items.filter(item => item.id !== id)
        const selectedItem = this.state.items.find(item => item.id === id)
        this.setState({
            items: filteredItems,
            item:selectedItem.title,
            editItem:true,
            id: id
        })

    };




    render() {
        return (
            <ApolloProvider client={client}>
                <div className="container">
                    <div className="class">
                        <div className="col-10 mx-auto col-md-8 mt-4">
                            <h3 className="text-capitalize text-center">
                                todo input
                            </h3>
                            <TodoInput item={this.state.item}
                                       handleChange={this.handleChange}
                                       handleSubmit={this.handleSubmit}
                                       editItem={this.state.editItem}
                            />
                            <TodoList
                                items={this.state.items}
                                clearList={this.clearList}
                                handleDelete={this.handleDelete}
                                handleEdit={this.handleEdit}

                            />
                            <Users/>
                        </div>
                    </div>
                </div>
            </ApolloProvider>
        );
    }
}

export default App;