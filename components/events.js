import React, { Fragment } from 'react'
import Link from 'next/link'
// This needs to be dynamic based on the files in the content page
import content from '../content/events/event.md'


const Events = ({ }) => {
  let { attributes: { title, events } } = content;
  console.log(events)

  return (
    <Fragment><h3>{title}</h3>
      <ul>
        {events && events.map((e, k) => (
          <li key={k}>
            <Link href="/events/[event]" as={`/events/${e.name}`} >
              <a>{e.name}</a>
            </Link>
            <p>{e.description}</p>

          </li>
        ))}
      </ul></Fragment>



  )
}
export default Events
