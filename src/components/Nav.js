import React, {Component} from 'react';
import { BrowserRouter, Route, Switch,Link } from 'react-router-dom'

 class Nav extends Component{

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

				</BrowserRouter>
			</div>
			)
	}
}
export default Nav;