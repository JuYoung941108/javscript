// 변수는 하나의 값을 저장하기 위한 수단이다.
var id = 1;
var name = 'lee';

// 객체나 배열같은 자료 구조를 사용하면 여러개의 값을 하나로 그룹화해서 하나의 값처럼 사용할 수 있다.
var user = {
    id: 1,
    name: 'lee'
};

var users = [{
        id: 1,
        name: 'lee'
    },
    {
        id: 2,
        name: 'kim'
    }
];

console.log(id);
console.log(name);
console.log(user);
console.log(users);