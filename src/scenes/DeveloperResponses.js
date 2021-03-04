import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getDeveloperFormResponses } from '../typeformService';
import ResponsesContainer from '../components/ResponsesContainer';

const DeveloperResponses = () => {
  const [responses, setResponses] = useState([]);
  const [textFilter, setTextFilter] = useState('');

  useEffect(() => {
    getDeveloperFormResponses().then((res) => {
      console.log(res);
      setResponses(res.data.items.map(item => item.answers));
      console.log('res.data.items.map(item => item.answers)', res.data.items.map(item => item.answers));
    });
  }, []);

  const handleSearchClick = () => {
    const filters = {
      textFilter,
    };
    getDeveloperFormResponses(filters).then((res) => {
      setResponses(res.data.items.map(item => item.answers));
    });
  };


  return (
    <div className="developer-responses">
      <h3>Developer Responses</h3>
      <div>
        <input onChange={(e) => setTextFilter(e.target.value)}/>
        <button onClick={handleSearchClick}>
          Search
        </button>
      </div>
      {responses && <ResponsesContainer responses={responses} />}
    </div>
  );
};
  
export default DeveloperResponses;
