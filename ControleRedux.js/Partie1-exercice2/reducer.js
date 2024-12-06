const initialState = {
  contacts: [],
  filteredContacts: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return { ...state, contacts: [...state.contacts, action.payload] };

    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter((contact) => contact.id !== action.payload),
        filteredContacts: state.filteredContacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };

    case "UPDATE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        ),
      };

    case "FILTER_CONTACTS":
      return {
        ...state,
        filteredContacts: state.contacts.filter((contact) =>
          contact.name.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };

    default:
      return state;
  }
};

export default reducer;
