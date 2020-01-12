import React,{Component} from 'react';
import { BrowserRouter, Route, Switch,Link } from 'react-router-dom'
//import Route_config from '../components/Route_config';
import Login from '../components/Login';
import Home from '../components/Home';
import List from '../components/list';
import Add from '../components/Add';

class Router_main extends Component{

	render(){
	
		return(
			 <div>

				<BrowserRouter>
					<Switch>
					<Route path='/home' component={Home} />
					<Route path='/list' component={List} />
					<Route path='/add' component={Add} />
					<Route path='/edit/:id' component={Add} />
					<Route exact path='/' component={Login} />
			 
					</Switch>
				</BrowserRouter>
			</div>
			)
	}
}
export default Router_main;