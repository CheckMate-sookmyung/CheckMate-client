import * as S from './DashboardStatisticPage.style';
import { PageLayout } from '@/Layout';
import { Sidebar, TopNavigation } from '@/components';

const DashboardStatisticPage = () => {
  return (
    <PageLayout topNavigation={<TopNavigation />} sideBar={<Sidebar />}>
      <S.DashboardStatisticPage>
        <div> HI 👋 </div>
      </S.DashboardStatisticPage>
    </PageLayout>
  );
};

export default DashboardStatisticPage;
