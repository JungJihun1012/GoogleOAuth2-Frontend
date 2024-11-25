## 자료구조

> 데이터 값의 모임, 데이터 간의 관계, 데이터에 적용할 수 있는 함수나 명령어 의미

## 배열(Array)

> 선형으로 자료를 관리, 정해진 크기의 메모리를 할당받고 자료의 물리적 주소와 내부적 주소가 같음 <br>

* length
* toString
* sort
* fill
* copyOf

## 연결리스트 (LinkedList)

> 선형으로 자료를 관리, 재료가 추가 될 때마다 메모리에 할당받고 자료의 물리적 주소와 내부적 주소가 다를 수 있다.

> 기본 구조

* 노드(Node)
> 데이터 저장 단위로, 값과 포인터로 구성됨
* 포인터(Pointer)
> 다음 노드나 이전 노드의 연결 정보

* add (추가)
* remove (삭제)
* get (인덱스에 해당하는 요소 반환)
* size (크기 반환)
* addFirst (리스트 맨 앞에 추가)
* addLast (리스트 맨 마지막에 추가)
* removeFirst (리스트 맨 앞 요소 삭제)
* removeLast (리스트 맨 마지막 요소 삭제)

## 스택(Stack)

> 나중에 들어온 자료가 제일 먼저 출력

* push (추가)
* pop (삭제)
* peek (마지막 요소를 반환)
* empty (비어있는 지 확인)
* search (메서드의 인자를 스택에서 검색하여 해당 위치를 반환)

## 큐(Queue)

> 가장 먼저 입력된 자료를 출력

* offer (추가)
* poll (삭제)
* clear (전체 삭제)
* peek (삭제 될 값 확인)

> Queue 유사 메서드와의 차이

* enqueue: 성공시 공통적으로 true 리턴
> * add: 실패시 예외 처리, offer: 실패시 false 리턴
* dequeue: 성공시 공통적으로 제거한 값 리턴
> * remove: 실패시 예외 발생, poll: 실패시 null 리턴
* peek: 성공시 공통적으로 가장 먼저 들어간 값 리턴
> * element: 실패시 예외 발생, peek: 실패시 null 리턴

## Collection 인터페이스

> 하나의 객체를 관리하기 위한 메서드가 선언된 인터페이스 하위에 List, Set이 있음

## List 인터페이스
```
중복 허용, 객체를 순서에 따라 저장하고 관리에 필요한 메서드가 선언한 인터페이스

ArrayList, Stack, LinkedList, Stack, Queue등 있음
```

## Set 인터페이스
```
순서와 관계 없이 중복을 허용하지 않고 유일한 값을 관리하는데 필요한 메서드만 선언

HashSet, TreeSet 등 있음
```

* HashSet
> 동일성 구현을 위해 필요에 따라 equals와 HashCode 메서드를 재정의 해야한다.

* TreeSet
> Set 인터페이스를 구현하여 중복을 허용하지 않고 오름차순이나 내림차순으로 객체를 정렬

## Map 인터페이스
```
key는 중복을 허용하지 않는다
pair(쌍)으로 이루어진 객체를 관리하고 사용하는 메서드들이 선언된 인터페이스
HashMap, TreeMap, HashTable, Properties 등 있음

```

* HashMap
> key가 되는 객체를 중복할 수 없고 객체의 유일성을 비교를 위한 equals와 hashCode 메서드를 구현해야 한다.

* TreeMap

> key에 대한 정렬를 구현할 수 있음, key가 되는 클래스에 Comparable 이나 comparator 인터페이스를 구현함으로써 key - value 쌍의 자료를 key값 기준으로 정렬하여 관리가 가능하다.

## Collection 요소를 순회하는 Iterator
> 요소의 순회란, 프레임워크에 지정된 요소들을 하나씩 차례를 참조하는 것

> 순서가 있는 List 인터페이스의 경우는 Iterator를 사용하지 않고 get(i) 메서드를 사용하지만 Set은 get(i) 메서드를 지원하지 않기 때문에 Iterator를 활용하여 객체를 순회한다.