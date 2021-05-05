import { Box } from '@material-ui/core';

const DeveloperResponsesContainer = ({ responses, isMatchesView }) => {
  const renderDetails = (response) => {
    const { fullName, email, linkedIn, cleanCodeAnswer, nodeSkillLevel, bestSkill } = response;
    return (
      <div className="developer-response-item">
        <h4>{fullName}</h4>
        <div className="developer-response-item--responses">
          <p><strong>Email</strong>: {email}</p>
          <p><strong>LinkedIn</strong>: {linkedIn}</p>
          <p><strong>What constitutes clean code?</strong>: {cleanCodeAnswer}</p>
          <p><strong>What's your Node skills level?</strong>: {nodeSkillLevel}</p>
          <p><strong>Lenguage/Framework with more experience?</strong>: {bestSkill}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="responses-container">
      <div className="responses-container">
        {responses.map((response, i) => (
          <Box key={i} bgcolor="#303952" m={1} padding={5} width={472}>
            {isMatchesView && <input type="checkbox" className="responses-container--match-checkbox" />}
            {renderDetails(response)}
          </Box>
        ))}
      </div>
    </div>
  )
};



export default DeveloperResponsesContainer;