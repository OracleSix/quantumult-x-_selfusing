var body = $response.body;
var obj = JSON.parse(body);

obj.vipAutoPayUser = "1" ;
obj.isNewUser = "0"

body = JSON.stringify(obj);
$done(body);
