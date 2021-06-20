import React, { Component } from 'react';
const axios = require('axios');

export default class Template extends Component {

	initialState = {
		foo: 0,
		randomNum: 0
	}

	constructor(props) {
		super(props);
		this.state = this.initialState;

		axios.defaults.baseURL = "http://localhost:4000";
		axios.defaults.validateStatus = false;
		axios.defaults.headers.common['Content-Type'] = 'application/json';
	}

	async componentDidUpdate(prevProps, prevState) {
		// This is where we conditionally set our state if we need to, and we can do fetches to our backend/ async stuff
        if (this.state.foo % 2 === 1 && prevState.foo !== this.state.foo)
        {
            // foo is odd, let's fetch some test data
            const res = await axios.get(`/template/rng`);
			const { data, status } = res;
            const bodyStr = JSON.stringify(data);

			if (status === 200) {
				console.log(`Success! Message: ${bodyStr}`);
				const { randomNum } = data;
				this.setState({ randomNum });
			} else {
				console.error(`Error! Message: ${bodyStr}`);
			}
        }
	}

	render() {
		const {
			foo,
			randomNum
		} = this.state;

		return (
			<div className="template-component">
				<button onClick={() => this.setState({ foo: foo + 1 })} className="template-button">Click this template button to increment!</button>
                <div>Foo: {foo}</div>
                <div>Every time foo is odd, it will try to fetch template data</div>
				<div>Random number! : {randomNum}</div>
            </div>
		);
	}
}