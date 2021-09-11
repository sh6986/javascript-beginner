## 연산자

### 연산자 형태

- +, -, *, /, %
- >, > =, <, < =
- ==, ! =, ===, ! ==
- 콤마(,), typeof, delete, void
- instanceof, in, new 등

## 표현식

### 표현식 형태

- 1 + 2
- var total = 1 + 2;
- var value = total / (2 + 3);

## 할당 연산자

- 단일 할당 연산자

    = 하나만 사용

    var result = 1 + 2;

- 복합 할당 연산자

    = 앞에 연산자 작성

    +=, -=, *=, /=, %=, << =, >> =, >>> =, &=, ^=, |=

- 먼저 =앞을 연산한 후, 할당

    var point = 7;

    point += 3;

## 산술 연산자(+ 연산자)

- + 양쪽의 표현식을 평가

    평가 결과를 더함

- 평가 결과 연결

    한 쪽이라도 숫자가 아니면 연결

    ```java
    var two = "2";
    var value = 1 + two;
    console.log(value);  // 12
    console.log(typeof value);  // string
    ```

- 왼쪽에서 오른쪽으로 연산

    ```java
    var value = 1 + 5 + "ABC";
    console.log(value);  // 6ABC
    ```

## 숫자로 변환

- 연산하기전에 우선 숫자로 변환
    - Undefined → NaN
    - Null → +0
    - Boolean → true : 1, false : 0
    - Number → 변환 전/후 같음
    - String → 값이 숫자이면 숫자로 연산. 단, 더하기(+)는 연결
- 변환된 값으로 연산

    ```java
    var value;
    console.log(10 + value);  // NaN
    ```

    - value 값은 undefined
    - 10과 undefiend를 더하면 NaN

    ```java
    console.log(10 + null);  // 10
    console.log(10 + true);  // 11
    console.log(10 + false);  // 10
    ```

    - null은 0으로 변환
    - true는 1로, false 는 0으로 변환

    ```java
    console.log(10 + "123");  // 10123
    console.log(123 - "23");  // 100
    ```

    - 더하기는 숫자라도 타입이 String이면 문자열로 연결하지만 **-, *, /는 숫자로 변환하여 연산**한다.

## 산술 연산자(-, *, /, % 연산자)

### -연산자

- String 타입이지만, 값이 숫자이면 Number 타입으로 변환하여 계산

    ```java
    console.log("135" - 2);  // 133
    ```

### *연산자

- 숫자값으로 변환할 수 있으면 변환하여 곱한다.
- NaN 반환

    양쪽의 평가결과가 하나라도 숫자가 아닐 때

    ```java
    console.log(10 * "20");  // 200
    console.log(10 * true);  // 10
    console.log(10 * false);  // 0
    console.log(10 * null);  // 0
    console.log(10 * "A");  // NaN
    ```

- 소수 값이 생기는 경우 처리

    ```java
    console.log(2.3 * 3);  // 6.89999...5
    console.log(2.3 * 10 * 3 / 10);  // 6.9
    ```

    - 유동소수점 처리 때문에 6.9로 출력되지 않지만 6.89999...5가 정상출력이다.
    - 실수를 정수로 변환하여(2.3 * 10) 값을 구하고 다시 정수를 실수로 변환한다.(/ 10)

### /연산자

- NaN 반환

    양쪽의 평가 결과가 하나라도 숫자가 아닐 때

    분모, 분자 모두 0일때

- 분모, 분자가 0일때
    - 분모가 0 → Infinity 반환
    - 분자가 0 → 0 반환

### %연산자

```java
console.log(5 % 2.5);  // 0
console.log(5 % 2.3);  // 0.4000.....36
console.log((5 * 10 - (2 * 2.3 * 10)) / 10);  // 0.4
```

## 단항 연산자

### 단항 + 연산자

- 형태 : + value
- 값을 Number 타입으로 변환

    ```java
    var value = "7";
    console.log(typeof value);  // string
    console.log(typeof +value);  // number
    console.log(typeof Number(value));  // number
    ```

- Number() 도 기능이 같다. 이 함수가 가독성이 더 좋다.

### 단항 - 연산자

- 형태 : -value
- 값의 부호를 바꿈. + 는 -로, -는 + 로 바꿈

    ```java
    var value = 7;
    console.log(-value);  // -7
    console.log(8 + -value);  // 1
    console.log(value);  // 7
    ```

## 후치, 전치 연산자

### 후치 ++ 연산자

- 형태 : value++
- 값을 자동으로 1 증가시킴

    문장을 수행한 후에 1 증가. 즉, 세미콜론(;) 다음에서 증가

    ```java
    var one = 1;
    var value = one++ + 3;
    console.log(value);  // 4
    console.log(one);  // 2
    ```

### 전치 ++ 연산자

