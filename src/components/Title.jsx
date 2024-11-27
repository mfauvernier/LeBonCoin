/* eslint-disable */
const Title = ({ level, children }) => {
  if (level === 2) {
    return <h2 className="my-6 text-xl font-bold">{children}</h2>;
  }
  if (level === 3) {
    return <h3 className="my-4 text-lg font-bold">{children}</h3>;
  }
};

export default Title;
