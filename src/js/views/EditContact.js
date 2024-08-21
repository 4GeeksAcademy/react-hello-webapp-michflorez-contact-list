import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";
import Home from "./home";

const EditContact = () => {
    const navigate = useNavigate()
    const { actions,store } = useContext(Context);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [contactEdit, setContactEdit] = useState(null);
    useEffect(()=>{
       const contactToEdit =  store.contacts.find(contact => contact.id == store.selected_id)
       setContactEdit(contactToEdit)
       console.log(contactToEdit);

    },[store.selected_id]) 
    useEffect(()=>{
        if(contactEdit){
            setName(contactEdit.name || '');
            setEmail(contactEdit.email || '');
            setPhone(contactEdit.phone || '');
            setAddress(contactEdit.address || '');
        }
 
     },[contactEdit]) 
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        actions.updateContact(store.selected_id,name,phone,email,address);
        navigate("/")
    };


    return (
        <div>
            <h1>Edit contact</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default EditContact;

