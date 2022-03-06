import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import * as serviceWorker from './serviceWorker';
import HelloComponent  from './component/HelloComponent';
import List from './List';
import Footer from './Footer';
import LifeCycle from './LifeCycle';

class StateFullComponent extends React.Component{
  render(){
    return<p>StateFullComponent</p>
  }
}
//ReactDOM.render(<List/>, document.getElementById('root'));

//ReactDOM.render(<Footer/>, document.getElementById('root'));
//ReactDOM.render(<App/>, document.getElementById('root'));
ReactDOM.render(<LifeCycle/>, document.getElementById('root'));

reportWebVitals();


/**function HelloComponent(){
  return HelloComponent
}
ReactDOM.render(<HelloComponent />, document.getElementById('root'));
**/

/**const Hello = () =>{
  return <p>hello</p>
}**/
//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<Hello />, document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//serviceWorker.unregister();

