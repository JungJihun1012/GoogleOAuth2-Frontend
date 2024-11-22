function solutions(skill, skill_tree) {
    // 가능한 스킬 트리의 개수를 담은 변수
    let count = 0;

    for (let i = 0; i < skill_tree.length; i++) {
        let isPossible = true; // 가능한 스킬인지 아닌지 지정하는 변수
        let idx = 0; // 스킬의 선택된 인텍스
        for (let j = 0; j < skill_tree[i].length; j++) {
            //현재 배울 스킬이 skill에 있는 스킬이라면 
            if (skill.includes(skill_tree[i][j])) {
                // 배울 수 있는 스킬인지 확인
                if (skill_tree[i][j] === skill[idx]) {
                    idx++; //다음으로 배워야 할 스킬의 인덱스로 이동
                } else {
                    isPossible = false; // 불가능한 스킬트리
                    break;
                }
            }
        }
        if (isPossible) count++;
    }

    return count;
}

// 전 코드

function solution(numbres) {
    let answer = '';
    numbres.sort((a, b) => {
        const stringA = a.toString().replace(/(0+$)/, "");
        const stringB = b.toString().replace(/(0+$)/, "");

        if (stringA == stringB) {
            return a - b;
        } else {
            if (stringA > stringB) return -1;
            else if (stringA < stringB) return 1;
            else return 0;
        }
    });
    for (let i = 0; i < numbres.length; i++) {
        answer += numbres[i];
    }
    return answer.replace(/(^0+)/, "0");
}

// numbers.sort() : 두 수를 비교해 내림차순으로 정렬
// stringA, stringB : a, b를 각각 string으로 변환한 뒤, 문자열 끝에 나오는 '0'을 모두 제거
// stringA와 stringB가 같으면 숫자로 비교해 작은 숫자를 더 앞에 오도록 sort (a: 1, b: 10인 경우 a가 더 큰 숫자가 될 수 있도록)
// stringA와 stringB가 같지 않은 경우에는 string 값으로 비교해 내림차순 정렬((stringB - stringA)을 return 하게 되면 숫자로 인식해서 틀린 결과가 나오므로 if문으로 비교)
// for문을 돌며 numbers의 값들을 answer에 붙이기
// 0만 있는 경우, answer 값이 0...0이 되므로 문자열의 첫번째에 반복해서 나오는 0...0을 0으로 replace


// 후 코드
function solution(numbers) {
    var answer = numbers.map((number) => number.toString()).sort((a, b) => (b + a) - (a + b)).join("");
    return answer.replace(/^0+/, "0");
}


/***
 *
 *  map() 메서드를 통해 numbers의 요소들을 모두 string으로 변형
 *  string으로 변형한 numbers를 sort() 메서드를 통해 정렬
 *  a+b와 b+a로 비교해 내림차순으로 정렬
 *  join() 메서드를 통해 배열의 모든 요소를 문자열로 이어붙임
 *  0만 있는 경우, answer 값이 0...0이 되므로 문자열의 첫번째에 반복해서 나오는 0...0을 0으로 replace해서 결과 return
 */

//정렬할 때, 단순히 a와 b로만 비교하는 게 아니라 a+b와 b+a로 비교하면 문자열로 바꿨기 때문에 숫자의 합이 아닌, 문자열의 합을 가지고 비교하게 된다.