$(document).ready(function(){
    //To reset value of the textfield when page loads and hiding the textfield till user click on button
	document.getElementById("input").value=""; 
	$("#input").hide();
	$("#addEvent1").hide();
	
	
	$("#addEvent").click(function(){
	document.getElementById("input").value=""; //to clear the value of textbox when user enters second value
	$("#input").show();
	$(this).hide();
	$("#addEvent1").show();
	});

	$("#addEvent1").click(function(){
	if($("#input").val() == '') 
	{
         alert('May not be empty!');
	  
        }
	$(this).hide();
	$("#addEvent").show();
	$("#input").hide();
	//getting value from the text field.
	var x=$("#input").val();
	//alert(x);
	$("ol").append("<li onClick='openPoPup(this);' >"+x+"</li><ul id="+x+"><ul>");
	
	});

	 $("li").click(function(){
    		alert( $(this));
  });
	
$(function() {
    var 
	  event = $('SubEvent'),
      allFields = $( [] ).add( SubEvent );
      
    
  var txtbxevent= document.getElementById("SubEvent");
   
 
    
 
    $( "#dialog-form" ).dialog({
      autoOpen: false,
      height: 300,
      width: 250,
      modal: true,
      buttons: {
//when click on the dialog add button this function get called
        "AddSubEvent": function() {
          var bValid = true;
          
 //taking the id of selected LI	 
 var currentLI= document.getElementById("selected");
 var currentLIID=currentLI.id;
 
 //taking text of that selected LI
 var currentLIText = $(currentLI).text();
 
 //alert(currentLIText);
 // for UL  given the id as the text entered for li
  var currentLIUL= document.getElementById(currentLIText);
 

// alert(currentLIUL.id);
 
 $(currentLIUL).append("<li>"+txtbxevent.value+"</li>");
 
        txtbxevent.value="";
			
        },

       
      },

      "close": function() {
	  var currentLI= document.getElementById("selected");
        var currentLIID=currentLI.id;
	currentLI.id="";
        $( this ).dialog( "close" );
      }
    });
 
  
  });


})

// This function get called when we click on the list item and opens the popup window 
function openPoPup( object)
{
// setting the object id  of clicked listitem for later use
object.id="selected";

//alert(object.id);

 $( "#dialog-form" ).dialog( "open" );
}
