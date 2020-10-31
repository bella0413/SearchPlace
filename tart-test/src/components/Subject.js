import React, { Component } from 'react';

class Subject extends Component {
    state = {
        title:'Webbbbb', sub:'World Wide Web'
    };
    render(){

        const {title, sub} = this.state;
		return (
			<header>
				<h1>{title}</h1>
				{sub}
			</header>
		);
	}
}

export default Subject;
