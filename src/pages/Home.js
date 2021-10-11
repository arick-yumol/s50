import { Fragment } from 'react';

// components
import Banner from '../components/Banner';
import Highlights from '../components/Highlights';
import CourseCard from '../components/CourseCard';

export default function Home () {
	return(
		<Fragment>
			<Banner />
			<Highlights />
			<CourseCard />
		</Fragment>
	)
}