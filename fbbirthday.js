//initialzing app
var app = {};
//defining fb like bday function
app.bday = function (){
  console.log("");
  $("select").change(function(){
    var yr = $("#year").val()==-1? 2012 : $("#year").val();
    var mnth = $("#month").val() == -1? 1: $("#month").val();
    var day = $("#day").val() ;
    var nodays = getDays(yr, mnth);
    if(1<= day && day<=nodays){
      //valid date
    }else{
      //date value to null                        
      $("#day").val("");                       
    }
    $("#day").children().each(function(index) {
      if(index<=nodays){
        $(this).show();
      }
      else{                                
        $(this).hide();                                
      }
    });                    

  })
  var getDays = function(yr, mnth){
    return new Date(yr, mnth, 0).getDate();
  }
}
