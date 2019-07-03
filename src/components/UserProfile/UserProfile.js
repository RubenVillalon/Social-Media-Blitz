import React, { Component } from 'react';
import { withRouter } from 'react-router';

import './UserProfile.css';

class UserProfile extends Component {
	userDetailsHandler = () => {
		const userId = this.props.user._id;
		this.props.history.push(`/users/${userId}`);
	};

	render() {
		return this.props.user.avatar ? (
			<div onClick={this.userDetailsHandler} className="profile-individual-container">
				<div className="userProfile-container">
					<div className="img-container-userProfile">
						<img className="userprofile-img" src={this.props.user.avatar} alt="users" />
					</div>
					<p>{this.props.user.username}</p>
				</div>
			</div>
		) : null;
	}
}

export default withRouter(UserProfile);
