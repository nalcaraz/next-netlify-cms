

import { useRouter } from 'next/router';
import Markdown from 'react-markdown';
import Layout from '../../components/layout';



const EventsPage = (props) => {
  const router = useRouter();
  const { data: eventData } = props
  const event = eventData[0]
  console.log("props", props)
  return (
    <Layout className="markdown"><h1>{router.query.event}</h1>
      {/* <div dangerouslySetInnerHTML={{ __html: event[0].body }}/> */}
      <Markdown source={event.body}></Markdown>
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

EventsPage.getInitialProps = async function (context) {

  const { event } = context.query;
  const response = await require('../../content/events/event.md');
  let { attributes: { events } } = response;
  const data = await events.filter(e => {

    return e.name === event

  })

  return {
    data
  };
};
export default EventsPage;