import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import Pin from './pin.js';
import { filter, map, forEach, get, keyBy, cloneDeep, merge } from 'lodash';
import firebase from 'firebase';


const myUserID = 'Matt'

const config = {
	apiKey: 'AIzaSyBVRdXtGC0GvaGzahggIv17wMtZQpoaF1I',
	authDomain: "sexe-d2213.firebaseapp.com",
	databaseURL: "https://sexe-d2213.firebaseio.com",
	projectId: "sexe-d2213",
	storageBucket: "sexe-d2213.appspot.com",
	messagingSenderId: "1099314859451"
};
firebase.initializeApp(config);
firebase.auth().signInAnonymously();


const handleSubmit = (user) => {
	const itemsRef = firebase.database().ref('users');
	itemsRef.child(myUserID).set(user);
}


const _onClick = ({x, y, lat, lng, event, state}) => {
	myPins.pointA.lat = lat
	myPins.pointA.lng = lng
	console.log('clicked');
}


class SimpleMap extends Component {
	constructor() {
		super();

		this.state = {
			myPins:{
				pointA:{
					lat: 44.1,
					lng: -123.05
				},
				pointB:{
					lat: 44.3,
					lng: -123.2
				}
			},
			users: {}
				
			
		}

	}
	


	_onClick = ({x, y, lat, lng, event}) =>{
		console.log(this.state.myPins.pointA.lat);
		this.state.myPins.pointA.lat = lat
		this.state.myPins.pointA.lng = lng
		console.log('clicked');
		console.log(this.state.myPins.pointA.lat);
		handleSubmit(this.state.myPins)
	}

	static propTypes = {
		center: PropTypes.array,
		zoom: PropTypes.number,
		pinCoords: PropTypes.any
	};

	static defaultProps = {
		center: [44.0495, -123.0947],
		zoom: 11,
	};
	
	componentDidMount() {
		const itemsRef = firebase.database().ref('users');
		itemsRef.on('value', (snapshot) => {
			let items = snapshot.val()
			let newState = []
			for (let item in item) {
				newState.push({
					userID: item;
					pointA: items[item].pointA
					pointB: items[item].pointB
			})
			}
			this.setState({
				items: newState
			})
		})
	}
	
	render() {
		
		let allUsers = {}
		const itemsRef = firebase.database().ref('users');
		itemsRef.on('value', (snapshot) => {
			let allUsers = snapshot.val();
			})
		console.log('users', allUsers)
		const a = this.state.color
		let renderedPts = []
		const pins = map(users, (user) => {console.log(user)})
		console.log(pins)
		forEach(users, (user, index) => {
		renderedPts.push(
		<Pin lat={user.pointA.lat} lng={user.pointA.lng} text={'A'} key={`${index}a`}/*RAIN Eugene*/ />)
		
		
		renderedPts.push(
		<Pin lat={user.pointB.lat} lng={user.pointB.lng} text={'B'} key={`${index}b`}/*RAIN Eugene*/ />)
		})
		return (
	<div style ={{ height: '100vh', width: '100%' }}>
		<span style = {{color: a }} onClick = {
			() => console.log(this.state)
		}>
		test
		</span>	
		<GoogleMapReact
		onClick={this._onClick}
		bootstrapURLKeys={{ key: 'AIzaSyDXaPRNBYNd0vVUguLrT-cWPM7I2tnyvMY' }}
		defaultCenter={this.props.center}
		defaultZoom={this.props.zoom}
		geometryLibrary={true}
		onGoogleApiLoaded={
			(google) => {
			}
		}
		>

		{
			map(users, (user) => (
				<Pin lat={user.pointA.lat} lng={user.pointA.lng} text={'A'} />
			))
		}

		</GoogleMapReact>
		</div>

		);
	}
}

//	<Pin lat={this.state.myPins.pointA.lat} lng={this.state.myPins.pointA.lng} text={'A'} /*RAIN Eugene*/ />
export default SimpleMap;
