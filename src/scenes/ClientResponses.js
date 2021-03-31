import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import { getClientResponses, getMatchingDevelopers } from '../typeformService';
import { _setSelectedClient } from '../store/clientFormReducer';

import ClientResponsesContainer from '../components/ClientResponsesContainer';
import SearchField from '../components/SearchField';

const ClientResponses = () => {
  const [textFilter, setTextFilter] = useState('');
  const { clientsResponses } = useSelector(state => state.clientFormReducer);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getClientResponses());
  }, []);

  const handleSearchClick = () => {
    const filters = {
      textFilter,
    };

    dispatch(getClientResponses(filters));
  };

  const onTechClick = (client) => {
    console.log('techNeeded', client);
    dispatch(_setSelectedClient(client));
    dispatch(getMatchingDevelopers(client.techNeeded));
    history.push('/client-matches')
  };

  return (
    <div className="developer-responses">
      <h3>Client Responses</h3>
      <div>
        <SearchField onChange={(e) => setTextFilter(e.target.value)} id="search-button" label="Search" />
        <StyledButton onClick={handleSearchClick} variant="contained" variant="outlined">Search</StyledButton>
      </div>
      {clientsResponses.length && <ClientResponsesContainer responses={clientsResponses} onTechClick={onTechClick} />}
    </div>
  );
};
  
const StyledButton = withStyles({
  root: {
    //background: '#fff',
    border: 'solid 1px #fff',
    borderRadius: 3,
    color: 'white',
    height: '48px'
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);


export default ClientResponses;
