import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "./actions";
import { useNavigate } from "react-router-dom";

export default function AddContact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      id: Date.now(),
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim(),
    };
    if (!newContact.name || !newContact.phone || !newContact.email) {
      alert("All fields are required.");
      return;
    }
    dispatch(addContact(newContact));
    navigate("/");
  };

  return (
    <div>
      <h1>Add Contact</h1>
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
        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
}
