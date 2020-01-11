import React,{Component} from 'react';
import { Route, Switch } from 'react-router-dom'
import Login from '../components/Login';
import Home from '../components/Home';

class Route_config extends Component{

	render()
	{
		return(
			 <div>
				<Switch>
					<Route exact path='/' component={Login} />
					<Route exact path='/about' component={Home} />
				</Switch>
			</div>
			)
	}
}
export default Route_config;