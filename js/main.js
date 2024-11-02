$("h4").on("click", function () {
	// 	// 操作に関する記述
	var num = Math.floor(Math.random() * 6) + 1;
	console.log(num, "箱の中身");

	if (num === 1) {
		console.log("1")
		$("h5").html('<img src="img/dice1.svg" alt="サイコロ1">');
	} else if (num === 2) {
		console.log("2")
		$("h5").html('<img src="img/dice2.svg" alt="サイコロ2">');
	} else if (num === 3) {
		console.log("3")
		$("h5").html('<img src="img/dice3.svg" alt="サイコロ3">');
	} else if (num === 4) {
		console.log("4")
		$("h5").html('<img src="img/dice4.svg" alt="サイコロ4">');
	} else if (num === 5) {
		console.log("5")
		$("h5").html('<img src="img/dice5.svg" alt="サイコロ5">');
	} else if (num === 6) {
		console.log("6")
		$("h5").html('<img src="img/dice6.svg" alt="サイコロ6">');
	}
	// この下は消さない
});