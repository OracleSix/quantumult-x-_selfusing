var body = $response.body;
var obj = JSON.parse(body);

obj.vipAutoPayUser = "1" ;


body = JSON.stringify(obj);
$done(body);