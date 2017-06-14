import React from 'react'

export class ContactAdd extends React.Component {
    constructor(props) {
        super(props);

        if (this.props.contact) {
            this.state = Object.assign({
                id: undefined,
                first_name: '',
                last_name: '',
                birthday: undefined,
                phone_number: '',
                notes: ''
            }, this.props.contact);
        } else {
            this.state = {
                id: undefined,
                first_name: '',
                last_name: '',
                birthday: undefined,
                phone_number: '',
                notes: ''
            };
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.save = this.save.bind(this);
    }

    save() {
        const url = (this.state.id) ? `http://localhost:8000/contacts/${this.state.id}/` : 'http://localhost:8000/contacts/';

        fetch(url, {
          method: (this.state.id) ? 'PUT' : 'POST',
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
            if (this.props.onSave) {
                this.props.onSave();
            }
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

ContactAdd.propTypes = {
  contact: React.PropTypes.object,
  onSave: React.PropTypes.func
}
