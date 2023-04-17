import { BallTriangle } from 'react-loader-spinner';
const Loader = () => {
  return (
    <BallTriangle
      height={100}
      width={100}
      radius={5}
      color="orange"
      ariaLabel="ball-triangle-loading"
      visible={true}
      wrapperStyle={{ justifyContent: 'center', marginTop: '30vh' }}
    />
  );
};
export default Loader;