import { TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const SearchField = ({onChange, id, label, variant = 'filled', color = 'secondary'}) => (
  <StyledField onChange={onChange} id={id} label={label} variant={variant} color={color} size="small"/>
);

const StyledField = withStyles({
  root: {
    background: '#fff',
    borderRadius: 3,
    color: 'white',
    '& label.Mui-focused': {
      color: '#000',
    },
  },
})(TextField);

export default SearchField;