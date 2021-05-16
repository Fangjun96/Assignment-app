import { useSelector, useDispatch } from 'react-redux'
import './table.css';
import {addAction, salesAction, transactionAction} from './action'


const Table = () => {
  const dispatch = useDispatch()
  var reduxStore = useSelector(state => state) 
  

  const changeHandler = (id, event) => {
    const qty = parseInt(event.target.value)
    const obj = {id, qty}
    dispatch(addAction(obj))
    dispatch(salesAction())
    dispatch(transactionAction())
  }


  const renderTableBody = () => {

    const tableData = []  
    reduxStore.options.map((element, i) => {
  
        tableData.push(
        <tr key = {i}>
          <td>{i+1}</td>
          <td>{element.name}</td>
          <td>{element.unitPrice}</td>
          <td><input type="number" min= "0" max = "50" placeholder="Qty" onChange = {(e) => changeHandler(element.id, e)} style={{margin: "5px 5px", width: "70px"}}/></td>
          <td>{element.amount}</td>
        </tr>
        )
      })
      return tableData
    }


  return ( 
  <table className = "table1">
    <thead>
        <tr>
            <th>No</th>
            <th>Name</th>
            <th>Unit Price</th>
            <th>Qty</th>
            <th>Line Total</th>
        </tr>
    </thead>
    <tbody>
      {renderTableBody()}
    </tbody>
</table>

);

}
 
export default Table;

