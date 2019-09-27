# careerboost_SOUNDGYM
> React-Native로 크로스 플랫폼 뮤직 플레이어 앱 만들기(iOS/Android 선택)

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
- App.js | route
  - Main.js | 보관함
  - Player.js | 음악 컨트롤러
    - ImageResize.js
    - ProgrressNow.js
  - MiniPlayer.js | 음악 컨트롤러 최소화
  - ForYou.js