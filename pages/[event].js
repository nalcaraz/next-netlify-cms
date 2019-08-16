
import Layout from '../../comps/layout';
import { useRouter } from 'next/router';
import Markdown from 'react-markdown';

// //need to figure out how to get event posts
// function getPosts() {
//     return [
//       { id: 'hello-nextjs', title: 'Hello Next.js' },
//       { id: 'learn-nextjs', title: 'Learn Next.js is awesome' },
//       { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' }
//     ];
//   } 

export default () => {
  const router = useRouter();
  return (
    <Layout>
      <h1>{router.query.id}</h1>
      <div className="markdown">
        <Markdown
          source={`
This is our blog post.
Yes. We can have a [link](/link).
And we can have a title as well.

### This is a title

And here's the content.
      `}
        />
      </div>
      <style jsx global>{`
        .markdown {
          font-family: 'Arial';
        }

        .markdown a {
          text-decoration: none;
          color: blue;
        }

        .markdown a:hover {
          opacity: 0.6;
        }

        .markdown h3 {
          margin: 0;
          padding: 0;
          text-transform: uppercase;
        }
      `}</style>
    </Layout>
  );
};