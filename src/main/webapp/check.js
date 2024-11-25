/**
 * 
 */
//check()関数を定義
	function check(){
		//ID が未入力でないかチェック
		if(document.login.id.value == ""){
			window.alert("ID が未入力です。");
			return false;
		//パスワードが未入力でないかチェック
		}else if(document.login.pass.value == ""){
			window.alert("パスワードが未入力です。");
			return false;
		}
		return true;
	}