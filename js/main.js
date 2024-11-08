// 目的地を入力する
$(document).ready(function () {
	$("#showoverlay-text").click(function () {
		$("#overlay-text").fadeIn();
	});
	$("#submitText").click(function () {
		var inputText1 = $("#inputText1").val();
		var inputText2 = $("#inputText2").val();
		var inputText3 = $("#inputText3").val();
		var inputText4 = $("#inputText4").val();
		var inputText5 = $("#inputText5").val();
		var inputText6 = $("#inputText6").val();

		$("#displayFrame1").text(inputText1);
		$("#displayFrame2").text(inputText2);
		$("#displayFrame3").text(inputText3);
		$("#displayFrame4").text(inputText4);
		$("#displayFrame5").text(inputText5);
		$("#displayFrame6").text(inputText6);

		$("#overlay-text").fadeOut();
	});
});

// サイコロをまわす
$(document).ready(function () {
	var clickCount = 0;
	var messages = [];
	$("#dest-button").click(function () {
		clickCount++;
		var messageIndex = clickCount % messages.length;
		$("#dest-button").text(messages[messageIndex]);
		if (clickCount % 2 == 1) {
			$("#overlay").fadeIn();　/*オーバーレイをふわっと表示*/
			var images = $("#slideshow img");
			var imageCount = images.length;
			function showRandomImage() {
				var randomIndex = Math.floor(Math.random() * imageCount);
				images.removeClass("active");
				images.eq(randomIndex).addClass("active");
			}
			setInterval(showRandomImage, 100); // 100ミリ秒ごとに画像をランダムに切り替え
			$("#dest-button").text("何が出るかな？"); // クリックで文字の表記を変える
			$("#loop")[0].play();
		} else {
			$("#overlay").fadeOut();　/*オーバーレイがふわっと消える*/
			var num = Math.floor(Math.random() * 6) + 1;
			console.log(num, "箱の中身");
			$("#result").html(`<img src="img/dice${num}.svg" alt="サイコロ${num}">`);
			$("#dest-button").text("もう一回！"); // クリックで文字の表記を変える
			$("#gong")[0].play(); // 銅鑼の音を鳴らす
		}
	});
});



// $("h4").on("click", function () {
// 	// 	// 操作に関する記述
// 	var num = Math.floor(Math.random() * 6) + 1;
// 	console.log(num, "箱の中身");
// 	$("h5").html(`<img src="img/dice${num}.svg" alt="サイコロ${num}">`);
// });