{/* <h4>Medical staffing</h4>
<h4>engineering</h4>
<h4>scientific</h4>
<h4>mpg</h4>
<h4>consulting</h4>
<h4>software</h4> */}

import React from 'react';
import Collapsible from 'react-collapsible';


import Footer from "../footer"
const App = () => {
  return (
      <div className="employers-wrapper">
      <div className='collaspible-wrapper'>
    <Collapsible trigger="Medical Staffing" className='collapsible'>
      <p>
        *insert exeprt form dad* 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In leo arcu, tempus tristique consequat eu, auctor egestas tellus. Aliquam cursus, nisl et sollicitudin eleifend, ante augue efficitur purus, a feugiat.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a feugiat ex, ut blandit diam. Aliquam erat volutpat. Cras feugiat tortor tellus, eget semper turpis hendrerit vel. Ut sed molestie orci. Vestibulum egestas lobortis urna sed fringilla. Aenean eu ante in est ullamcorper ultrices. Nam condimentum auctor dictum. Mauris efficitur.
      </p>
    </Collapsible>
     <Collapsible trigger="Engineering" className='collapsible'>
      <p>
      *insert exeprt form dad* 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In leo arcu, tempus tristique consequat eu, auctor egestas tellus. Aliquam cursus, nisl et sollicitudin eleifend, ante augue efficitur purus, a feugiat.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a feugiat ex, ut blandit diam. Aliquam erat volutpat. Cras feugiat tortor tellus, eget semper turpis hendrerit vel. Ut sed molestie orci. Vestibulum egestas lobortis urna sed fringilla. Aenean eu ante in est ullamcorper ultrices. Nam condimentum auctor dictum. Mauris efficitur.
      </p>
    </Collapsible>
    <Collapsible trigger="Technical Staffing" className='collapsible'>
      <p>
      *insert exeprt form dad* 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In leo arcu, tempus tristique consequat eu, auctor egestas tellus. Aliquam cursus, nisl et sollicitudin eleifend, ante augue efficitur purus, a feugiat.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a feugiat ex, ut blandit diam. Aliquam erat volutpat. Cras feugiat tortor tellus, eget semper turpis hendrerit vel. Ut sed molestie orci. Vestibulum egestas lobortis urna sed fringilla. Aenean eu ante in est ullamcorper ultrices. Nam condimentum auctor dictum. Mauris efficitur.
      </p>
    </Collapsible>
    <Collapsible trigger="Consulting" className='collapsible'>
      <p>
      *insert exeprt form dad* 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In leo arcu, tempus tristique consequat eu, auctor egestas tellus. Aliquam cursus, nisl et sollicitudin eleifend, ante augue efficitur purus, a feugiat.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a feugiat ex, ut blandit diam. Aliquam erat volutpat. Cras feugiat tortor tellus, eget semper turpis hendrerit vel. Ut sed molestie orci. Vestibulum egestas lobortis urna sed fringilla. Aenean eu ante in est ullamcorper ultrices. Nam condimentum auctor dictum. Mauris efficitur.
      </p>
    </Collapsible>
    <Collapsible trigger="Start here" className='collapsible'>
      <p>
      *insert exeprt form dad* 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In leo arcu, tempus tristique consequat eu, auctor egestas tellus. Aliquam cursus, nisl et sollicitudin eleifend, ante augue efficitur purus, a feugiat.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a feugiat ex, ut blandit diam. Aliquam erat volutpat. Cras feugiat tortor tellus, eget semper turpis hendrerit vel. Ut sed molestie orci. Vestibulum egestas lobortis urna sed fringilla. Aenean eu ante in est ullamcorper ultrices. Nam condimentum auctor dictum. Mauris efficitur.
      </p>
    </Collapsible>
        </div>

    <Footer/>

    </div>
  );
};

export default App;