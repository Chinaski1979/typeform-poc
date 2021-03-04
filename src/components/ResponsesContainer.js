import { Box } from '@material-ui/core';

// const NAME = 'GaNxTzv8zx3q';
// const LINKEDIN = 'Mtg1tCVo5oNe';
// const FULLNAME = 'VS4jz2er9EAb';
// const EMAIL = 'r9Mwzbd7Nf8C';

const ResponsesContainer = ({ responses }) => {
  const renderDetails = (res) => {
    console.log('res', res);
    const fullName = res[0]?.text;
    const email = res[1]?.email;
    const linkedIn = res[2]?.url;
    const cleanCodeAnswer = res[3]?.text;
    const nodeSkillLevel = res[4]?.number;
    const bestSkill = res[5]?.text;

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
          <Box bgcolor="#303952" m={1} padding={5} width={472}>
            {renderDetails(response)}
          </Box>
        ))}
      </div>
    </div>
  )
};



export default ResponsesContainer;