// 3. 변수
var book;   // 변수만 선언
var book = "책";
var book = "책", point = 123;   // 콤마로 구분하여 다수 작성
var book = "책",
    point = 123;
// 의미를 부여하여 변수 이름 작명 -> 시멘틱(Semantic) 이라고 한다.


// [코드 1] 값이 바뀜
var point = 123, point = 456;
point = 789;    // 나중에 할당한 값으로 바뀜 

// [코드 2]같은 값 할당
var point = amount = 123;   
// 권장 형태는 아님, 값이 연동되는 경우도 있음 -> amount에 다른값 할당시 point에도 할당되는 경우. 오래된 브라우저에서 일어나는일

        