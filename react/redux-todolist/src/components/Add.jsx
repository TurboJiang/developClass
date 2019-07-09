import React, { Component } from 'react'

export class Add extends Component {
    handleAddToList = () => {

    }
    render() {
        let generateID = 1
        const { dispatch } = this.props;
        return (
            <div>
                <form onSubmit={ e => {
                    e.preventDefault()
                    if (this.inputNode.value.trim()) {
                        generateID++;
                        dispatch({
                            type: 'ADD_TODO',
                            id: generateID,
                            text: this.inputNode.value.trim()
                        })
                    }
                } }>
                </form>
                <input type="text" ref={ node => this.inputNode = node } style={ { marginLeft: '10px' } } />
                <button onClick={ this.handleAddToList } type="submit">add</button>
            </div>
        )
    }
}

export default Add
