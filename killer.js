var playingsend=document.getElementById("playing-send");
var killerunder=document.getElementById("killernum");
var cunminunder=document.getElementById("cunminnum");
var backbutton=document.getElementsByClassName("playing-header_back");
var playing=document.getElementsByClassName("playing");
var contain=document.getElementsByClassName("contain");
var playingpeopledis=document.getElementById("playing-people_dis")
var jianhuaenter=document.getElementsByClassName("gamechoice-introduce1");
var caicienter=document.getElementsByClassName("gamechoice-introduce2");
var baichienter=document.getElementsByClassName("gamechoice-introduce3");
var lastgame=document.getElementsByClassName("lastgame");
var checkplayermessage=document.getElementById("checkplayermessage");
var intonight=document.getElementById("intonight");
var killmanbtn=document.getElementsByClassName("killman-check");
var dayhuodong=document.getElementsByClassName("dayhuodong");
var find=document.getElementsByClassName("find");
var killman=document.getElementsByClassName("killman");
var killnum=document.getElementById("killnum");
var toupiao=document.getElementById("toupiao");
var dayofdetail=document.getElementById("dayofdetail");
var peoplenum=document.getElementById("peoplenum");
var checknum=document.getElementById("checknum");
var idensend=document.getElementById("idensend");
var idensendback=document.getElementById("idensend_header-back");
var idensendend=document.getElementById("idensend_header-end");
var idensenddis=document.getElementById("idensend_display");
var idende=document.getElementById("idensend_deliver");
var actionkill=document.getElementById("judge_action-kill");
var actionvote=document.getElementById("judge_action-vote");
var judge=document.getElementsByClassName("judgebook");
var dayofjudge=document.getElementsByClassName("judge_day");
var result=document.getElementsByClassName("result");
var resultboxrest=document.getElementsByClassName("result_box-rest");
var resultboxdetadis=document.getElementsByClassName("result_box-detaildis");
judge[0].style.display='none';
var judgedetaildis=document.getElementsByClassName("judge_detailedis");
var player=[];
var killer=[];
var cunmin=[];
var alliden=[];
var numofdeath;
var displaydetail=document.getElementsByClassName("playing-people_displaydetail");
var displaydata='';
var numofcheck;
idensend.style.display='none';
playing[0].style.display='none';
backbutton[0].onclick=function(){
	playing[0].style.display='none';
	contain[0].style.display='block';}
jianhuaenter[0].onclick=function(){
	playing[0].style.display='block';
	contain[0].style.display='none';
	lastgame[0].innerHTML="上次游戏"+' : '+"简化版杀人游戏";}
caicienter[0].onclick=function(){
	playing[0].style.display='block';
	contain[0].style.display='none';
	lastgame[0].innerHTML="上次游戏"+' : '+"猜词版杀人游戏";}
baichienter[0].onclick=function(){
	playing[0].style.display='block';
	contain[0].style.display='none';
	lastgame[0].innerHTML="上次游戏"+' : '+"白痴版杀人游戏";}
var peonumadd=document.getElementById("peoplenumadd");
var peonumred=document.getElementById("peoplenumred");


