import './App.css';
import Row from './Row'
import requests from './requests';
import Banner from './Banner';
import Navabar from './Navabar';

function App() {
  return (
    <div className="App">
<Navabar></Navabar>
<Banner></Banner>

<Row isPoster={true} title="Trending" fetchUrl={requests.fetchTrending}></Row>

<Row title="Originals" fetchUrl={requests.fetchNetflixOriginals}></Row>
<Row title="Top Rated" fetchUrl={requests.fetchTopRated}></Row>
<Row title="Action" fetchUrl={requests.fetchActionMovies}></Row>
<Row title="Comedy" fetchUrl={requests.fetchComedyMovies}></Row>
<Row title="Horror" fetchUrl={requests.fetchHorrorMovies}></Row>
<Row title="Romance" fetchUrl={requests.fetchRomanceMovies}></Row>
<Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}></Row>

    </div>
  );
}

export default App;
