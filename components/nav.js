import React from 'react'
import Link from 'next/link'
import navContent from '../content/nav.md'


const Nav = () => {
  let { attributes: { title } } = navContent;
  return (

    <nav>
      <ul>
        {/* <div dangerouslySetInnerHTML={{ __html: html }}/> */}
        <li>{title}</li>
        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>

      </ul>

      <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      nav {
        text-align: center;
        border: solid 1px #9E9E9E;
        background-color: #9E9E9E;
        color: white;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
    `}</style>
    </nav>
  )
}

export default Nav
