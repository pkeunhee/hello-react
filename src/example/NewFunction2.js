var gangwon = {
        resort: ["용평", "평창", "강촌", "강릉", "홍천"],
        print: function (delay = 1000) {
            setTimeout(() => {
                console.log(this.resort.join(', '))
            }, delay)
        }
}

gangwon.print();