import React,{Component} from 'react';

class Login extends Component{

	constructor(props){
    super(props)
    this.state = {
      username : '',
      password : ''
    }
  }

changehandler = (event) => {
   console.log(event.target.name);
console.log(event.target.value);

   
}

submitHandler = (event) => {
   //console.log(event.target);
   this.props.history.push('/home')
}

  render(){
    return (
      <div className="App">
        
          <h2>Login</h2>
          <form name="loginform" onSubmit={this.submitHandler.bind(this)}>
          <div>
            <label>Username : </label>
            <input type="text" name="username" defaultValue={this.state.username} onChange={this.changehandler} />
          </div>
          <div>
            <label>Password : </label>
            <input type="password" name="password" defaultValue={this.state.password} onChange={this.changehandler} />
          </div>
          <div>
            <button type="submit" name="submit" value="Login">Login</button>
          </div>
          </form>
      </div>
    );
  }
}
export default Login;