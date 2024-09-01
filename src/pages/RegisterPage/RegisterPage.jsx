import { useRecoilValue } from 'recoil';
import { RegisterStep } from '../../recoil/atoms/state';
import RegisterFirst from './PageComponents/RegisterFirst';
import RegisterSecond from './PageComponents/RegisterSecond';
import RegisterSidebar from './RegisterComponents/RegisterSideBar';
import { PageLayout } from '@/Layout';
import { TopNavigation } from '@/components';

const RegisterPage = () => {
  const Step = useRecoilValue(RegisterStep);
  return (
    <PageLayout topNavigation={<TopNavigation />}>
      <div style={{ display: 'flex' }}>
        <RegisterSidebar />
        {Step === 1 && <RegisterFirst />}
        {Step === 2 && <RegisterSecond />}
      </div>
    </PageLayout>
  );
};

export default RegisterPage;
