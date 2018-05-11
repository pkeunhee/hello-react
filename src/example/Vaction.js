// 클래스 사용
class Vacation{
	constructor(destination, length){
	    this.destination = destination
	    this.length = length
	}
	
	print(){
	    console.log(`${this.destination} 은 ${this.length} 일 걸립니다.`)
	}
}

const trip = new Vacation("칠레 산티아고", 7)
trip.print()