import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import DeveloperResponsesContainer from '../components/DeveloperResponsesContainer';

const ClientMatches = () => {
  const { clientSelected, clientMatches } = useSelector(state => state.clientFormReducer);

  const history = useHistory();

  useEffect(() => {
    if (!clientSelected.fullName) {
      history.push('/client-responses');
    }
  }, []);

  return (
    <div className="developer-responses">
      <h3>Matches for {clientSelected.fullName}</h3>
      <div>
      </div>
      {clientMatches.length && <DeveloperResponsesContainer responses={clientMatches} isMatchesView={true} />}
    </div>
  );
};
  
export default ClientMatches;
