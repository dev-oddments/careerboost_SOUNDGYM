# careerboost_SOUNDGYM
> React-Native로 크로스 플랫폼 뮤직 플레이어 앱 만들기(iOS/Android 선택)

## What I did
![gif](musicPlayer/src/assets/musicPlayer.gif)
## React Native 학습
- 환경구성
  - `react-native init calculator`
  - `cd calculator && npm i`
  - prettier &lint
    - `yarn add eslint@5.16.0 --exact -D`
    - `.vscode/setting.json`에 https://github.com/JeffGuKang/react-native-eslint-prettier-starter
    - vscode extension에 Prettier설치
      - command + shift + p 입력 후 Format Documnet하면 코드정렬 됨
  - `npm install --save react-native-router-flux`
  - `npm install react-native-ionicons`
  - react-native-track-player
    - `npm install --save react-native-track-player`
    - `npm install --save react-native-swift`
    - xcode 열어서 dummy.swift 만들기 // [ref](https://react-native-kit.github.io/react-native-track-player/install/#troubleshooting)
    - Podfile에 `platform :ios, '10.0'` 수정 후 pod install // [ref](https://github.com/react-native-kit/react-native-track-player/issues/664)
  - `npm install native-base --save`
  - `npm install @react-native-community/slider`
  - `cd ios && pod install && cd ..`
  - `react-native link @react-native-community/slider`
  - `react-native link`
- RN
  - AppRegistry
    - React Native 앱을 실행하는 JS 진입 점
    - App 루트 구성 요소는 `AppRegistry.registerComponent`로 등록해야함
    - 네이티브 시스템은 App에 대한 번들을 로드 한 다음 `AppRegistry.runApplication`을 호출하여 준비가 되었을 때 실제로 응용 프로그램을 실행할 수 있음
    - 뷰를 소멸시킬때는 `AppRegistry.unmountApplicationComponentAtRootTag`를 호출
  - react hooks
    - 함수형 컴포넌트에서도 상태 관리를 할 수 있는 useState, 렌더링 직후 작업을 설정하는 useEffect 등의 기능등을 제공
      - 클래스 컴포넌트를 작성하지 않고도 대부분의 기능 사용 가능
    - 함수형 컴포넌트의 첫번째 파라미터가 props임 : `const MyComponent = ({props}) => {}`
    - useState
      - 하나의 useState 함수는 하나의 상태 값만 관리를 할 수 있음
      - 여러 상태를 관리하려면 useState 를 여러번 사용하면 됨
      - `const [value, setValue] = useState({상태의 기본값});` : 배열 비구조화 할당 문법
        - `const array = ['dog', 'cat', 'sheep'];`
        - `const [first, second] = array;`
        - `console.log(first, second); // dog cat`
    - useEffect
      - 리액트 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정 할 수 있는 Hook 
      - `useEffect(() => {});`
      - useEffect 에서 설정한 함수가 컴포넌트가 화면에 가장 처음 렌더링 될 때만 실행되고 업데이트 할 경우에는 실행 할 필요가 없는 경우
        - `useEffect(() => {}, []);`
      - 특정 값이 업데이트 될 때만 실행하고 싶을 때
        - `useEffect(() => {}, [{검사하고 싶은 값}]);`
      - 만약 컴포넌트가 언마운트되기 전이나, 업데이트 되기 직전에 어떠한 작업을 수행하고 싶을 때
        - `useEffect(() => { return () =>{} });`
      - 오직 언마운트 될 때만 뒷정리 함수를 호출하고 싶으면 useEffect 함수의 두번째 파라미터에 비어있는 배열을 넣어면 됨
        - `useEffect(() => { return () =>{} }, []);`
    - useContext : context 쉽게 사용
    - useReducer : 인풋 상태 관리
    - useMemo : 함수형 컴포넌트 내부에서 발생하는 연산을 최적화
    - useCallback : 주로 렌더링 성능을 최적화해야 하는 상황에서 사용
    - useRef : 함수형 컴포넌트에서 ref 를 쉽게 사용 할 수 있게 해줌
  - PropTypes
    - 컴포넌트의 props에서 타입을 체크하고 싶을 때
    - array, bool, func, number, object, string, symbol, node, element, instanceOf(ClassName), oneOf([...Value]), oneOfType([...PropTypes]), arrayOf(PropTypes), objectOf([PropTypes]), shpae({key:PropTypes}), exat({key:PropTypes})
  - FlatView
    - data : 리스트에 보여줄 데이터, 객체를 넣어주면 됨
    - renderItem : 각 아이템 부분을 어떻게 렌더링 할 것인지 정해줌 | JSX를 return 하는 메소드를 지정
    - ListHeaderComponent : 헤더 부분을 어떻게 렌더링할 것 인지 정해줌
    - ListEmptyComponent : 리스트에 데이터가 비었다면 어떻게 렌더링 할 것인지 정해줌
    - removeClippedSubviews : 기본상태는 true, true로 되있으면 많은 데이터를 끊김없이 보여줌
    - keyExtractor : 각 아이템의 키 값을 지정해줌
    - 스크롤 사용하고 싶을 때
      - stickyHeaderIndices={[0]} | 고정하는 헤더를 0번째있는 리스트 헤더아이템으로 사용하겠다는 의미
