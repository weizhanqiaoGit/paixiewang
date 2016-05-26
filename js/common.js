function loadTW(url,targetId) {
	$.ajax({
		dataType:"html",
		url:url,
		async:false,
		success:function(msg){
			$("#"+targetId).html(msg);
		}
	});
};
