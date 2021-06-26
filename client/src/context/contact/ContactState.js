import React , {useReducer} from 'react';
import axios from 'axios';
// import {v4 as uuid} from "uuid";
import ContactContext from './ContactContext';
import ContactReducer from './ContactReducer';
import { 
    GET_CONTACTS,
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_CONTACT,
    CLEAR_FILTER,
    CONTACT_ERROR
 } from "./../types";

 const ContactState = props => {

    const initialState = {
        contacts:null,
        current:{},
        filtered:null,
        error:null
    };

    const [state, dispatch] = useReducer(ContactReducer, initialState);


    //GET CONTACTS

    const getContacts =async ()=>{

        try{
            const res=await axios.get('/api/contacts');
            dispatch({type: GET_CONTACTS,payload: res.data});
        }catch(err){
            dispatch({type:CONTACT_ERROR, payload:err.response.msg});
        }
        
    }
    

    //add contact

    const addContact =async contact =>{
        const config={
            headers:{
                'Content-Type':'application/json'
            }
        }

        try{
            const res=await axios.post('/api/contacts',contact,config);
            dispatch({type: ADD_CONTACT,payload: res.data});
        }catch(err){
            dispatch({type:CONTACT_ERROR, payload:err.response.msg});
        }
        
    }


    //delete contact

    const deleteContact = async(id)=>{
        try{
            await axios.delete(`/api/contacts/${id}`);
            dispatch({type: DELETE_CONTACT,payload: id});
        }catch(err){
            dispatch({type:CONTACT_ERROR, payload:err.response.msg});
        }
        
    }
    

    //clear contacts

    const clearContacts = ()=>{
        dispatch({type: CLEAR_CONTACT});
    }


    //set current contact
    const setCurrent = contact =>{
        console.log(typeof(contact));
        dispatch({type:SET_CURRENT,payload: contact});
    }



    //clear current contact
    const clearCurrent = () =>{
        dispatch({type:CLEAR_CURRENT});
    }

    //update contact

    const updateContact = contact =>{
        dispatch({type:UPDATE_CONTACT,payload: contact});
    }


    //filter contact

    const filterContacts = text => {
        dispatch({type:FILTER_CONTACTS, payload:text});
    }


    //clear filter

    const clearFilter=()=>{
        dispatch({type:CLEAR_FILTER});
    }

    return (
        <ContactContext.Provider value={{
            contacts: state.contacts,
            current: state.current,
            filtered:state.filtered,
            error:state.error,
            getContacts,
            addContact,
            deleteContact,
            clearContacts,
            setCurrent,
            clearCurrent,
            updateContact,
            filterContacts,
            clearFilter  //access from other components
        }}>
            {props.children}    
        </ContactContext.Provider>
    )

 }

 export default ContactState;

