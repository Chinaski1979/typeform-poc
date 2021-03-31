import { Box } from '@material-ui/core';

const ClientResponsesContainer = ({ responses, onTechClick }) => {
  const renderDetails = (response) => {
    const { fullName, email, businessCategory, techNeeded, techNeeded2, devsNeeded } = response;

    return (
      <div className="developer-response-item">
        <h4>{fullName}</h4>
        <div className="developer-response-item--responses">
          <p><strong>Email</strong>: {email}</p>
          <p><strong>Business Category</strong>: {businessCategory}</p>
          <p><strong>Tech needed (with dropdown)</strong>: {techNeeded} <button onClick={() => onTechClick(response)}>Find Matches</button></p>
          <p><strong>Tech needed (with choice)</strong>: {techNeeded2}</p>
          <p><strong>Developers Needed</strong>: {devsNeeded}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="responses-container">
      <div className="responses-container">
        {responses.map((response, i) => (
          <Box key={i} bgcolor="#303952" m={1} padding={5} width={472}>
            {renderDetails(response)}
          </Box>
        ))}
      </div>
    </div>
  )
};



export default ClientResponsesContainer;