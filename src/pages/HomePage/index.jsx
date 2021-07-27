import React from 'react';
import bookingform from '../../components/bookingForm';
import Header from '../../components/Header/index';
import CardList from '../../components/CardList/index';
import CategoryBar from '../../components/CategoryBar/index';
import Footer from '../../components/foooter';
import Navbar from '../../../src/Navbar/index';
const index = () => {
	return (
		<div>
			<Navbar />
			<Header />
			<CategoryBar bar_title={'Hot Offers'} bgcolor={'green'} />
			<CardList />
			<CategoryBar bar_title={'Offers'} bgcolor={'#3b5999'} />
			<CardList />
			<Footer />
		</div>
	);
};
export default index;
