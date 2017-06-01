import React from 'react'

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

class ContactAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            birthday: undefined,
            phone_number: '',
            notes: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.save = this.save.bind(this);
    }

    save() {
        fetch('http://localhost:8000/contacts/', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + btoa('darioml:latios1994')
          },
          body: JSON.stringify(this.state)
      }).then(() => {
          this.setState({
              first_name: '',
              last_name: '',
              birthday: '',
              phone_number: '',
              notes: ''
          })
      })
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : (target.value === '') ? undefined : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div>
                <div className="form-group">
                    <label className="col-sm-2 control-label">First name</label>
                    <div className="col-sm-10">
                        <input
                            name="first_name"
                            className="form-control"
                            type="text"
                            onChange={this.handleInputChange}
                            value={this.state.first_name}/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-2 control-label">Last name</label>
                    <div className="col-sm-10">
                        <input
                            name="last_name"
                            className="form-control"
                            type="text"
                            onChange={this.handleInputChange}
                            value={this.state.last_name}/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-2 control-label">Birthday</label>
                    <div className="col-sm-10">
                        <input
                            name="birthday"
                            className="form-control"
                            type="date"
                            onChange={this.handleInputChange}
                            value={this.state.birthday}/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-2 control-label">Phone Number</label>
                    <div className="col-sm-10">
                        <input
                            name="phone_number"
                            className="form-control"
                            type="text"
                            onChange={this.handleInputChange}
                            value={this.state.phone_number}/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-2 control-label">Notes</label>
                    <div className="col-sm-10">
                        <textarea
                            name="notes"
                            className="form-control"
                            type="text"
                            onChange={this.handleInputChange}
                            value={this.state.notes}></textarea>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12 text-right">
                        <button className="btn btn-default" onClick={this.save}>Save</button>
                    </div>
                </div>
            </div>
        );
    }

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
      <div key={item.id}>{item}</div>
    )}
    </div>
  </div>;
}


ContactSmall.propTypes = {
  contact: React.PropTypes.object.isRequired,
  onSelect: React.PropTypes.func.isRequired
}

Contact.propTypes = {
  contact: React.PropTypes.object.isRequired
}

Contacts.propTypes = {
  contacts    : React.PropTypes.array.isRequired,
  selectedContact: React.PropTypes.object,
  increment   : React.PropTypes.func.isRequired,
  fetch       : React.PropTypes.func.isRequired,
  selectContact: React.PropTypes.func.isRequired
}

export default Contacts