- JS
  - Singleton 
    - 전체 시스템에서의 하나의 인스턴스만 존재하도록 보장하는 객체 생성패턴
    - 객체 리터럴이 바로 싱글턴 패턴의 대표적인 예
    - 특정 클래스의 인스턴스를 오직 하나만 유지하고, 동일한 클래스로 새로운 객체를 생성해도 처음 만들어진 객체를 얻게됨

  - Promise
    - JS에서 대부분의 작업들이 비동기로 이루어지고 작업 요청시 등록해놓은 콜백 함수로 결과를 알려주는 식으로 진행
    - 최근엔 프로젝트 규모가 커지면서 콜백중첩(지옥..)
    - promise 활용시 비동기 작업 순차적으로, 병렬적으로 진행 가능 
    - promise state
      - pdeing : 아직 약속을 수행중인 상태(Fulfilled 혹은 reject 되기 전)
      - fulfilled : 약속(promise)이 지켜진 상태 | 해당 상태에 따른 것 실행
      - rejected : 약속(promise)가 어떤 이유에서 못 지켜진 상태 | 해당 상태에 따른 것 실행
      - settled : 약속이 지켜졌든 안지켜졌든 일단 결론이 난 상태
      - 콜백헬을 방지할 수 있음!
    - 누군가 만든 비동기함수 역시 프로미스 객체를 리턴하게 만들어 놨으므로 promise를 실행(.then 또는 .catch)하면 됨
      - 이런식으로 체이닝 가능!
    - promise.catch() | 에러가 나면 캐치 가능하께
    - promise.all() | 여러개의 프로미스가 모두 완려되었을 때 실행
  - async/await 에러 핸들링
    - callback, promise 외에 비동기 코드를 작성하는 새로운 방법
    - 실제로는 최상위에 위치한 promise에 대해서 사용하게 됨
    - plain callback 이나 node callback과 함께 사용할 수 없음
    - async/await는 promise처럼 non-blocking임
    - async/await는 비동기 코드의 겉모습과 동작을 좀 더 동기 코드와 유사하게 만들어줌
      - 이것이 async/await의 가장 큰 장점
    - await 키워드는 오직 async 로 정의된 함수의 내부에서만 사용될 수 있음
    - 모든 async 함수는 암묵적으로 promise를 반환하고, promise가 함수로부터 반환할 값을 resolve함
    - 장점
      - 간결함과 깔끔함
        - .then을 추가할 필요가 없음
        - response 를 해결하기 위한 비동기 함수를 만들 필요없음
        - 코드의 nesting을 피할 수 있음
      - 에러 핸들링
        - 동기, 비동기 에러 모두 try/catch를 통해 처리 가능
      - 분기
        - promise의 nesting으로부터 탈출! 가독성이 높아짐
      - 중간값
        - promise로 구현시 코드의 의미를 희생시키는 것과 달리, 단순하고 직관적으로 코드 작성 가능
      - error stack
        - promise 체인에서 반환되는 error stack은 어디서 에러가 발생했는 지에 관해 어떤 힌트도 주지 않음
        - async/await에서 발생한 error stack은 error를 포함한 함수를 가르킴
      - 디버깅
        - promise는 return되는 arrow function들에 breakpoint를 잡을 수 없음
        - async/await를 사용하게되면 arrow function을 많이 사용할 필요가 없고, 디버그도구는 동기화된 코드를 실행하는 것과 다름없이 동작
    - 단점
      - 비동기 코드를 덜 분명하게 만듬
      - Node 7은 LTS가 아직 릴리즈되지 않음
    - async/await는 최근 몇년간 JavaScript에 추가된 기능 중에 가장 혁명적인 기능 중에 하나
  - moment
    - 자바스크립트에서 날짜 형식의 데이터를 파싱, 유효성 체크, 조작, 화면에 출력을 쉽게 할 수 있도록 도와주는 라이브러리
  - lodash
    - 자바스크립트 유틸리이 라이브러리
    - array, collection, date, number, object등을 통해 데이터를 쉽게 다룰 수 있음
    

