import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import TransactionList from './transactionList'
import TransactionCreate from './transactionCreate'

export default class Transaction extends Component {

  render(){
    return(
      <div>
        <div className="row">
        <TransactionCreate />
        <TransactionList />
      </div>
    </div>
    )
  }
}
