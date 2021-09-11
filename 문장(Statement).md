## debugger

- debugger 위치에서 실행 멈춤
- 브라우저의 개발자도구 창이 열러 있을 때만 멈춤. 열려있지 않으면 멈추지 않음
- ES5 부터 지원

```java
var sports = "스포츠";
debugger;
console.log(sports);
```

## do ~ while

- 형태 : do 문장 while (표현식)
- 처리 방법은 while 문과 같음. 단, do 문을 먼저 실행

    ```java
    var k = 0;
    do {
    	log("do : ", k);
    	k++;
    } while (k < 3) {
    	console.log("while : ", k)'
    }

    // do : 0
    // do : 1
    // do : 2
    // while : 3
    ```

    - 먼저 do  문을 실행한 후 while 문 표현식을 평가한다. true이면 do 문의 블록 다시실행하고 false이면 while 문의 블록을 실행한다.

## for()

- 형태 : for (초깃값opt; 비교opt; 증감opt) 문장
- 형태에서 opt는 생략 가능
    - 증감 생략

        ```java
        for (var k = 0; k < 3;) {
        	console.log(k);
        	k++;
        }

        // 0
        // 1
        // 2
        ```

    - 초깃값과 증감 생략

        ```java
        var k = 0;
        for (; k < 3;) {
        	console.log(k);
        	k++;
        };

        // 0
        // 1
        // 2
        ```

    - 비교와 증감 생략

        ```java
        for (var k = 0; ;) {
        	console.log(k);
        	k++;

        	if (k > 2) {
        		break;
        	}
        }

        // 0
        // 1
        // 2
        ```

    - 모두 생략

        ```java
        var k = 0;
        for (;;) {
        	console.log(k);
        	
        	if (k === 2) {
        		// for()문 종료
        		break;
        	}
        	k++;
        }

        // 0
        // 1
        // 2
        ```

## break, continue

### break

- 형태

    break;

    break 식별자;

- 반목문 종료
- for, for~in, while, do~while, switch 에서 사용

### continue

- 형태

    continue;

    continue 식별자;

- 반목문의 처음으로 분기
- for, for~in, while, do~while 에서 사용

    ```java
    for (var k = 0; k < 5; k++) {
    	if (k === 2 || k === 3) {
    		continue;
    	}
    	console.log(k);
    }

    // 0
    // 1
    // 4
    ```

    - continue를 만나면 그 아래 문장은 수행하지 않고 증감식(k++)로 가게된다.

## switch

- 형태 :

    switch (표현식) { 

    case 표현식: 문장 리스트 opt

    default: 문장 리스트 opt

    }

- break 사용

    ```java
    var exp = 1;
    switch (exp) {
    	case 1:
    		console.log(100);
    	case 2: 
    		console.log(200);
    }

    // 100
    // 200
    ```

    - 조건에 일치하는 값인 case 1 수행 한 후 아래의 모든 문장을 수행하므로 200 또한 출력된다.
    - 이를 방지하려면 break 를 작성해야 한다.

    ```java
    var exp = 1;
    switch (exp) {
    	case 1:
    		console.og(100);
    		break;
    	case 2:
    		console.log(200);
    }

    // 100
    ```

- 일치하는 case 가 없으면 default 수행

    ```java
    var exp = 7, value;
    switch (exp) {
    	case 1:
    		value = 100;
    	default:
    		value = 700;
    	case 2: 
    		value = 200;
    }
    console.log(value);

    // 200
    ```

- OR(||) 형태

    ```java
    var exp = 3;
    switch (exp) {
    	case 2:
    	case 3:
    		console.log(100);
    }

    // 100
    ```

## try-catch, throw

### try-catch

- 형태 :

    try 블록 catch (식별자) 블록

    try 블록 finally 블록

    try 블록 catch (식별자) 블록 finally 블록

### throw

- 형태 : throw 표현식;
- 명시적으로 예외를 발생시킴
- 예외가 발생하면 catch 실행

    ```java
    try {
    	throw "예외 발생시킴";
    	var sports = "스포츠";
    } catch (error) {
    	console.log(error);
    	console.log(sports);
    }

    // 예외 발생시킴
    // undefined
    ```

- 프로퍼티 형태 - {name: 메시지} 형태

    ```java
    try {
    	throw {
    		msg: "예외 발생시킴",
    		bigo: "임의의 이름 사용"
    	};
    } catch (error) {
    	console.log(error.msg);
    	console.log(error.bigo);
    }

    // 예외 발생시킴
    // 임의의 이름 사용
    ```

- Error 오브젝트 사용

    ```java
    try {
    	throw new Error("예외 발생시킴");
    } catch (error) {
    	console.log(error.message);
    }

    // 예외 발생시킴
    ```

## strict 모드

- 형태 : "use strict"
- 엄격하게 JS 문법 사용의 선언
- 작성한 위치부터 적용
- ES5부터 지원

    ```java
    book = "책";
    console.log(book);  // 책
    ```

    - var 를 작성하지 않았지만 변수가 선언되고 "책"이 할당된다.

    ```java
    "use strict";
    try{
    	book = "변수 선언하지 않음";
    	console.loog(book);
    } catch (error) {
    	console.log(error.message);
    }

    // book is not defined
    ```

    - use strict 선언했으므로 에러 발생.
    - 코딩 실수를 예방할 수 있으므로 use strict 선언은 필수적