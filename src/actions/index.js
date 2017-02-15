import axios from 'axios'
import {browserHistory} from 'react-router'

const URL = "http://localhost:3000/api/v1/"

export const createUser = (user) => {
  const response = axios.post(URL + 'signup', user).then((userData) => {
    sessionStorage.setItem("jwt", userData.data.jwt)
    sessionStorage.setItem("name", userData.data.name)
    browserHistory.push('/')
    return userData
  })

  return {
    type: 'CREATE_USER',
    payload: response
  }
}

export const fetchTransactions = (transaction) => {
  const response = axios.get(URL + 'transactions').then((transactionData) => {
    browserHistory.push('/transactions')
    return transactionData.data
  })

  return {
    type: 'FETCH_TRANSACTIONS',
    payload: response
  }
}


export const createTransaction = (transaction) => {
  const response = axios.post(URL + 'transactions', {transaction}).then((transactionData) => {
    return transactionData.data
  })

  return {
    type: 'CREATE_TRANSACTION',
    payload: response
  }
}


export const authenticateUser = (user) => {
  const response = axios.post(URL + 'signin', {user}).then((userData) => {
    if (userData.data.jwt) {
      sessionStorage.setItem("jwt", userData.data.jwt)
      browserHistory.push('/transactions')
      return userData.data.jwt
    } else {
      browserHistory.push('/login')
      return userData.data.message
    }
// if userData.data.status_code === 422 //signin
//     sessionStorage.setItem("name", userData.data.name)
  })
//

  return {
    type: 'AUTHENTICATE_USER',
    payload: response
  }
}
