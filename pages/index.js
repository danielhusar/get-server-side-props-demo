import Head from "next/head";

const Home = ({ foo }) => {
  return <div className="container">Hi there!</div>;
};

export default Home;

export function getServerSideProps() {
  return {
    props: {
      foo: Symbol("foo")
    }
  };
}
