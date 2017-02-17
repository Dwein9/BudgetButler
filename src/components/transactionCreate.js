import React, {Component} from 'react'
import {connect} from 'react-redux'
import { createTransaction } from '../actions'

class TransactionCreate extends Component {

	constructor(props) {
		super(props)
		this.state = {transaction: {name: "", value: "", day: ""} } // NEED EXPENSE ID HERE ALSO
	}

	handleInputChange(key, event) {
   		this.setState({
   			transaction: Object.assign({}, this.state.transaction, {[key]: event.target.value} )
   		});
	}

	handleSubmit(event) {
		event.preventDefault()
		this.props.createTransaction( this.state.transaction )
		this.setState({transaction: {name: "", value: "", day: ""} })
	}

	render() {
		return(
			<div>
				<div className="col l3 m3 s3">
				<h3> Add A Transaction </h3>
				<form onSubmit={this.handleSubmit.bind(this)}>
					Name<input type='text' value={this.state.transaction.name} onChange={this.handleInputChange.bind(this, 'name')}/>
					Value <input type='number' value={this.state.transaction.value} onChange={this.handleInputChange.bind(this, 'value')}/>
					Date <input type='date' className="datepicker" value={this.state.transaction.day} onChange={this.handleInputChange.bind(this, 'day')}/>
					<button type="submit" >Submit </button>
				</form>
			</div>
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
