export const addContact = (contact) => ({
  type: "ADD_CONTACT",
  payload: contact,
});

export const deleteContact = (id) => ({
  type: "DELETE_CONTACT",
  payload: id,
});

export const updateContact = (contact) => ({
  type: "UPDATE_CONTACT",
  payload: contact,
});

export const filterContacts = (query) => ({
  type: "FILTER_CONTACTS",
  payload: query,
});
