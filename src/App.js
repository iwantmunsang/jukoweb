import React, { useRef, useState } from 'react';
import './App.css';

function App() {
  const [isVisible, setIsVisible] = useState(false); // h1 태그 가시성 상태
  const [key, setKey] = useState(0); // 애니메이션 키를 위한 상태
  const [isAnimating, setIsAnimating] = useState(false); // 모자 애니메이션 상태
  const [canClick, setCanClick] = useState(true); // 클릭 가능 상태
  const audioRef = useRef(null); // audio 태그에 대한 참조 생성

  const handleClick = () => {
    if (!canClick) return; // 클릭 가능 여부 체크

    // audio 재생
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error('Error playing audio:', error); // 오류 핸들링
      });
    }

    // 매번 클릭할 때 새로운 키를 할당해 애니메이션을 다시 실행하게 함
    setKey(prevKey => prevKey + 1);
    setIsVisible(true); // h1 태그를 보이게 설정

    // 1초 후에 h1 태그를 다시 숨기도록 설정
    setTimeout(() => {
      setIsVisible(false);
    }, 1000);

    // 모자에 애니메이션 적용 (클래스 추가)
    setIsAnimating(true);

    // 0.5초 후에 애니메이션 클래스를 제거해 다음 클릭에 다시 적용되도록 설정
    setTimeout(() => {
      setIsAnimating(false);
    }, 500); // clcl 애니메이션 시간과 맞춤

    // 클릭 불가 설정 및 1초 후에 클릭 가능으로 변경
    setCanClick(false);
    setTimeout(() => {
      setCanClick(true);
    }, 1000);
  };

  const handleButtonClick = () => {
    console.log("Button Clicked!"); // 버튼 클릭 시 할 작업
  };

  return (
    <div className="App">
      {/* audio 태그 */}
      <audio ref={audioRef} src={require('./ardd.MP3')} />

      {/* isVisible이 true일 때 h1 태그가 보이고 애니메이션 적용 */}
      <h1 key={key} className={`ardd ${isVisible ? 'popcorn' : 'hidden'}`}>
        망겜이야
      </h1>

      {/* 이미지 클릭 시 clcl 애니메이션 실행 */}
      <div className={`image ${isAnimating ? 'cl' : ''}`} onClick={handleClick}></div>
    </div>
  );
}

export default App;
