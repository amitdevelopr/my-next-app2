import BasicExampleAccordion from '@/Accordion/Acoordion'
import React from 'react'
import data from './data.json'
import {AccordionMine} from '@/Accordion/AccordionMine'
const About = () => {
  return <>
    <div>
      <h1 className='text-center mt-5'>About Page</h1>
      <p>Aliquam sem fringilla ut morbi. Sit amet nisl purus in mollis nunc sed. Morbi quis commodo odio aenean sed adipiscing. Accumsan lacus vel facilisis volutpat est. Auctor elit sed vulputate mi sit. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed. Est pellentesque elit ullamcorper dignissim cras. Porttitor leo a diam sollicitudin tempor id eu nisl nunc. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Malesuada fames ac turpis egestas integer eget aliquet. Purus semper eget duis at tellus at urna. Egestas congue quisque egestas diam in arcu cursus. Ut tellus elementum sagittis vitae et leo duis ut. Ut aliquam purus sit amet. Quisque egestas diam in arcu cursus euismod quis. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius.</p>
    </div>
    <AccordionMine  data={data.players} title="players"/>
    <BasicExampleAccordion data={data.students} title="students"/>
    <BasicExampleAccordion data={data.players} title="players"/>
    </>
}

export default About
