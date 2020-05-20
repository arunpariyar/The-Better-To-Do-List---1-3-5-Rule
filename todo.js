//Checking of our tasks 
$('ul').on("click","li",function(){
  $(this).toggleClass("completed");
});

$('ul').on("click","span",function(event){
    $(this).parent().fadeOut("1s",function(){
        $(this).remove()}); 
    event.stopPropagation();
}); 

$("input[id ='bThing']").on("keypress",function(event){
    if(event.which === 13){
        var bTodoText = $(this).val();
        $(this).val(""); 
        console.log(bTodoText);
        //create a new li and add to ul
        $("ul[class='bToDoDisplay']").append("<li><span class='trash'><ion-icon  class='trash-outline' name='trash-outline'></ion-icon></span>"+bTodoText+"</li>");  
    }
});

$("input[id ='mThing']").on("keypress",function(event){
    if(event.which === 13){
        var bTodoText = $(this).val();
        $(this).val(""); 
        console.log(bTodoText);
        //create a new li and add to ul
        $("ul[class='mToDoDisplay']").append("<li><span class='trash'><ion-icon class='trash-outline'name='trash-outline'></ion-icon></span>"+bTodoText+"</li>");  
    }
});

$("input[id ='lThing']").on("keypress",function(event){
    if(event.which === 13){
        var bTodoText = $(this).val();
        $(this).val(""); 
        console.log(bTodoText);
        //create a new li and add to ul
        $("ul[class='lToDoDisplay']").append("<li><span class='trash'><ion-icon class='trash-outline'name='trash-outline'></ion-icon></span>"+bTodoText+"</li>");  
    }
});

$('.bToggle').on("click",function(){
    $('#bThing').fadeToggle( "fast", "linear" );
});

$('.mToggle').on("click",function(){
    $('#mThing').fadeToggle( "fast", "linear" );
});

$('.lToggle').on("click",function(){
    $('#lThing').fadeToggle( "fast", "linear" );
});
 