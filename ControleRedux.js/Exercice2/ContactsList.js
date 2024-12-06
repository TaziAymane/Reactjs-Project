import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, filterContacts } from "./actions";
import { Link } from "react-router-dom";

export default function ContactsList() {
  const [searchQuery, setSearchQuery] = useState("");
  const contacts = useSelector((state) =>
    state.filteredContacts.length > 0 ? state.filteredContacts : state.contacts
  );
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    dispatch(filterContacts(query));
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      dispatch(deleteContact(id));
    }
  };

  return (
    <div>
      <h1>Contacts</h1>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search by name"
      />
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <strong>{contact.name}</strong> - {contact.phone} - {contact.email}
            <Link to={`/edit/${contact.id}`}> Edit </Link>
            <button onClick={() => handleDelete(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
