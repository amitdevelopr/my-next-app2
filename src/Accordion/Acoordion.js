"use client"
import Accordion from 'react-bootstrap/Accordion';
function BasicExampleAccordion({data,title}) {
  return <>
    <h1>{title}</h1>
    <Accordion defaultActiveKey="0">
      {
        data.map(({heading,content},ind)=>{
          return <Accordion.Item eventKey={ind} key={`accItem_${ind}`}>
          <Accordion.Header>{heading}</Accordion.Header>
          <Accordion.Body>
            {content}
          </Accordion.Body>
        </Accordion.Item>
        })
      }
      
    </Accordion>
    </>
}

export default BasicExampleAccordion;