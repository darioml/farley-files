import { username, password } from '../../../LoginDetails'

// ------------------------------------
// Constants
// ------------------------------------
export const REQUEST_CONTACT = 'REQUEST_CONTACT'
export const FETCH_CONTACT = 'FETCH_CONTACT'
export const RECIEVE_CONTACT = 'RECIEVE_CONTACT'
export const SELECT_CONTACT = 'SELECT_CONTACT'

export function requestContacts (value) {
  return {
    type    : REQUEST_CONTACT
  }
}

export function selectContact (id) {
  return {
    type: SELECT_CONTACT,
    payload: id
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
  requestContacts,
  fetchContacts,
  recieveContacts,
  selectContact
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
  [SELECT_CONTACT] : (state, action) => {
    return ({ ...state, selectedContact: action.payload })
  }
  // [ADD_CONTACT] : (state, action) => {
  //   return Object.assign({}, state, { contacts: [...state.contacts, action.payload] })
  // }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  fetching: false,
  contacts: [],
  selectedContact: 0
}
export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
