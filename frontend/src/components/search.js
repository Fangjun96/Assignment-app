import React from 'react';
import Select from 'react-select'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import './table.css';
import {fetchDataAction} from './action'
import 'bootstrap/dist/css/bootstrap.css';

const options = [
    {label: "Fishing Rod", value: "3"}, 
    {label: "Air Pump", value: "2"}, 
    {label: "Fish Food", value: "1"}
]


const Search = () => {

    const dispatch = useDispatch()

    //Write a synchronous outer function that receives the `text` parameter:
    const fetchData = (option) => {
        
        //async thunk function 
        const fetchDataThunk = (dispatch, getState) => {
         //fetch data from server and dispatch an action with fetched data as parameter
         axios.get('api/findMatch/' + option.value).then(response => dispatch(fetchDataAction(response.data)))
         }
        return fetchDataThunk  
    }

    const handleChange = (option) => {
       const saveNewThunk = fetchData(option)
       dispatch(saveNewThunk)
    }
    
return (
    <Select options= {options} onChange = {handleChange} className="mt-4 col-md-8 col-offset-4" />
)

}
 
export default Search;


