import React, { Component } from 'react';

import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import Pin from './pin.js';
import MyPin from './mypin.js';
import { filter, map, forEach, get, keyBy, cloneDeep, merge } from 'lodash';
import firebase from 'firebase';


const myUserID = 'Jake'
const currLoc = {
	lat: 44.0495,
	lng: -123.0947
}

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

class SimpleMap extends Component {
	constructor() {
		super();

		this.state = {
			users: {},
			dest: {
				lat: null,
				lng: null
			},
			acceptableDist: 1000
		}
	}
	_onClick = ({x, y, lat, lng, event}, ) =>{
		let pointA = currLoc
		let pointB = {lat, lng}
		this.state.dest.lat = pointB.lat
		this.state.dest.lng = pointB.lng
		let user = {
			pointA, 
			pointB
		}	
		const itemsRef = firebase.database().ref('users');
		itemsRef.child(myUserID).set(user);
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
			forEach(items, (item, key) => {
				item.name = key
				this.setState(merge(cloneDeep(this.state), {
					users: {
						[`${key}`]: item 
					}
				}))
			})
		})
	}
	
	render() {
		let renderedPts = []	
		forEach(this.state.users, (user, index) => {
		console.log(user.name, myUserID);
		if (user.name == myUserID) { 
		renderedPts.push(
		<MyPin lat={user.pointA.lat} lng={user.pointA.lng} text={'A'} key={`${index}a`} />	
		)
		} else {
		renderedPts.push(
		<Pin lat={user.pointA.lat} lng={user.pointA.lng} text={'A'} key={`${index}a`}/*RAIN Eugene*/ />	
		)}

		if (user.name == myUserID) {
		renderedPts.push(
		<MyPin lat={user.pointB.lat} lng={user.pointB.lng} text={'B'} key={`${index}b`} />
		)
		} else {
		renderedPts.push(
		<Pin lat={user.pointB.lat} lng={user.pointB.lng} text={'B'} key={`${index}b`}/*RAIN Eugene*/ />	
		)}
		})

		return (
	<div style ={{ height: '100vh', width: '100%' }}>
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

		{renderedPts}

		</GoogleMapReact>
		</div>

		);
	}
}

//	<Pin lat={this.state.myPins.pointA.lat} lng={this.state.myPins.pointA.lng} text={'A'} /*RAIN Eugene*/ />
export default SimpleMap;
