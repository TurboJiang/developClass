import React, { Component } from 'react'
import { connect } from 'react-redux'

class Filter extends Component {
    state = {}
    render() {
        const { toggleType, filterType } = this.props
        return (
            <div>
                filter:
                <button
                    onClick = {()=>{toggleType('ALL')}}
                    style={{ color: filterType == 'ALL' && 'purple' }}>all</button>
                <button 
                    onClick = {()=>{toggleType('ACTIVE')}}
                    style={{ color: filterType == 'ACTIVE' && 'pink' }}>active</button>
                <button 
                    onClick = {()=>{toggleType('COMPLETED')}}
                    style={{ color: filterType == 'COMPLETED' && 'orange' }}>completed</button>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    filterType: state.filterType
})
const mapDispatchToProps = (dispatch) => {
    return {
        toggleType: type => dispatch({ type })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Filter)