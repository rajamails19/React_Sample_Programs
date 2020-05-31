class Raja extends React.Component {
  constructor() {
    super()
    this.state = {lastName:"Vadggrev"}
  }

  shouldComponentUpdate(){
    return true;
  }

  changeLastName= () => {
    this.setState({lastName:"Vaderavu"})
  }
  

  render(){
    return (
    <div><h3> The final lastName is {this.state.lastName} </h3>
    <button type="button" onClick={this.changeLastName}>Tell me</button>
    </div>)

  }
}

ReactDOM.render(<Raja  />, document.getElementById('root'));
