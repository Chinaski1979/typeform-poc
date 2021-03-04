import { useEffect } from 'react';
import * as typeformEmbed from '@typeform/embed';

const DeveloperForm = () => {
  useEffect(() => {
    const typeformEl = document.querySelector('#target-dom-node') // NOTE: `.target-dom-node` is the target DOM element from your website or web app
  
    typeformEmbed.makeWidget(
      typeformEl,
      'https://form.typeform.com/to/zisBMS5p?typeform-medium=embed-snippet', // NOTE: Replace with your typeform URL
      {
        hideHeaders: true,
        hideFooter: true,
        opacity: 75,
        buttonText: "Take the survey!",
        onSubmit: function () {
          console.log('Typeform successfully submitted')
        }
      }
    )
  }, []);

  return (
    <div id="target-dom-node" >
      yo
    </div>
  )
};

export default DeveloperForm;
