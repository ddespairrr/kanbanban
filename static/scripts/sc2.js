let invite = () => {
	document.getElementById("invite-block").innerHTML = '<button class="btn btn-outline-warning invite" onclick="close()">Скрыть</button> Поделитесь ссылкой - kanbanban.herokuapp.com/join/board/{{ cur_board.id }}';
}


let close = () => {
	console.log("b");
	document.getElementById("invite-block").innerHTML = '<button class="btn btn-outline-warning invite" onclick="invite()">Пригласить пользователя</button>';

}