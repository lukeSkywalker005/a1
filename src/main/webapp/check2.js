/**
 * 
 */
function check(){
	if(document.frm1.name.value == ""){
		window.alert("名前の項目が未入力です。");
		return false;
	}else if(document.frm1.sex.value == ""){
		window.alert("性別の項目が未選択です。");
				return false;
	}
	return true;
}