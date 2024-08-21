const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            contacts: [],
            agenda_slug: "Michflorez",
            selected_id: null,
        },
        actions: {
            // Obtener todos los contactos
            getContacts: async () => {
                try {
                    const store = getStore();
                    const response = await fetch(`https://playground.4geeks.com/contact/agendas/${store.agenda_slug}`);
                    if (response.ok) {
                        const data = await response.json();
                        setStore({ contacts: data.contacts });
                    } else {
                        console.error("Failed to fetch contacts.");
                    }
                } catch (error) {
                    console.error("Error fetching contacts:", error);
                }
            },

            // Agregar un nuevo contacto
            addContact: async (contact) => {
                try {
                    const store = getStore();
                    contact.agenda_slug = store.agenda_slug;

                    const response = await fetch(`https://playground.4geeks.com/contact/agendas/${store.agenda_slug}/contacts`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(contact)
                    });

                    if (response.ok) {
                        getActions().getContacts();  // Refrescar la lista de contactos
                    } else {
                        console.error("Failed to add contact.");
                    }
                } catch (error) {
                    console.error("Error adding contact:", error);
                }
            },
            createAgenda: async () => {
                try {
                    const store = getStore();


                    const response = await fetch(`https://playground.4geeks.com/contact/agendas/${store.agenda_slug}`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify()
                    });

                    if (response.ok) {
                        response.json()
                    } else {
                        console.error("Failed to create agenda");
                    }
                } catch (error) {
                    console.error("Error creating agenda:", error);
                }
            },
            // Editar un contacto existente
            updateContact: async (contactId, name, phone, email, address) => {
                const store = getStore();
                try {
                    const response = await fetch(`https://playground.4geeks.com/contact/agendas/${store.agenda_slug}/contacts/${contactId}`, {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            name: name,
                            phone: phone,
                            email: email,
                            address: address,
                        })
                    });

                    if (response.ok) {
                        getActions().getContacts();  // Refrescar la lista de contactos
                    } else {
                        console.error("Failed to update contact.");
                    }
                } catch (error) {
                    console.error("Error updating contact:", error);
                }
            },

            // Eliminar un contacto
            deleteContact: async (contactId) => {
                const store = getStore();
                try {

                    const response = await fetch(`https://playground.4geeks.com/contact/agendas/${store.agenda_slug}/contacts/${contactId}`, {
                        method: 'DELETE'
                    });

                    if (response.ok) {
                        getActions().getContacts();  // Refrescar la lista de contactos
                    } else {
                        console.error("Failed to delete contact.");
                    }
                } catch (error) {
                    console.error("Error deleting contact:", error);
                }
            },

            selectedId: (id) => {
                const store = getStore()
                setStore({ ...store, selected_id: id })
            },

            // Función para obtener una imagen aleatoria
            fetchImage: async () => {
                try {
                    const response = await fetch('https://randomuser.me/api/');
                    const data = await response.json();
                    return data.results[0].picture.large;  // URL de la imagen
                } catch (error) {
                    console.error("Error fetching image:", error);
                    return null;
                }
            }

        }
    };
};

export default getState;
