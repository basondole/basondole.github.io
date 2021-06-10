var w = 480, h = 340;
function openWindow(content){
if (document.getElementById) {
   w = screen.availWidth;
   h = screen.availHeight;
}  

// var popW = 800, popH = 700;
var popW = 1000, popH = 200;
var leftPos = (w-popW)/2;
var topPos = (h-popH)/2;



msgWindow = window.open('','popup','width=' + popW + ',height=' + popH + 
                         ',top=' + topPos + ',left=' + leftPos + ',       scrollbars=yes');

msgWindow.document.write 
    ('<HTML>'+
    	'<HEAD>'+
    	'<TITLE>View</TITLE>'+
    	'</HEAD>'+
    	'<BODY>'+
		    '<img src='+content+' style="max-width:100%;max-height:100%;">'+
		    '<!--<INPUT TYPE="button" VALUE="Close"onClick="window.close();">-->'+
       '</BODY>'+
     '</HTML>');
}
