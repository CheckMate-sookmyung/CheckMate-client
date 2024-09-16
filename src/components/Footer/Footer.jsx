import * as S from './Footer.Style';

const FOOTER_INFO_LIST = [
  {
    title: '개발',
    contentList: [
      '류미성 (컴퓨터과학 21)',
      '조영서 (컴퓨터과학 21)',
      '한정현 (컴퓨터과학 21)',
    ],
  },
  {
    title: '디자인',
    contentList: ['김수진 (공예 21)', '문서영 (산업디자인 22)'],
  },
];

const Footer = () => {
  return (
    <S.Container>
      <S.Footer>
        <S.Logo>
          <img src="img/logo-blue.svg" alt="Logo" />
        </S.Logo>

        <S.InfoWrapper>
          <S.GroupWrapper>
            {FOOTER_INFO_LIST.map(({ title, contentList }) => (
              <S.Group key={title}>
                <S.Category>{title}</S.Category>
                <S.MemberList>
                  {contentList.map((content, index) => (
                    <S.MemberItem
                      key={content}
                      isLast={index === contentList.length - 1}
                    >
                      <S.Member>{content}</S.Member>
                    </S.MemberItem>
                  ))}
                </S.MemberList>
              </S.Group>
            ))}
          </S.GroupWrapper>

          <S.CopyrightWrapper>
            <S.University>
              <S.UniversityName>숙명여자대학교</S.UniversityName>
              <S.Address>
                04310 서울특별시 용산구 청파로47길 100 (청파동 2가)
              </S.Address>
            </S.University>
            <S.Copyright>
              Copyright ⓒ 소프트웨어학부 All Rights Reserved.
            </S.Copyright>
          </S.CopyrightWrapper>
        </S.InfoWrapper>
      </S.Footer>
    </S.Container>
  );
};

export default Footer;
