export const LeagueTable = ({
    leagues,
    search,
    type
}) => {
    function renderLeagues() {
      return leagues.leagues
        .filter(league => league.strSport.includes(type))
        .filter(league => league.strLeague.toLowerCase().includes(search.toLowerCase()))
        .map((league) => (
          <tbody key={league.idLeague}>
            <tr>
              {/* Badge part was done after 90 minutes */}
              {/* <td> <img src={getBadge(league.idLeague)}></img></td> */}
              <td>{league.strLeague}</td>
              <td>{league.strSport}</td>
              <td>{league.strLeagueAlternate}</td>
            </tr>
          </tbody>
        )
      )
    }
    /////// this part was done after 90 minutes
    ///// too much requests ?????
    // async function getBadge(id) {
    //   const response = await fetch(`https://www.thesportsdb.com/api/v1/json/3/search_all_seasons.php?badge=1&id=${id}`);
    //   const json = await response.json();
    //   return json[json.length - 1].strBadge;
    // }
    /////////////////
  if(leagues) {
    return ( 
      <table>
        <thead>
          <tr>
            {/* <th>Badge</th> */}
            <th>League</th>
            <th>Type</th>
            <th>Alternate League</th>
          </tr>
        </thead>
        {renderLeagues()}
      </table>  
  )}
  return <span>Loading...</span>
}