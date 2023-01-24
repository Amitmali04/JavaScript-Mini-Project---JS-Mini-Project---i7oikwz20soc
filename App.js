$("#save").click(function () {
	$(".validation").remove();
	var email = $("#email").val();
	var pass = $("#pass").val();
	$("#e_error").text("");
	$("#p_error").text("");
	if (email == "") {
		$("#email").addClass("input_error");
		$("#email").parent().append("<label class='validation'>*Please enter email</label>");
		return;
	}
	if (pass == "") {
		$("#pass").parent().append("<label  class='validation'>*Please enter password</label>");
		$("#pass").addClass("input_error");
		return;
	}
	
});
$("input[type=text]").focus(function () {
	$("#email").removeClass("input_error");
	$(this).next().remove();
});
$("input[type=password]").focus(function () {
	$(this).removeClass("input_error");
	$(this).next().remove();
});