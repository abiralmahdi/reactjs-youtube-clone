import './App.css';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import RecommendedVideos from './components/RecommendedVideos'
import SearchPage from './components/SearchPage';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  function hideSideBar(){
    let sidebar = document.getElementById('sidebar')
    let rec = document.getElementById('recommendedVideos')
    let searchPage = document.getElementById('searchPage')

    if (sidebar.style.display == 'none'){
      sidebar.style.display = 'block'
      // rec.style.flex = '1'
      
      if (rec != null){
        rec.style.paddingLeft = '300px'
      }
      else{
        searchPage.style.paddingLeft = '300px'
      }
    }
    else{
      sidebar.style.display = 'none'
      // rec.style.flex = '1'
      if (rec != null){
        rec.style.paddingLeft = '100px'
      }
      else{
        searchPage.style.paddingLeft = '20px'
      }
    }
  }




  return (
    <div className="App">
      <Router>
        <Header hideFunction={hideSideBar}/>
        <Switch>
          <Route exact path='/'>
            <div className='app__page'>
              <Sidebar/>
              <RecommendedVideos/>
            </div>
          </Route>
          <Route exact path='/search/:searchTerm'>
            <Sidebar/>
            <SearchPage/>
          </Route>
        </Switch>
      </Router>
    </div>

  );
}

export default App;
