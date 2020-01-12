import React,{Component} from 'react';
import data from '../components/data'

class Add extends Component{

	constructor(props){
		super(props)
		
		this.state = {
			datatemp : {
				id: '',	name:'', Designation:''
				
			},
			editable: this.props.location.state && this.props.location.state.editable
		}
	}

	changehandler = (event) => {
		let datatemp = this.state.editable ? this.props.location.state.editItem : this.state.datatemp

		const {name, value} = event.target
		datatemp[name] = value
		datatemp['id'] = this.state.editable ? datatemp.id : data.length+1
		this.setState({
			datatemp
		})

	}
	submitHandler(event) {
		event.preventDefault();
		data.push(this.state.datatemp);


		this.props.history.push('/list')

	}

	submitupdateHandler(event){
		event.preventDefault();
		let data = this.state.editable ? this.props.location.state.editItem : this.state.datatemp
		// let data = this.state.datatemp
		 
	 	const { name, value } = event.target
	 	data[name] = value



		this.setState({
			  data
		},this.props.history.push('/list'))
	}

	render(){
		let edit_data = this.state.editable && this.props.location.state.editItem ;
		console.log(this.props)
		return(


			<div><div> Add PAge </div>
				<form name="addEditform" 
				onSubmit={edit_data ? this.submitupdateHandler.bind(this) : this.submitHandler.bind(this)}
				>
		          <div>
		            <label>Name : </label>
		            <input type="text" name="name" 
		            defaultValue={edit_data ? edit_data.name : this.state.name} onChange={this.changehandler}
		               />
		          </div>
		          <div>
		            <label>Designation : </label>
		            <input type="text" name="Designation" defaultValue={edit_data ? edit_data.Designation : this.state.designation} 
		             onChange={this.changehandler} />
		          </div>
		          <div>
		            <button type="submit" name="submit" value="Save">Submit</button>
		          </div>
		          </form>
			</div>

		)
	}
}
export default Add;