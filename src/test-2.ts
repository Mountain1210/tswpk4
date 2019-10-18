import "jquery-ts"
import * as VU from "./ValidationUtils";

var strs:Array<any>=["13697811800","jilongliang@126.com"];
console.log(VU.ValidationUtils)
// var uv=VU.ValidationUtils;
var validators1:{[s:string]:VU.ValidationUtils.StringValidator;}={};
console.log(typeof(validators1))
validators1['Tel']=new VU.ValidationUtils.TelValidator;
validators1['Email']=new VU.ValidationUtils.EmailValidator;

function showMsg1():void{
	strs.forEach(s=>{
		for(var name in validators1){
			console.log('"'+s+'"'+ (validators1[name].isAcceptable(s) ? '匹配' : '不匹配') +name)
		}
	})
}

function showMsg2():void{
	var telObj:VU.ValidationUtils.TelValidator;

	telObj=new VU.ValidationUtils.TelValidator;

	var tel:string="13212345678";
	var flag:boolean=telObj.isAcceptable(tel);

	console.log(flag? tel+" 匹配 " : tel+"\t 不匹配 ");
	console.log(flag? tel+" 匹配 " : tel+"\t 不匹配 ");

	$("#msg2").html(flag? "<span style='color:red;'>"+tel+" 匹配</span> " :
"<span>"+tel+"\t 不匹配</span>");

}

$(function(){
showMsg1();
showMsg2();
});