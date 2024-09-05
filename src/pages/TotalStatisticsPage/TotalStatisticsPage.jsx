import * as S from './TotalStatisticsPage.style';
import { PageLayout } from '@/Layout';
import { TopNavigation } from '@/components';

const TotalStatisticsPage = () => {
  return (
    <PageLayout topNavigation={<TopNavigation />}>
      <S.Container>
        <S.TotalStatisticsPage>
          <div> HI 👋 </div>
        </S.TotalStatisticsPage>
      </S.Container>
    </PageLayout>
  );
};

export default TotalStatisticsPage;
