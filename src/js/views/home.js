import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../store/appContext';
import ContactCard from '../component/ContactCard';
import { useHistory } from "react-router-dom";

const Home = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        actions.createAgenda();
        actions.getContacts();  
       

    }, []);

    const handleDelete = async (contactId) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this contact?");
        if (confirmDelete) {
            await actions.deleteContact(contactId);
        }
    };

    return (
        <div className="container">
            <div className="d-flex justify-content-between my-4">
                <h1>Contact List</h1>
                <Link to="/add-contact">
				
				
                Add New Contact
        
                </Link>
            </div>
            <div className="row">
                
                 {store.contacts.map((contact) => (
                    
                        <ContactCard
                            contact={contact}
                            onDelete={ handleDelete(contact.id)}
                            onEdit={() => navigate(`/edit-contact/${contact.id}`)}
                        />
                    
                ))}
            </div>
        </div>
    );
};

export default Home;
