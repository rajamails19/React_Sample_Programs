class Raja extends React.Component {
  constructor(){
    super()
    this.state = { lastName: "Vadgt" };
  }

  static getDerivedStateFromProps(props, state){
    return {lastName: props.statelName }
  }

  render(){
    return <h2> The lastName finally is {this.state.lastName} </h2>
  }
}

ReactDOM.render(<Raja statelName="Vaderavu" />, document.getElementById('root'));
