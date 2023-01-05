var body = $response.body;
var obj = JSON.parse(body);

//obj.vipAutoPayUser = 1 ;
//obj.isNewUser = 0 ;
//var data = obj.data ;
data.isNewUser =0;
//data.vipmAutoPayUser = "1" ;
//data.svipAutoPayUser = "1" ;
obj.data.vipOverSeasExpire=3031202489;
obj.data.vipmExpire=3031202489;
obj.data.vip3Expire=3031202489;
obj.data.experienceExpire=3031202489;
obj.data.vipLuxuryExpire=3031202489;
obj.data.vipExpire=3031202489;
obj.data.svipExpire=3031202489;

body = JSON.stringify(obj);
$done(body);
