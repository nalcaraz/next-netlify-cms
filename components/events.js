import React from 'react'
import Link from 'next/link'
// This needs to be dynamic based on the files in the content page
import content from '../content/events/event.md'


const Events = ({events}) =>{ 
  let { html , attributes:{ title, } } = content;
  return(
    
    <ul>
     
    </ul>
 
  
)}

Events.getInitialProps = async ({ req }) => {
    const res = await fetch("../content/events")
    console.log("response", res)
    const json = await res.json()
    return { events: json }
  }

export default Events
