import './App.css';
import Header from '../header/Header';
import Main from '../main/Main';
import CategoryItems from '../category-items/CategoryItems';
import Recommendations from '../recommendations/Recommendations';
import Subscription from '../subsciption/Subscription';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="main">
        <Main/>
      </div>
      <CategoryItems/>
      <div className="recom">
        <Recommendations/>
      </div>
      <Subscription/>
    </div>
  );
}

export default App;
