import React,{Component} from 'react';
import { BrowserRouter, Route, Switch,Link } from 'react-router-dom'
//import Route_config from '../components/Route_config';
import Login from '../components/Login';
import Home from '../components/Home';
import List from '../components/list';
import Add from '../components/Add';

class Router_main extends Component{

	render()
	{
		return(
			 <div>

				<BrowserRouter>
					<nav>
						<Link to="/Home" >Home</Link> |
						<Link to="/list" >Listing</Link> |
						<Link to="/add" >Add/ Edit</Link> |
					</nav>
					<Switch>
					// <Route exact path='/' component={Login} />
					<Route exact path='/home' component={Home} />
					<Route exact path='/list' component={List} />
					<Route exact path='/add' component={Add} />
			 
				</Switch>
			</BrowserRouter>
			</div>
			)
	}
}
export default Router_main;