import Nav from './nav';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

const Layout = props => (
  <div >
    <Nav />
   <div className="content"> {props.children}</div>
   <style jsx>{`
      .content {
       padding:16px;
      }
    
    `}</style>
  </div>
);

export default Layout;