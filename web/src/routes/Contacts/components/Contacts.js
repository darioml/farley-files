import React from 'react'

const ContactSmall = (props) => {
  return <div>{`${props.contact.first_name} ${props.contact.last_name}`}</div>
}

const Contact = (props) => {
  return <div>{JSON.stringify(props.contact)}<hr /></div>
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
        <ContactSmall key={item.id} contact={item} />
      )}
      </div>
      <div className='col-xs-8'>
        <div>{props.contacts.map(item =>
          <Contact key={item.id} contact={item} />
        )}</div>
      </div>
    </div>
  </div>
)

ContactSmall.propTypes = {
  contact: React.PropTypes.object.isRequired
}

Contact.propTypes = {
  contact: React.PropTypes.object.isRequired
}

Contacts.propTypes = {
  contacts    : React.PropTypes.array.isRequired,
  increment   : React.PropTypes.func.isRequired,
  fetch       : React.PropTypes.func.isRequired
}

export default Contacts
