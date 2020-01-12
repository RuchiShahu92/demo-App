import React,{Component} from 'react';
import Data from '../components/data';


class List extends Component{

	constructor(props){
		super(props)
		this.state = {
			Data: Data,
			editable: false
		}
	}

	handleClick = (event) => {
		event.preventDefault()

		this.props.history.push('/add', this.state)
	}

	editChange = (e,itemData) => {
	 
		let editData = itemData;
		console.log(editData);
		this.setState({
			editItem : editData,
			editable: true

		}, () => this.props.history.push('/edit/'+itemData.id, this.state))
	}

	deleteData = (e, id) => {
		let data = this.state.Data.filter(item => id != item.id);
		this.setState({
			Data: data
		})
	}

	render(){
		console.log(this.props)
		let Data = this.state.Data
		return(<div>

				<div>List page</div>
				<div><button name="add"  onClick={this.handleClick}>Add </button></div>
					<table>
						<thead>
							<th>Id</th>
							<th>Name</th>
							<th>Designation</th>
						</thead>
						<tbody>
						{
							Data.map((item,index) => 
								
								(<tr >
									<td>{item.id}</td>
									<td>{item.name}</td>
									<td>{item.Designation}</td>
									<td><button onClick={(e,itemData) => this.editChange(e, item)}>Edit</button></td>
									<td><button onClick={(e,id) => this.deleteData(e,item.id)}>Delete</button></td>
									</tr>)

								)
						}
							 
						</tbody>
					</table>
				
			</div>)
	}
}
export default List;