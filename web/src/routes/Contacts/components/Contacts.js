import React from 'react'

const ContactSmall = (props) => {
  return (<div onClick={() => props.onSelect(props.contact.id)}>
    {`${props.contact.first_name} ${props.contact.last_name}`}
  </div>)
}

const Contact = (props) => {
  // <div>{JSON.stringify(props.contact)}</div>

  return <div>
    <h2>{props.contact.first_name} <b>{props.contact.last_name}</b></h2>
    <div>Birthday: {props.contact.birthday}</div>
    <div>Phone Number: {props.contact.phone_number}</div>
    <hr />
    Child Contacts:
    <div>{props.contact.child_contact.map(item =>
      <div>{item}</div>
    )}
    </div>
  </div>
}

export const Contacts = (props) => (
  <div style={{ margin: '0 auto' }} >
    <h2>Contacts</h2>
    <button className='btn btn-default' onClick={props.fetch}>
      Fetch
    </button>
    <hr />
    <div className='row'>
      <div className='col-xs-4'>{props.contacts.map(item =>
        <ContactSmall key={item.id} contact={item} onSelect={props.selectContact} />
      )}
      </div>
      <div className='col-xs-8'>
        <Contact contact={props.selectedContact} />
      </div>
    </div>
  </div>
)

ContactSmall.propTypes = {
  contact: React.PropTypes.object.isRequired,
  onSelect: React.PropTypes.func.isRequired
}

Contact.propTypes = {
  contact: React.PropTypes.object.isRequired
}

Contacts.propTypes = {
  contacts    : React.PropTypes.array.isRequired,
  selectedContact: React.PropTypes.object.isRequired,
  increment   : React.PropTypes.func.isRequired,
  fetch       : React.PropTypes.func.isRequired,
  selectContact: React.PropTypes.func.isRequired
}

export default Contacts
