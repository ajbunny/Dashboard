import Review from './components/Reviews';
import AverageRating from './components/Average-Rating';
import SentimentAnalysis from './components/Sentiment-Analysis';
import WebsiteVisitors from './components/Website-Visitors';
import Sidebar from './components/Sidebar'
import "./styles.css"
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div id='container'>
    <Sidebar/>  
    <div id='all4'> 
    <div id='top3'>
    <Review/>
   <AverageRating/>
    <SentimentAnalysis/>
    </div>
    <WebsiteVisitors/>
    </div>
    </div>
  );
}

export default App;
// Tishana told me to add this