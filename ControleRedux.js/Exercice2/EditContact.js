import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateContact } from "./actions";
import { useNavigate, useParams } from "react-router-dom";

export default function EditContact() {
  const { id } = useParams();
  const contact = useSelector((state) =>
    state.contacts.find((contact) => contact.id === parseInt(id))
  );
  const [name, setName] = useState(contact ? contact.name : "");
  const [phone, setPhone] = useState(contact ? contact.phone : "");
  const [email, setEmail] = useState(contact ? contact.email : "");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedContact = { id: contact.id, name, phone, email };
    if (!updatedContact.name || !updatedContact.phone || !updatedContact.email) {
      alert("All fields are required.");
      return;
    }
    dispatch(updateContact(updatedContact));
    navigate("/");
  };

  return (
    <div>
      <h1>Edit Contact</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <button type="submit">Update Contact</button>
      </form>
    </div>
  );
}
