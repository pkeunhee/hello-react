// 함수를 파라미터로 넘기고 그 함수에 인자를 넣어 실행 시킬수 있다.

const insideFn = logger => logger('함수를 다른 함수에 인자로 넘길 수도 있습니다.')

insideFn(message => console.log(message))