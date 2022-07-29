// # 문제34 : sort 구현하기

// 민주는 체육부장으로 체육시간이 되면 반 친구들이 제대로 키 순서대로 모였는지를 확인해야 한다. 
//그런데 요즘 민주는 그것이 너무 번거롭게 느껴져 한 번에 확인하고 싶어한다. 

// 민주를 위해 **키가 주어지면 순서대로 제대로 섰는지 확인하는 프로그램**을 작성해보자.
// (키는 공백으로 구분하여 입력됩니다.)

// 입출력

// 입력 : 176 156 155 165 166 169
// 출력 : NO

// 입력 : 155 156 165 166 169 176
// 출력 : YES

const unsorted = prompt('키를 입력하세요');
let sorted = "";

sorted = unsorted
  .split(" ")
  .sort(function(a, b) { //.sort는 숫자로 된 배열을 오름차순으로 정렬할 때 사용
    //return 값 a-b는 배열을 오름차순, b-a는 내림차순으로 정렬한다.
    return a - b;
  })
  //정렬한 배열을 문자열로 만들어준다.
  .join(" "); //join() 메서드는 배열의 모든 요소를 연결해 하나의 문자열로 만든다.//공백을 넣어 출력

if (unsorted === sorted) { 
  console.log("Yes");
} else {
  console.log("No");
}