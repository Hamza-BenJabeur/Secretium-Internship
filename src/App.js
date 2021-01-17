
import './App.css';
import Home from './Home'
import Nav from './Nav'
import Photo from './Photos'
import Posts from './Posts'
import {BrowserRouter as Router ,Switch,Route}from 'react-router-dom'
import PostDetails from './PostDetails'
function App() {
  return (
    <Router>
    <div className="App">
    <Nav />
    <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/photos" component={Photo}/>
    <Route path="/posts" component={Posts}/>
    <Route path="/post/:id/:userId" component={PostDetails}/>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
