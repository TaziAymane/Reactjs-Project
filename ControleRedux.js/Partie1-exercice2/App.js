import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ContactsList from "./ContactsList";
import AddContact from "./AddContact";
import EditContact from "./EditContact";

export default function App() {
  return (
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/add">Add Contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={<ContactsList />} />
          <Route path="/add" element={<AddContact />} />
          <Route path="/edit/:id" element={<EditContact />} />
        </Routes>
      </BrowserRouter>

  );
}
