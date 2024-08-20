import React from 'react';
import PropTypes from 'prop-types';

const ContactCard = ({ contact, onDelete, onEdit }) => {
    return (
        <div className="card mb-3">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src="https://scontent-bcn1-1.xx.fbcdn.net/v/t39.30808-6/453738583_1018442132979524_8159170477329578552_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=td3oNKF3964Q7kNvgHDYz8t&_nc_ht=scontent-bcn1-1.xx&oh=00_AYACGWKZbaBQNElAiVJhTQrexg1PEZveuvzK-ip6e8nDKA&oe=66CA980B" alt="Contact Avatar" className="card-img" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{contact.name}</h5>
                        <p className="card-text"><i className="fas fa-envelope"></i> {contact.email}</p>
                        <p className="card-text"><i className="fas fa-phone"></i> {contact.phone}</p>
                        <p className="card-text"><i className="fas fa-map-marker-alt"></i> {contact.address}</p>
                        <div className="d-flex justify-content-between">
                            <button className="btn btn-primary" onClick={onEdit}>
                                <i className="fas fa-edit"></i> Edit
                            </button>
                            <button className="btn btn-danger" onClick={onDelete}>
                                <i className="fas fa-trash-alt"></i> Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

ContactCard.propTypes = {
    contact: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired
};

export default ContactCard;
