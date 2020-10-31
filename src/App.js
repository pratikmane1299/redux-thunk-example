import { Route, Switch } from 'react-router-dom';
import './App.css';

import PostsContainer from './containers/PostsContainer';
import CommentsContainer from './containers/CommentsContainer';

function App() {
  return (
    <div className="App">
      <h1>Redux Thunk Example</h1>
      <Switch>
        <Route path="/" exact component={PostsContainer}></Route>
        <Route path="/:id/comments" component={CommentsContainer} />
      </Switch>
    </div>
  );
}

export default App;
