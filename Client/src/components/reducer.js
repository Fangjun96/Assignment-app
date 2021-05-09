const initialState = {
  options: [],
  salesTotal: 0,
  payment: 0,
  changeDue: 0
}

export default function appReducer(state = initialState, action) {

    switch (action.type) {


      case 'FETCH_DATA_SUCCESS': {

        let index = state.options.findIndex(el => el.name === action.payload.name)
        if(index === -1){
          return {...state,   options: [...state.options, action.payload]}
        }

      }

      case 'ADD_QTY': {
  
        let index = state.options.findIndex(el => el.id === action.payload.id)
        let amount = action.payload.qty * parseInt(state.options[index].unitPrice)
        const optionsRep = [...state.options]
        optionsRep[index] = {...state.options[index], qty: action.payload.qty, amount:amount}
        return {...state, options: optionsRep, salesTotal: state.salesTotal} 

        }

      case 'TOTAL_SALES': {

        const sum = (accumulator, currentValue) => accumulator + currentValue;
        const amountList = []
        const objectList = [...state.options]
        objectList.map((element) => {
        if(element.amount){amountList.push(element.amount)}})
        const sales = amountList.reduce(sum, 0)
        return {...state,  salesTotal: sales}

    }
        

      case 'TRANSACTION_CALCULATION': {

        if(action.payload){
          var changeDue = parseInt(action.payload) - state.salesTotal
          return {...state, payment: parseInt(action.payload), changeDue: changeDue}
        } else {
            var changeDue = state.payment - state.salesTotal
            return {...state, changeDue: changeDue}
        }

      }

      case 'CLEAR_ALL': {
        return initialState  
      }

      default: return state
    }
  }









  