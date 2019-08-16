import React, {Fragment} from 'react'
import Link from 'next/link'
// This needs to be dynamic based on the files in the content page
import content from '../content/events/event.md'


const Events = ({}) =>{ 
  let { html , attributes:{ title, events} } = content;
  console.log(events)

  return(
   <Fragment><h1>{title}</h1>
      <ul>
              {events &&  events.map((e, k) => (
                  <li key={k}>
                    <h2>{e.name}</h2>
                    <p>{e.description}</p>
                  </li>
              ))}
          </ul></Fragment> 
  
 
  
)}

// Events.getInitialProps = async ({ req }) => {
//     const res = await fetch("../content/events")
//     console.log("response", res)
//     const json = await res.json()
//     return { events: json }
//   }

export default Events
