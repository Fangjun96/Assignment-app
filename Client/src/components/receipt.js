import React, {useState} from 'react';
import Modal from 'react-modal'

Modal.setAppElement('#root')

function Receipt(props) {

  const [modalIsOpen, setModalIsOpen] = useState(false)

  const array = []
  const parameter = props.parameter

  const tableBody = () => {
    parameter.options.map((element, i) => {
      array.push(
        <tr key = {i}>
          <td>{i+1}</td>
          <td>{element.name}</td>
          <td>{element.unitPrice}</td>
          <td>{element.qty}</td>
          <td>{element.amount}</td>
        </tr>
      )
    })
    return array
  }

  return (
    <div className="App">
      <button className="button btn btn-secondary btn-lg" onClick = {() => {setModalIsOpen(true)}}>Previous Receipt</button>
      <Modal isOpen={modalIsOpen} onRequestClose = {() => setModalIsOpen(false)}>
        <h2>Receipt</h2>
        <p>Sales ID: {parameter._id}</p>
        <p>Date: {parameter.created_at}</p>
        <table className="table3">
        <thead>
        <tr>
            <th>No</th>
            <th>Name</th>
            <th>Unit Price</th>
            <th>Qty</th>
            <th>Line Total</th>
        </tr>
        {tableBody()}
    </thead>
    <tbody>
      <tr>
        <th colSpan="4" >Total</th>
        <td>{parameter.salesTotal}</td>
      </tr>
      <tr>
        <th colSpan="4">Payment Collected</th>
        <td>{parameter.payment}</td>
      </tr>
      <tr>
        <th colSpan="4">Change Due</th>
        <td>{parameter.changeDue}</td>
      </tr>
    </tbody>
        </table>
        <div>
          <button className="button btn btn-secondary btn-lg" onClick={()=> {setModalIsOpen(false)}}>Close</button>
        </div>
      </Modal>
    </div>
  );
}

export default Receipt;
