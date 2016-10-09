import { username, password } from '../../../LoginDetails'

// ------------------------------------
// Constants
// ------------------------------------
export const ADD_CONTACT = 'ADD_CONTACT'
export const REQUEST_CONTACT = 'REQUEST_CONTACT'
export const FETCH_CONTACT = 'FETCH_CONTACT'
export const RECIEVE_CONTACT = 'RECIEVE_CONTACT'

// ------------------------------------
// Actions
// ------------------------------------
export function addContact (value) {
  return {
    type    : ADD_CONTACT,
    payload : value
  }
}

export function requestContacts (value) {
  return {
    type    : REQUEST_CONTACT
  }
}

export const fetchContacts = () => {
  return (dispatch) => {
    dispatch(requestContacts())

    fetch('http://localhost:8000/contacts/', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa(`${username}:${password}`)
      }
    })
    .then(data => data.json())
    .then(contact => dispatch(recieveContacts(contact)))
  }
}

export function recieveContacts (value) {
  return {
    type    : RECIEVE_CONTACT,
    payload : value
  }
}

export const actions = {
  addContact,
  requestContacts,
  fetchContacts,
  recieveContacts
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [REQUEST_CONTACT] : (state, action) => {
    return ({ ...state, fetching: true })
  },
  [RECIEVE_CONTACT] : (state, action) => {
    return ({ ...state, fetching:false, contacts: action.payload })
  },
  [ADD_CONTACT] : (state, action) => {
    return Object.assign({}, state, { contacts: [...state.contacts, action.payload] })
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  fetching: false,
  contacts: []
}
export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
