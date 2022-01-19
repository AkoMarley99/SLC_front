{/* <h4>something</h4>
<h4>employ development</h4>
<h4>workshops</h4>
<h4>talent aquistion</h4> */}

import React from "react"
import Collapsible from 'react-collapsible';

import Footer from "../footer"
export default function(){
    return(
        <div className="services-wrapper">
            <div className='collaspible-wrapper'>
    <Collapsible trigger="Employee development" className='collapsible'>
      <p>
        *insert exeprt form dad* 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In leo arcu, tempus tristique consequat eu, auctor egestas tellus. Aliquam cursus, nisl et sollicitudin eleifend, ante augue efficitur purus, a feugiat.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a feugiat ex, ut blandit diam. Aliquam erat volutpat. Cras feugiat tortor tellus, eget semper turpis hendrerit vel. Ut sed molestie orci. Vestibulum egestas lobortis urna sed fringilla. Aenean eu ante in est ullamcorper ultrices. Nam condimentum auctor dictum. Mauris efficitur.
      </p>
    </Collapsible>
     <Collapsible trigger="Workshops" className='collapsible'>
      <p>
      *insert exeprt form dad* 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In leo arcu, tempus tristique consequat eu, auctor egestas tellus. Aliquam cursus, nisl et sollicitudin eleifend, ante augue efficitur purus, a feugiat.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a feugiat ex, ut blandit diam. Aliquam erat volutpat. Cras feugiat tortor tellus, eget semper turpis hendrerit vel. Ut sed molestie orci. Vestibulum egestas lobortis urna sed fringilla. Aenean eu ante in est ullamcorper ultrices. Nam condimentum auctor dictum. Mauris efficitur.
      </p>
    </Collapsible>
    <Collapsible trigger="Talent  aquisition" className='collapsible'>
      <p>
      *insert exeprt form dad* 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In leo arcu, tempus tristique consequat eu, auctor egestas tellus. Aliquam cursus, nisl et sollicitudin eleifend, ante augue efficitur purus, a feugiat.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a feugiat ex, ut blandit diam. Aliquam erat volutpat. Cras feugiat tortor tellus, eget semper turpis hendrerit vel. Ut sed molestie orci. Vestibulum egestas lobortis urna sed fringilla. Aenean eu ante in est ullamcorper ultrices. Nam condimentum auctor dictum. Mauris efficitur.
      </p>
    </Collapsible>
    
        </div>

        <div className="footer-wrapper">
            <Footer/>
        </div>
        </div>
    )
}