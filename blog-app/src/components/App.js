import React from "react";

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            articles: null,
        }
    }
    // componentDidMount() {
    //     fetch()
    //       .then((res) => res.json())
    //       .then((articles) => this.setState({ articles }));
    //   }
    render(){
        return(
            <React.Fragment>
            <h1>Hello Blog App</h1>
            </React.Fragment>
        )
    }
}

export default App;