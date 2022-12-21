<br>

<div align="center">

<h3>👩🏻‍🏫클래스 IOI👩🏻‍🏫</h3>

<p align="center">강의 영상을 직접 촬영하여 클래스를 개설할 수 있는 서비스, <br /> 클래스 아이오아이입니다.

![react](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=flat-square&logo=styled-components&logoColor=white)

[🎥클래스IOI 시연영상](https://youtu.be/ggKWn5Ho6kc) <br />
[📆클래스IOI Trello](https://trello.com/b/hqsVl1bu/ioi)

</div>

<br>

## 기술 스택

### `React.js`

<img src="https://user-images.githubusercontent.com/93499154/208901555-8b899340-9db1-465f-980b-24156cf4ba58.png" width="100">

- JavaScript 라이브러리/프레임워크 중 시장점율이 가장 높다는 점에서, 참고할 수 있는 신뢰할만한 자료가 많을 것이라고 판단하였습니다.
- JSX 문법을 사용함에 따라, JavaScript에 대한 지식을 바탕으로 적용해볼 수 있어 접근성이 좋다고 생각했습니다.
- Vue, Angular와 같은 프레임워크가 아닌 React는 라이브러리이기 때문에 자유도가 높을 것이라고 판단했습니다.

### `styled-components`

<img src="https://user-images.githubusercontent.com/93499154/208901425-d5ce739f-f867-4cd9-8090-048b2575096f.png" width="100">

- CSS-in-JS 방식을 통해 CSS, SCSS파일을 생성하지 않고도 해당 컴포넌트에 바로 스타일을 삽입할 수 있습니다.
- 각 컴포넌트에 대한 스타일을 한 눈에 파악할 수 있고, 자유롭게 CSS 컴포넌트를 만들 수 있다는 장점을 생각해 이 기술을 적용하였습니다.

<br>

## 프로젝트 기능

> 🙋🏻‍♀️ 저는 메인 페이지에 속한 기능을 담당하였으며, 관련한 상세한 내용에 대해서는 <a href="https://velog.io/@hye_rin/%ED%81%B4%EB%9E%98%EC%8A%A4IOI-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9A%8C%EA%B3%A0%EB%A1%9D">블로그 포스팅</a>을 통해 확인할 수 있습니다.

### 📺 내가 원하는 강의 보기

- 메인 카테고리, 서브 카테고리를 선택해 원하는 카테고리의 강의를 필터링하여 확인 가능
- 인기순, 가격순으로 강의 목록을 정렬 가능
- 마음에 드는 강의는 찜하기 눌러 찜목록에 저장 가능

### 🎥 강의 영상 촬영 및 등록

- 로그인 시, CreatorCenter에서 바로 영상을 촬영하고 등록하여 클래스 개설 가능

### 🔐 소셜 로그인

- 카카오 소셜 로그인 가능

<br>

## 성능 개선 내용

> 🚀 프로젝트가 끝난 이후, 개인적으로 성능 최적화 작업을 진행하였습니다. lighthouse를 통해 초기 <strong>18점</strong>이었던 Performance 점수를 <strong>91점</strong>까지 개선할 수 있었습니다. 성능 개선을 위해 노력을 기울인 내용은 아래의 내용과 같습니다. 더 자세한 성능 개선 시 마주한 문제와 해결 과정에 대한 내용은 <a href="https://velog.io/@hye_rin/lighthouse%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EC%84%B1%EB%8A%A5-%EC%B5%9C%EC%A0%81%ED%99%94">블로그 포스팅</a>을 통해 확인할 수 있습니다.

1. unsplash image cdn을 사용해 이미지 용량을 줄였습니다.
2. `@react-icons/all-files`라이브러리를 사용하여 `react-icons` 번들 사이즈 줄였습니다.
3. `React.lazy()`를 사용한 코드 분할을 통해 초기 렌더링 시의 파일 용량을 줄였습니다.
4. 동적으로 레이아웃이 변경되는 부분에 대해 `height`를 지정함으로써 CLS(Cumulative Layout Shift)를 개선하였습니다.

<br>

## 블로그 포스팅

[![Velog's GitHub stats](https://velog-readme-stats.vercel.app/api?name=hye_rin&slug=lighthouse를-이용한-성능-최적화&color=dark)](https://velog.io/@hye_rin/lighthouse%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EC%84%B1%EB%8A%A5-%EC%B5%9C%EC%A0%81%ED%99%94)

[![Velog's GitHub stats](https://velog-readme-stats.vercel.app/api?name=hye_rin&slug=클래스IOI-프로젝트-회고록&color=dark)](https://velog.io/@hye_rin/%ED%81%B4%EB%9E%98%EC%8A%A4IOI-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9A%8C%EA%B3%A0%EB%A1%9D)

<br>

## 👨‍👨‍👦‍👦 팀원

<table>
    <tr>
        <td align="center"><img src="https://user-images.githubusercontent.com/93499154/208896343-59b34c50-f89a-4ceb-8e7d-1a6bdd0a0a18.png" width="100"></td>
        <td align="center"><img src="https://user-images.githubusercontent.com/93499154/208896498-126d95de-db48-4a7d-a7bf-27151ec93b5c.png" width="100">
        </td>
        <td align="center"><img src="https://user-images.githubusercontent.com/93499154/208896583-f3d63adf-b5be-4a72-82ee-edfb45d61393.png" width="100"></td>
        <td align="center"><img src="https://user-images.githubusercontent.com/93499154/208896708-00f9be1f-6f6f-4e1d-9294-33e2ecf0bde7.png" width="100"></td>
    </tr>
    <tr>
        <td align="center"><a href="https://github.com/HyeRrin">주혜린</a></td>
        <td align="center"><a href="https://github.com/ihd0628">이승훈</a></td>
        <td align="center"><a href="https://github.com/galee1025">이가을</a></td>
        <td align="center"><a href="https://github.com/Kang-Jinsoo">강진수</a></td>
    </tr>
</table>
