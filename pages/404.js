import {useEffect} from 'react';
import {useRouter} from 'next/router';



const NotFound = () => {
	const router = useRouter();
	console.log(router)
	useEffect(() => {
		setTimeout(() => {
			router.push('/')
		},3000)
	
	}, [])
    return ( <div>
			<h2>Oooops...</h2>
			<h4>There has got to be a better way!</h4>
		</div> );
}
export default NotFound;