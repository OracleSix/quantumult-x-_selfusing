var body = $response.body;
var obj = JSON.parse(body);

//obj.vipAutoPayUser = 1 ;
//obj.isNewUser = 0 ;
var data = obj.data ;
data.isNewUser = "0" ;
data.vipAutoPayUser = "1" ;

body = JSON.stringify(obj);
$done(body);
