import React, {useState} from 'react';
import './table.css';
import axios from 'axios'
import {transactionAction, clearAction} from './action'
import Receipt from './receipt'
import { useDispatch, useSelector } from 'react-redux'


const CashRegister = () => {
    const [state, setState] = useState()
    const [params, setParams] = useState()

    const dispatch = useDispatch()
    var reduxStore = useSelector(state => state) 

    const changeHandler = (event) => {
        setState(event.target.value)
        dispatch(transactionAction(event.target.value))
    }

    const renderButton = () => {
        var submitButton = ""
        if(state){
        if(reduxStore.changeDue >= 0){
            return submitButton = <input className="button btn btn-primary btn-lg" type = 'submit' />
        }
    }
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        axios.post('api/processSales', reduxStore).then(
            (response) => {setParams(response.data)
            console.log(response.data)},  
            (error) => {console.log(error)})

        //Clearing all field upon submit
        dispatch(clearAction())
        setState("")
    }

    const renderReceipt = () => {
        let receipt;
        if (params){receipt = <Receipt parameter = {params}/>}
        else {receipt = null}
        return receipt
        }

    return (
        <div>
        <form onSubmit={onSubmitHandler}>
        <table className = "table2">
            <thead>
                <tr>
                    <th>Sales Total</th>
                    <td>{reduxStore.salesTotal}</td>
                </tr>
                <tr>
                    <th>Amount Collected</th>
                    <td><input type = 'number' placeholder = "Payment" onChange = {changeHandler} value = {state}/></td>
                </tr>
                <tr>
                    <th>Change due</th>
                    <td>{reduxStore.changeDue}</td>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
            {renderButton()}
        </form>
            {renderReceipt()}
        </div>
        );
}
 
export default CashRegister;

