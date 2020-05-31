class Raja extends React.Component {
  constructor(props) {
    super(props) 
    this.state = { attitude: "cool" }
  }

  componentDidMount() {
    setTimeout(()=> {
   this.setState({attitude : "Hardwork"})
  }, 3000)
}

  render(){
    return <h2> Raj attitude is {this.state.attitude }</h2>
  }
}

ReactDOM.render(<Raja />, document.getElementById('root'));
