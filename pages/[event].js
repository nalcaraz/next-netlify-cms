

import { useRouter } from 'next/router';

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
  
      <h1>{router.query.id}</h1>
    
  );
};