- 형태 : ++value
- 값을 자동으로 1 증가시킴

    문장 안에서 1 증가

    표현식을 평가하기 전에 1증가. 표현식에서 증가된 값을 사용

    ```java
    var one = 1;
    var value = ++one + 3;
    console.log(value);  // 5
    ```

## 유니코드, UTF

### 유니코드

- 세계의 모든 문자를 통합하여 코드화 (언어, 이모지 등)
- 코드 값을 코드 포인트(code Point) 라고 부름
- 0000~FFFF, 10000~1FFFF 값에 문자 매핑
- 유니코드 컨소시엄 [https://home.unicode.org/](https://home.unicode.org/)
- 표기방법
    - u와 숫자 형태 : u0031은 숫자 1
    - JS는 u 앞에 역슬래시(\) 작성

        ```java
        console.log("\u0031");  // 1
        console.log("\u0041");  // A
        console.log("\u1100");  // ㄱ
        console.log("\uac01");  // 각
        ```

    - 역슬래시(\)를 문자로 표시하려면 역슬래시 2개(\\)작성
    - ES6에서 표기방법 추가됨

### UTF(Unicode Transformation Format)

- 유니코드의 코드포인트를 매핑하는 방법
- UTF-8, UTF-16, UTF-32로 표기
- <meta charset="utf-8">
- UTF-8은 8비트로 코드 포인트 매핑
- 8비트 인코딩이라고 부름

## 관계 연산자

### 종류

- <, >, < =,  > = 연산자
- instanceof, in

### >연산자

- String 타입 비교
    - 한쪽이 String 타입이면 false

        ```java
        console.log(1 > "A");  // false
        ```

    - 양쪽이 모두 String 타입이면 유니코드 사전 순서로 비교

        ```java
        console.log(("\u0033" > "\u0032"));  // true
        console.log("A" > "1");  // true
        console.log("가" > "다");  // false
        ```

        - 코드포인트 값을 비교한다. 두번째의 경우 A: \u0041 이고 1:\u0031로 0041인 A가 더 크므로 >
        - 코드포인트는 유니코드를 등록할 때 부여한다.
        - 유니코드 등록 순서로 비교. 유니코드 사전 순서로 비교한다고도 말함
    - 문자 하나씩 비교

        ```java
        console.log("A07" > "A21");  // false
        ```

        - 왼쪽에서 오른쪽으로 문자 하나씩 비교. A와 A가 같으므로 다음을 비교

            0과 2를 비교하게 되며 false 반환

- <, < =,  > = 는 비교 기준만 다름

## 동등, 부등, 일치, 불일치 연산자

### == 연산자 (동등 연산자)

- 값 타입은 비교하지 않음

    1과 "1"이 같음

    ```java
    console.log(1 == "1");  // true
    ```

    - 값 타입이 다르면 문자 → 숫자로 변환하여 비교
    - 따라서 모두 1 이므로 true

    ```java
    var value;
    console.log(value == undefined);  // true
    ```

    ```java
    var value;
    console.log(value == null);  // true
    ```

    - value 는 값은 undefined, 타입도 Undefined, null은 값은 null 타입은 Object 이지만 true

### === 연산자 (일치 연산자)

- 왼쪽과 오른쪽의 값과 타입이 모두 같으면 true, 값 또는 타입이 다르면 false

    ```java
    console.log(1 === "1");  // false
    ```

    ```java
    var value;
    console.log(value == null);  // true
    console.log(value === null);  // false
    ```

### ! == 연산자 (불일치 연산자)

- 값 또는 타입이 다르면 true. true 가 아니면 false

## 논리연산자

### || 연산자

```java
var value, zero = 0, two = 2;
console.log(value || zero || two);  // 2
```

- value 값이 undefined이므로 false, zero 값이 0이므로 false, two 값이 2 이므로 true 가 되며 two 변숫값을 반환
- true 가 아니라 true 가 되는 변숫값 반환. 2가 true 이므로 전체 비교는 true

```java
var value, zero = 0;
console.log(zero || value);  // undefined
```

- 마지막까지 비교하였는데 모두가 false 이면 false가 아니라 마지막 변숫값 반환

```java
var one = 1;
console.log(one === 1 || two === 2);  // true
```

- 왼쪽의 (one === 1) 결과가 true 이므로 true 반환
- 왼쪽 비교 결과가 true 이면 오른쪽은 비교하지 않음. 오른쪽을 비교하면 two 변수가 없으므로 에러 발생

### && 연산자

```java
var one = 1, two = 2;
console.log(one && two);  // 2
```

- 모두가 true이면 마지막 변수값을 반환한다. 따라서 2 반환

```java
var one = 1, zero = 0;
console.log(one && zero && nine);  // 0
```

- 왼쪽결과가 false 이면 다음은 비교하지 않는다.
- nine을 비교하면 에러 발생

## 연산자 우선순위

[https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Operator_Precedence](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Operator_Precedence) 참고