//var createScream = function(logger){
//    return function(message){
//        logger(message.toUpperCase() + '!!!')
//    }
//}

// 위 표현을 고차함수로 간단히 표현할 수 있다.

const createScream = logger => message => logger(message.toUpperCase() + '!!!')

const scream = createScream(message => console.log(message))

scream('함수가 함수를 return 하고 그걸 실행시킬수 있다.');

