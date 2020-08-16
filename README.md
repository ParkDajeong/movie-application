# MOVIE WEB

## 프로젝트 소개

The Movie DB API를 이용한 영화 정보 사이트.<br />
최신 영화, 혹은 인기있는 영화의 줄거리, 캐스트, 평점 등 관련 정보를 제공하며, 검색을 통해 원하는 영화의 정보를 찾아볼 수 있습니다.<br />
또한 마음의 드는 영화를 찜하여 따로 모아 볼 수 있습니다.<br />

링크: [MOVIE WEB](https://parkdajeong.github.io/movie-application/)<br/>

## 사이트 화면

### 1. Home

- **메인배너**<br />
  해당 목록(최신순, 인기순, 평점순)에서 랜덤으로 영화를 뽑아 출력한다.<br /><br />
  <img
       src="https://user-images.githubusercontent.com/43628429/90332181-e9c1df80-dff5-11ea-8435-4847250597c0.PNG"
       width="80%" height="auto" alt="Home-Main Banner" /><br/><br />
- **영화 목록**<br />
  기본은 인기순으로, 그 외 최신순, 평점순으로 영화 목록을 보여준다.<br /><br />
  <img
       src="https://user-images.githubusercontent.com/43628429/90332248-42917800-dff6-11ea-8d5e-cdaee582df82.PNG"
       width="80%" height="auto" alt="Home-List" /><br/><br/>

### 2. Detail

- **영화 정보**<br />
  해당 영화의 평점, 줄거리 등 간략한 정보와 출연진, 미디어, 그리고 비슷한 영화를 추천해 준다.<br /><br />
  <img
       src="https://user-images.githubusercontent.com/43628429/90332279-85ebe680-dff6-11ea-9b69-d7e16bf64d27.PNG"
       width="80%" height="auto" alt="Detail01" /><br /><br />
  <img
       src="https://user-images.githubusercontent.com/43628429/90332280-871d1380-dff6-11ea-8085-000ead5c265e.PNG"
       width="80%" height="auto" alt="Detail02" /><br/><br/>

### 3. MyMovie

- **나의 영화**<br />
  마음에 드는 영화를 찜(Like)하면 나의 영화 페이지에서 확인할 수 있다.<br /><br />
  <img
       src="https://user-images.githubusercontent.com/43628429/90332282-897f6d80-dff6-11ea-90b8-8931abf3d90e.PNG"
       width="80%" height="auto" alt="MyMovie" /><br/><br/>

### 4. Search

- **검색**<br />
  사용자가 단어를 입력하면 실시간으로 검색된 영화 목록을 출력한다.<br /><br />
  <img
       src="https://user-images.githubusercontent.com/43628429/90332284-8ab09a80-dff6-11ea-8983-a0853289b5cb.PNG"
       width="80%" height="auto" alt="Search" /><br/><br/>

## 개선할 점

- 렌더링 최적화
- 스크롤 시, 추가 데이터 가져오기
- 이미지 등 데이터 가져올 때, 로딩화면을 띄우기
- 유튜브 영상 팝업으로 띄우기
- redux, 비동기 관련 코드 좀 더 깔끔하게 정리
  <br /><br/>

## 배운 점

- react hooks
- Redux를 이용하여 리액트 상태 관리
- axios로 데이터를 요청하고 활용하는 법
- styled component를 이용하여 CSS-in-JS 방식으로 스타일링하는 법
