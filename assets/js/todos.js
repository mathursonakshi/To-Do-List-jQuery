//check off specific todos by clicking on it
$("ul").on("click","li",function(){
$(this).toggleClass("completed");
});

//Deleting a todo by clicking on delete button
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(1000,function(){
		$(this).remove();
	});
	event.stopPropagation();
});
//adding new todos
$("input[type='text']").on("keypress",function(event){
	if(event.which===13)
	{
		//getting text from input
		var todo=$(this).val();
		//clearing out input string later
		$(this).val("");
		//adding text to new li
		$('ul').append("<li><span><i class='fas fa-trash-alt'></i></span> "+todo+"</li>");
	}
});
$(".fa-plus").on("click",function(){
	$("input[type='text']").fadeToggle();
});