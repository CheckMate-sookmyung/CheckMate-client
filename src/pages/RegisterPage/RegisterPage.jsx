import { useRecoilValue } from 'recoil';
import { RegisterStep } from '../../recoil/atoms/state';
import RegisterFirst from './PageComponents/RegisterFirst';
import RegisterSecond from './PageComponents/RegisterSecond';
import RegisterSidebar from './RegisterComponents/RegisterSideBar';
import { PageLayout } from '@/Layout';
import { TopNavigation } from '@/components';
import styled from 'styled-components';

const Sidebar = styled.div`
  display: block;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const RegisterPage = () => {
  const Step = useRecoilValue(RegisterStep);
  return (
    <PageLayout topNavigation={<TopNavigation />}>
      <Sidebar>
        <RegisterSidebar />
      </Sidebar>
      {Step === 1 && <RegisterFirst />}
      {Step === 2 && <RegisterSecond />}
    </PageLayout>
  );
};

export default RegisterPage;
