import React from 'react'
import { ContactAdd } from './ContactForm';

export class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.edit = this.edit.bind(this);
        this.doneEdit = this.doneEdit.bind(this);
        this.state = {};
    }

    edit() {
        this.setState({edit: true})
    }

    doneEdit() {
        this.setState({edit: false})
    }

    render() {
        return (
            <div>
              <h2>{this.props.contact.first_name} <b>{this.props.contact.last_name}</b> <small>Contact ID: {this.props.contact.id}</small></h2>
              <div>Birthday: {this.props.contact.birthday}</div>
              <div>Phone Number: {this.props.contact.phone_number}</div>
              <hr />
              Child Contacts:
              <div>{this.props.contact.child_contact.map(item =>
                <div key={item.id}>{item}</div>
              )}</div>
              <button onClick={() => this.edit()}>Edit</button>
              {(this.state.edit) ? <ContactAdd contact={this.props.contact} onSave={() => this.doneEdit()} /> : ''}
            </div>
        );
    }

}

Contact.propTypes = {
  contact: React.PropTypes.object.isRequired
}
