import './App.css';
import {useEffect, useState} from 'react'
import { LeagueTable } from './components/LeagueTable/LeagueTable';
import { SearchBar } from './components/SearchBar/SearchBar';
import { Dropdown } from './components/Dropdown/Dropdown';

function App() {
  const [leagues, setLeagues] = useState(() => {
    const cachedData = localStorage.getItem("apiLeagues");
    return cachedData ? JSON.parse(cachedData) : null;
  });
  const [search, setSearch] = useState('');
  const [sportsType, setSportsType] = useState('');

  async function getLeagues() {
    if(!leagues) {
      const response = await fetch('https://www.thesportsdb.com/api/v1/json/3/all_leagues.php');
      let json = await response.json()
      setLeagues(json)
      localStorage.setItem("apiLeagues", JSON.stringify(json));
    }
  }

  useEffect(() => {
    getLeagues();
  }, [])

  function getSportTypes() {
    if(leagues === null) return [];
    return new Set(leagues.leagues.map(league => league.strSport))
  }

  function onSearch(event) {
    setSearch(event.target.value);
  }

  return (
    <div className="App">
      <div className="filters">
        <SearchBar onSearch={onSearch} value={search}/>
        <Dropdown filter={getSportTypes()} sportsType={sportsType} setSportsType={setSportsType}/>
      </div>
      <LeagueTable leagues={leagues} search={search} type={sportsType}/>
    </div>  
  );
}

export default App;
