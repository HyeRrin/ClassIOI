import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import ClassList from './ClassList';
import FilterAndSortBox from './components/FilterAndSort/FilterAndSortBox';
import Carousel from './components/Carousel/Carousel';
import {
  MAIN_CATEGORY,
  SUB_CATEGORY,
} from './components/FilterAndSort/CategoryData';
import BASE_URL from 'config';

function Main() {
  const Token = localStorage.getItem('Token');
  const [classList, setClassList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [mainModalOpen, setMainModalOpen] = useState(false);
  const [selectTitle, setSelectTitle] = useState('');
  const [likedList, setLikedList] = useState([]);

  const fetchURL = searchParams.toString();
  const LIMIT = 12;

  // useEffect(() => {
  //   searchParams.set('limit', LIMIT);
  //   searchParams.set('offset', 0);
  //   setSearchParams(searchParams);

  //   if (Token) {
  //     fetch(`${BASE_URL}/likes/getList`, {
  //       headers: {
  //         authorization: Token,
  //       },
  //     })
  //       .then(res => res.json())
  //       .then(data => {
  //         console.log('data.message : ', data.message);
  //         setLikedList(data.message);
  //       });
  //   }
  // }, []);

  // useEffect(() => {
  //   fetch(`${BASE_URL}/main?${fetchURL}`)
  //     .then(res => res.json())
  //     .then(data => {
  //       setClassList(data.getFilter);
  //     });
  // }, [searchParams]);

  // Mock Data
  useEffect(() => {
    fetch(`data/Main/classListData.json`)
      .then(res => res.json())
      .then(data => {
        setClassList(data);
      });
  }, []);

  const movePage = pageNumber => {
    searchParams.set('limit', LIMIT);
    searchParams.set('offset', (pageNumber - 1) * LIMIT);
    setSearchParams(searchParams);
  };

  return (
    <MainContainer>
      <SlideContainer>
        <SlideBox>
          <Carousel />
          <ContentBox>
            <TextBox>
              <Title>
                IOI ?????? ?????????
                <br />
                ????????????
              </Title>
              <Detail>
                ????????? IOI ??????????????????
                <br />
                ?????? ?????? ????????? ???????????? ???????????????!
              </Detail>
            </TextBox>
          </ContentBox>
        </SlideBox>
      </SlideContainer>

      <CategoryBoxTitle>?????? ?????????</CategoryBoxTitle>

      <CategoryContainer>
        <FilterAndSortBox
          title="?????? ????????????"
          list={MAIN_CATEGORY}
          setSelectTitle={setSelectTitle}
          selectTitle={selectTitle}
          setClassList={setClassList}
        />
        <FilterAndSortBox
          title="?????? ????????????"
          list={SUB_CATEGORY}
          setSelectTitle={setSelectTitle}
          selectTitle={selectTitle}
        />
        <FilterAndSortBox title="??????" />
      </CategoryContainer>

      <ClassContainer>
        {classList.length > 0 &&
          classList.map(
            ({
              classId,
              thumbnail_image,
              creatorName,
              classTitle,
              like_count,
              price,
            }) => {
              return (
                <ClassList
                  key={classId}
                  classId={classId}
                  thumbnail_image={thumbnail_image}
                  creator={creatorName}
                  classTitle={classTitle}
                  like_count={like_count}
                  price={price}
                  likedList={likedList}
                />
              );
            }
          )}
      </ClassContainer>

      <BtnContainer>
        <PageBtn>??????</PageBtn>
        <PageBtn onClick={() => movePage(1)}>1</PageBtn>
        <PageBtn onClick={() => movePage(2)}>2</PageBtn>
        <PageBtn onClick={() => movePage(3)}>3</PageBtn>
        <PageBtn>??????</PageBtn>
      </BtnContainer>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  height: 2500px;
`;

const SlideContainer = styled.div`
  margin: 122px 0 100px 0;
  height: 440px;
  background-color: black;
`;

const SlideBox = styled.div`
  ${props => props.theme.variables.flex('row', 'flex-start', 'flex-start')}
  margin: 0 auto;
  padding-top: 50px;
  width: 1140px;
`;

const ContentBox = styled.div`
  padding: 25px 0 0 60px;
`;

const TextBox = styled.div`
  height: 288px;
`;

const Title = styled.p`
  margin-bottom: 20px;
  font-size: 34px;
  line-height: 44px;
  font-weight: bold;
  color: white;
`;

const Detail = styled.p`
  line-height: 25px;
  color: #ffffff99;
`;

const CategoryContainer = styled.section`
  margin: 0 auto;
  width: 1120px;
`;

const CategoryBoxTitle = styled.p`
  margin: 0 auto 30px;
  width: 1120px;
  height: 25px;
  font-size: 25px;
  font-weight: bold;
`;

const ClassContainer = styled.div`
  margin: 40px auto;
  width: 1140px;
`;

const BtnContainer = styled.div`
  ${props => props.theme.variables.flex('row', 'center', 'center')}
  margin: 0 auto 82px;
  width: 1140px;
`;

const PageBtn = styled.button`
  margin: 5px;
  padding: 10px 15px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    border-radius: 5px;
    background-color: #fceae1;
    color: #ff5600;
  }
`;

export default Main;
