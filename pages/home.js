import React, { Component } from 'react'
import content from '../content/home.md';
import Link from 'next/link';



const PostLink = ({ post }) => (
  <li>
    <Link href="/p/[id]" as={`/p/${post.id}`}>
      <a>{post.title}</a>
    </Link>
    <style jsx>{`
    li {
      list-style: none;
      margin: 5px 0;
    }

    a {
      text-decoration: none;
      color: blue;
      font-family: 'Arial';
    }

    a:hover {
      opacity: 0.6;
    }
  `}</style>
  </li>
);
//need to figure out how to get event posts
function getPosts() {
  return [
    { id: 'hello-nextjs', title: 'Hello Next.js' },
    { id: 'learn-nextjs', title: 'Learn Next.js is awesome' },
    { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' }
  ];
}


export default class Home extends Component {
  render() {
    let { html , attributes:{ title, cats } } = content;
    return (

      <article>
        <ul>
          {getPosts().map(post => (
            <PostLink key={post.id} post={post} />
          ))}
        </ul>
          {/* <h1>{title}</h1>
          <div dangerouslySetInnerHTML={{ __html: html }}/>
          <ul>
              { cats.map((cat, k) => (
                  <li key={k}>
                    <h2>{cat.name}</h2>
                    <p>{cat.description}</p>
                  </li>
              ))}
          </ul> */}
      </article>
    )
  }
}