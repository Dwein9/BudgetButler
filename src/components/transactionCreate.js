import React, {Component} from 'react'
import {connect} from 'react-redux'
import { createTransaction } from '../actions'

class TransactionCreate extends Component {

	constructor(props) {
		super(props)
		this.state = {transaction: {name: "", value: "", date: ""} } // NEED EXPENSE ID HERE ALSO 
	}

	handleInputChange(key, event) {
   		this.setState({ 
   			transaction: Object.assign({}, this.state.transaction, {[key]: event.target.value} )
   		});
	}

	handleSubmit(event) {
		event.preventDefault()
		this.props.createTransaction( this.state.transaction )
		this.setState({transaction: {name: "", value: "", date: ""} })
	}

	render() {
		return(
			<div>
				<h3> Add a transaction </h3>
				<form onSubmit={this.handleSubmit.bind(this)}> 
					Name<input type='text' value={this.state.transaction.name} onChange={this.handleInputChange.bind(this, 'name')}/>
					Value <input type='text' value={this.state.transaction.value} onChange={this.handleInputChange.bind(this, 'value')}/>
					Date <input type='text' value={this.state.transaction.date} onChange={this.handleInputChange.bind(this, 'date')}/>
					<button type="submit" >Submit </button>
				</form> 
			</div>

		)
	}

}


function mapDispatchToProps(dispatch) {
  return {
    createTransaction: function(transaction){
      let action = createTransaction( transaction )
      dispatch( action )
    }
  }
}

export default connect(null, mapDispatchToProps)(TransactionCreate)