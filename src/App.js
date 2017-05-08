import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class CodeServer extends React.Component
{
  render()
  {
    return(
      <div class="codeServer">
      <h4>{this.props.code} - {this.props.status}</h4>
      </div>
    );
  }
}
class CodeClient extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={code: 'ABC'};
  }
  render()
  {
    return(
      <div class="codeClient">
        <h4>{this.state.code}</h4>
        <button id={this.props.code} onClick={() => this.setState({code: 'X'})}>Use</button>
      </div>
    );
  }
}

class ServerPanel extends React.Component
{
  getServerCode(code, status)
  {
    return <CodeServer code={code} status={status}/>
  }
  render()
  {
    return(
      <div class="client">
        {this.getServerCode("abc", "valid")}
      </div>
    );
  }  
}
class ClientPanel extends React.Component
{
  getClientCode(code)
  {
    return <CodeClient /*code={code}*/ />
  }
  render()
  {
    return(
      <div class="server">
        {this.getClientCode("abc")}
      </div>
    );
  }  
}

function Welcome(props)
{
  return <h1>Hello, {props.name}</h1>;
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Welcome name="Dave" />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ServerPanel/>
        <ClientPanel/>
      </div>
    );
  }
}

export default App;
