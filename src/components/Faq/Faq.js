import React, { useState } from 'react';
import { faqData } from './Data';
import Fq from './Fq';


const Faq = () => {
    const [faq,setFaq] = useState(faqData);
  return (
    <div>
      {
      faq.map(faq=> <Fq  faq={faq} {...faq}/>)
      }
    </div>

  )
}

export default Faq