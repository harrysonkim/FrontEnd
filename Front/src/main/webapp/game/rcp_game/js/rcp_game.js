// 가위바위보 이미지 셔플을 위한 주소 배열
const imgs = ["imgs/R.png","imgs/P.png","imgs/S.png"]
// setInterval에 쓰일 인덱스 초기화
let index = 0;
// interval 0.05초 설정
const intervalTime = 50;

window.onload = () => {

	// 버튼 클릭 이벤트 처리
	document.getElementById("rock").addEventListener("click", () => {
	  play(0);
	});
	
	document.getElementById("paper").addEventListener("click", () => {
	  play(1);
	});
	
	document.getElementById("scissors").addEventListener("click", () => {
	  play(2);
	});

}

// 가위바위보 이미지 셔플 로직
setInterval(() => {
	index++;

	// 무한 루프
	if (index >= imgs.length) {
		index = 0;
	}

	document.querySelector('.change_img').src = imgs[index];

}, intervalTime);
	

// 게임 로직 함수
function play(playerChoice) {
  const computerChoice = Math.floor(Math.random() * 3); // 0, 1, 2 중 랜덤 선택
	
	// 플레이어가 이기는 경우
	if (playerChoice == 0 && computerChoice == 2
		|| playerChoice == 1 && computerChoice == 0
		|| playerChoice == 2 && computerChoice == 1) {
		alert(
			"player 수 : " + playerChoice + " | "+
			"computer 수 : " + computerChoice +
			"   " + "이겼습니다" +
			"(0: 바위, 1: 보, 2: 가위)");
	}
	
	// 비기는 경우
	if (playerChoice == computerChoice){
		alert(
			"player 수 : " + playerChoice + " | "+
			"computer 수 : " + computerChoice +
			"   " + "비겼습니다" +
			"(0: 바위, 1: 보, 2: 가위)");
	} 
	
	// 플레이어가 지는 경우
	if (playerChoice == 2 && computerChoice == 0
		|| playerChoice == 0 && computerChoice == 1
		|| playerChoice == 1 && computerChoice == 2) {
		alert(
			"player 수 : " + playerChoice + " | "+
			"computer 수 : " + computerChoice +
			"   " + "겼습니다" +	
			"(0: 바위, 1: 보, 2: 가위)");
	} 
 }