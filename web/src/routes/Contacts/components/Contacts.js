import React from 'react'
import { ContactAdd } from './ContactForm'
import { Contact } from './ContactComponent'

export const Contacts = (props) => (
  <div style={{ margin: '0 auto' }} >
    <h2>Contacts</h2>
    <h2>Add</h2>
        <ContactAdd />
    <hr />
    <button className='btn btn-default' onClick={props.fetch}>
      Fetch
    </button>
    <hr />
    <div className='row'>
      <div className='col-xs-4'>{props.contacts.map(item =>
        <ContactSmall key={item.id} contact={item} onSelect={props.selectContact} />
      )}
      </div>
      {props.selectedContact && <div className='col-xs-8'>
        <Contact contact={props.selectedContact} />
      </div>}
    </div>
  </div>
)

const ContactSmall = (props) => {
  return (<div onClick={() => props.onSelect(props.contact.id)}>
    {`${props.contact.first_name} ${props.contact.last_name}`}
  </div>)
}

ContactSmall.propTypes = {
  contact: React.PropTypes.object.isRequired,
  onSelect: React.PropTypes.func.isRequired
}


Contacts.propTypes = {
  contacts    : React.PropTypes.array.isRequired,
  selectedContact: React.PropTypes.object,
  increment   : React.PropTypes.func.isRequired,
  fetch       : React.PropTypes.func.isRequired,
  selectContact: React.PropTypes.func.isRequired
}

export default Contacts
