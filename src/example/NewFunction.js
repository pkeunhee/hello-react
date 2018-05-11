var lordify = (firstName, land) => {
    return `${land}의 ${firstName}`
}

// 한줄로 표현하면 중괄호와 return 을 생략할 수 있다.
var lordify = (firstName, land) => `${land}의 ${firstName}`

console.log(lordify('박근희', "광진구"));