peoplenum.onchange=function(){
	var killernum=parseInt(peoplenum.value/2-parseInt(peoplenum.value/6)),
	cunminnum=peoplenum.value-killernum;
	killerunder.innerHTML=killernum;
	cunminunder.innerHTML=cunminnum;
	playingpeopledis.innerHTML="玩家人数为："+peoplenum.value;
}
peonumadd.onclick=function(){
	peoplenum.value++;
	var killernum=parseInt(peoplenum.value/2-parseInt(peoplenum.value/6)),
	cunminnum=peoplenum.value-killernum;
	killerunder.innerHTML=killernum;
	cunminunder.innerHTML=cunminnum;
	playingpeopledis.innerHTML="玩家人数为："+peoplenum.value;
}
peonumred.onclick=function(){
	peoplenum.value--;
	var killernum=parseInt(peoplenum.value/2-parseInt(peoplenum.value/6)),
	cunminnum=peoplenum.value-killernum;
	killerunder.innerHTML=killernum;
	cunminunder.innerHTML=cunminnum;
	playingpeopledis.innerHTML="玩家人数为："+peoplenum.value;
}	
playingsend.onclick=function(){
	if(peoplenum.value<4||peoplenum.value>18)
		{alert("人数规定为4至18位");
		return ;}
	else{player.length=parseInt(peoplenum.value);}
	killernum=parseInt(peoplenum.value/2-parseInt(peoplenum.value/6)),
	cunminnum=peoplenum.value-killernum;
	for(var i=0;i<player.length;i++)
	{
		var kk=i+1;
		player[i]={
			'num' : kk+"号玩家",
			'alive' : "存活",
			'iden' : "玩家"
		}
	}
	for(var i=0;i<killernum;i++)
	{killer[i]="杀手";}
	for(var i=0;i<cunminnum;i++)
	{cunmin[i]="村民";}
	alliden=killer.concat(cunmin);
	//Math.floor(Math.random()*allien.length);//0--length-1
	for(var i=0;i<player.length;i++)
	{
		for(var k=0;player[i].iden=="玩家";k++)
		{	
			var randnum=Math.floor(Math.random()*alliden.length);
			if(alliden[randnum]!=null)
				{player[i].iden=alliden[randnum];
						alliden[randnum]=null;
					}
		}
	}
	playing[0].style.display='none';
	idensend.style.display='block';
}
/*传牌看身份  idensend总盒子 idensendback返回 idensendend结束 idensenddis展示板
idende查看身份或下一位身份*/
var i=0;
idende.onclick=function(){
		if(idende.innerHTML=="法官查看"){
			idensend.style.display="none";
			judge[0].style.display='block';
		}
		if(i==(player.length))
			{idensend.style.display='none';}
		if(idende.innerHTML=="查看"+(i+1)+"号身份")
		{	if(player[i].iden=="村民")
			{idensenddis.style.background="url(cunmin.jpg)  no-repeat center center";
			}
			if(player[i].iden=="杀手")
			{idensenddis.style.background="url(langren.jpg)  no-repeat center center";
			}
			idensenddis.innerHTML=(i+1)+"号玩家身份为"+player[i].iden;
			idende.innerHTML="隐藏并传递给"+(i+2)+"号";
			if(i==((player.length)-1))
				{idende.innerHTML="法官查看";}
			i++;}
		else
			{idensenddis.innerHTML='';
				idende.innerHTML="查看"+(i+1)+"号身份";
			idensenddis.style.background="url(fanpai.png) #fdf0cc  no-repeat center center";}
}
var numofday=1;
actionvote.onclick=function(){
	killman[0].style.display='block';
	judge[0].style.display='none';
	resultboxdetadis[0].innerHTML=resultboxdetadis[0].innerHTML+"白天:";
	numofday++;
	dayofjudge[0].innerHTML="第 "+numofday+" 天";
	
}
actionkill.onclick=function(){
	killman[0].style.display='block';
	judge[0].style.display='none';
	resultboxdetadis[0].innerHTML=resultboxdetadis[0].innerHTML+"第"+numofday+"天<br>晚上:";

}

/*intonight.onclick=function(){
	if(typeof(player[0])=="undefined")
	{
		alert("请先输入玩家人数！");
		return ;
	}
dayhuodong[0].style.display='none';
killman[0].style.display='block';
killnum.value='';
}*/

/*checkplayermessage.onclick=function(){
	dayhuodong[0].style.display='none';
	find[0].style.display='block';
}
*/
killmanbtn[0].onclick=function(){
numofdeath=killnum.value;
killnum.value='';
if(player[numofdeath-1].alive=="死亡")
		{alert("此玩家已死亡，请选择另一目标！");
		return ;}
resultboxdetadis[0].innerHTML=resultboxdetadis[0].innerHTML+numofdeath+"号玩家死了，真实身份为"+player[numofdeath-1].iden+"<br>";
player[numofdeath-1].alive="死亡";
if(player[numofdeath-1].iden=='村民')
{cunminnum--;}
if(player[numofdeath-1].iden=='杀手')
{killernum--;}
//dayofdetail.innerHTML=numofdeath+"号玩家出局,他的身份是"+player[numofdeath-1].iden;
judgedetaildis[0].innerHTML=judgedetaildis[0].innerHTML+numofdeath+"号玩家出局,他的身份是"+player[numofdeath-1].iden+"<br>";
judge[0].style.display='block';
killman[0].style.display='none';
if(killernum==0)
{alert("游戏结束,村民胜利");
resultboxrest[0].innerHTML="剩余玩家：<br>杀手"+killernum+"人         平民"+cunminnum+"人";
judge[0].style.display='none';
result[0].style.display='block';}
if(cunminnum==0)
{alert("游戏结束,杀手胜利");
resultboxrest[0].innerHTML="剩余玩家：<br>杀手"+killernum+"人         平民"+cunminnum+"人";
judge[0].style.display='none';
result[0].style.display='block';}
}
killmanbtn[1].onclick=function(){
judge.style.display='block';
find[0].style.display='none';
numofcheck=checknum.value;
dayofdetail.innerHTML=numofcheck+"号玩家身份是"+player[numofcheck-1].iden+" 存活状态为"+player[numofcheck-1].alive;
checknum.value=0;
}

