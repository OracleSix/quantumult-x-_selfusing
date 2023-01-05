var body = $response.body;
var obj = JSON.parse(body);

//obj.vipAutoPayUser = 1 ;
//obj.isNewUser = 0 ;
var data = obj.data ;
data.isNewUser =0;
//data.vipmAutoPayUser = "1" ;
//data.svipAutoPayUser = "1" ;
data.vipOverSeasExpire=3031202489;
data.vipmExpire=3031202489;
data.vip3Expire=3031202489;
data.experienceExpire=3031202489;
data.vipLuxuryExpire=3031202489;
data.vipExpire=3031202489;
data.svipExpire=3031202489;

body = JSON.stringify(obj);
$done(body);
