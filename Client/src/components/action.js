export function fetchDataAction (data) {
    return {
      type: 'FETCH_DATA_SUCCESS',
      payload: data
    }
  }

export function addAction (data){
    return {
      type: 'ADD_QTY',
      payload: data
    }
  }

export function salesAction () {
    return {
      type: 'TOTAL_SALES',
      payload: ""
    }
  }

export function transactionAction (data = null){
    return {
      type: 'TRANSACTION_CALCULATION',
      payload: data
    }
  }

export function clearAction (){
    return {
      type: 'CLEAR_ALL',
      payload: ""
    }
  }






