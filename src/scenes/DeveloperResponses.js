import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import { getDeveloperResponses } from '../typeformService';

import DeveloperResponsesContainer from '../components/DeveloperResponsesContainer';
import SearchField from '../components/SearchField';

const DeveloperResponses = () => {
  const [textFilter, setTextFilter] = useState('');
  const { developerResponses } = useSelector(state => state.developerFormReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDeveloperResponses());
  }, []);

  const handleSearchClick = () => {
    const filters = {
      textFilter,
    };
    dispatch(getDeveloperResponses(filters));
  };


  return (
    <div className="developer-responses">
      <h3>Developer Responses</h3>
      <div>
        <SearchField onChange={(e) => setTextFilter(e.target.value)} id="search-button" label="Search" />
        <StyledButton onClick={handleSearchClick} variant="contained" variant="outlined">Search</StyledButton>
      </div>
      {developerResponses && <DeveloperResponsesContainer responses={developerResponses} />}
    </div>
  );
};
  

const StyledButton = withStyles({
  root: {
    border: 'solid 1px #fff',
    borderRadius: 3,
    color: 'white',
    height: '48px'
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

export default DeveloperResponses;
