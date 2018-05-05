import React from 'react';
import { auth, db } from '../../firebase';
import withAuthorization from '../Session/withAuthorization';
import AuthUserContext from '../Session/AuthUserContext';


class ViewImage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
      var id = "-LBj6CPn9DVXmwr8BBLd";
      db.addComment(id, {"text": this.state.value, "user": "Hello", "x": "400", "y": "400"});
      db.getComments(id);
      console.log(this.props);

    }
  
    render() {
      return (
          <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                Name:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>

            <img width="500" height="500" src="../images/image1.jpg"/>
        </div>
      );
    }
  }
  
const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(ViewImage);