- react-navigation vs react-native-router-flux
  - react-navigation
    - `this.props.navigation.navigate('Login');`
      - 컴포넌트의 프로퍼티로 navigation 객체가 전달되고 navigation에 있는 navigate 함수를 통해서 이동 // 객체를 받은 해당 컴포넌트에서만 사용 가능
    - 페이지별 전환효과 주기 번거로움
    - 라우팅 될 수 있는 페이지 스코프가 한정되어 있어 페이지로 모달을 구현하기 어려움

- RNRF(react-native-router-flux)
  - [tabbed navigation](https://medium.com/@sportnak/adding-custom-tabbed-navigation-in-react-native-router-flux-e08429c22cce)
  - `Actions.login();`
    - Actions를 임포트하여 Actions 객체에 있는 login 함수(액션 트리거)를 통해서 이동 // 어디서든 이동 가능
  - 각 페이지별로 전환효과 주기가 쉬움
  - 라우팅 가능한 페이지의 스코프가 굉장히 넓기 때문에 모든 페이지에서 접근 가능한 라우트 페이지를 구현하기 쉬움
  - react-native-drawer와 통합가능
  - 데이터 전달할려면
    - `Actions.player ({title: 'something'})`
    - `Actions.push('{key}')`
  - pop
    - `Actions.pop()`
  - 네비게이션뷰 back button 색 변경 `tintColor='rgb(218,67,84)'`

- react-native-track-player
  - addEventListener(event, listener)
    - JS에서의 addEventListener는 이벤트를 등록하는 가장 권장되는 방식
    - 이 방식을 이용하면 여러개의 이벤트 핸들러를 등록할 수 있음
    - 프로그램 내부에서 입력을 받아 처리하는 일종의 콜백 서브루틴
```
Background Audio: Android and iOS and Windows.
Audio File Location: Local and Network.
Record Audio: No
Custom Audio Control: Seek, Play, Pause, Loop, Set Volume, Control Buffer, Media Control setup, Google Cast controls (Android only), Caching (Android only).
Can Stream Audio Files: Yes
Documentation: Great Documentation
```

## 구현 방향
- **iOS 의 Music 앱을 기반으로 제작**
- Component
  - ImageResize.js
  - ProgressNow.js
- App.js | route
- Screen
  - Main.js | 보관함
  - Player.js | 음악 컨트롤러
  - MiniPlayer.js | Component로 가게될 듯
  - PlaylistScreen.js | 플레이리스트 목록 - collectionview 스타일
  - ListScreen.js | 플레이리스트 내부 리스트
  - AlbumScreen.js | 앨범목록 - collectionview 스타일
  - 예정
    - AlbumListScreen.js | 앨범 내부 리스트
    - ForYou.js


## Todo
- **Code**
  - [x] 멘토님 코드리뷰 바탕으로 리팩토링
  - [ ] 컴포넌트 쪼개기
  - [x] slider 바꾸기
    - @react-native-community/slider
  - [ ] 네트워크 로딩 시 안전하게 처리할 수 있도록 코리팩토링
- **UI/UX**
  - [x] modal 애니메이션 구현 
  - [ ] 미니플레이어 재구현
    - 재생중이면 tabview 위에 고정하여 표시
    - 재생중일 경우에만 표시
      - 컴포넌트화 및 mobx 사용 예정
- **Func**
  - [ ] 플레이리스트 제작 등을 처리할 간단한 backend 구성 
  - [ ] 음악 재생 로직 
    - 기본
      - 다음곡 재생
      - 반복
      - 셔플
    - 앨범
      - 앨범용 json 구성
      - 앨범 list screen
