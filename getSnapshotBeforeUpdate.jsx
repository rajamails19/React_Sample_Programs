class Raja extends React.Component {
  constructor(){
    super()
    this.state = { age: "32" }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({age:"16"})
    }, 3000)
    
  }

  
  getSnapshotBeforeUpdate(prevprops, prevstate) {
    document.getElementById('div2').innerHTML = " Lets do recap " +
  prevstate.age
  }
  


componentDidUpdate(){
  document.getElementById('div1').innerHTML = "This is something cool age " 
  + this.state.age;
}


  render(){
    return(
      <div>
        <h2> The age is {this.state.age }</h2>
        <h3 id="div1"> New update would be here, hold ur breath  </h3>
       <h4 id="div2"> Prev age update would be here, wait for it  </h4>
      </div>
    )
  }
}

ReactDOM.render(<Raja />, document.getElementById('root'));
