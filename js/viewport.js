/*--------------------------------------------------*/
/*          viewport
/*--------------------------------------------------*/
//ユーザーエージェントの判断（判断結果はtop.jsでも使用する）
var ua_data;
var ua = navigator.userAgent.toLowerCase();
// iPhone
var isiPhone = (ua.indexOf('iphone') > -1);
// iPad
var isiPad = (ua.indexOf('ipad') > -1);
// Android
var isAndroid = (ua.indexOf('android') > -1) && (ua.indexOf('mobile') > -1);
// Android Tablet
var isAndroidTablet = (ua.indexOf('android') > -1) && (ua.indexOf('mobile') == -1);

if (isiPhone || isAndroid) {
	ua_data = 'mobile';
} else if (isiPad || isAndroidTablet) {
	ua_data = 'pc';
} else {
	ua_data = 'pc';
}

//ユーザーエージェントによるviewportの設定
if (ua_data == 'pc') {
	document.write('<meta name="viewport" content="width=1120, maximum-scale=1, user-scalable=yes">');
} else {
	document.write('<meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=yes">');
}
