import { Link } from 'react-router-dom';
const Home = () => (
  <div className="home">
      <h3>Typeform integration POC</h3>
      <Link to="/developer-form">Developer Form</Link>
      <div className="divider"/>
      <Link to="/client-form">Client Form</Link>
      <div className="divider"/>
      <Link to="/developer-responses">Developer Responses</Link>
      <div className="divider"/>
      <Link to="/client-responses">Client Responses</Link>
  </div>
);
  
export default Home;
