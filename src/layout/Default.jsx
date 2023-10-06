import { Outlet } from 'react-router-dom';
import MainNavigationComponent from '../components/MainNavigationComponent';

const Default = () => {
  return (
    <>
      <MainNavigationComponent />
      <Outlet />
    </>
  );
}

export default Default;
