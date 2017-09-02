var playingsend=document.getElementById("playing-send");
var killerunder=document.getElementById("killernum");
var cunminunder=document.getElementById("cunminnum");
var backbutton=document.getElementsByClassName("playing-header_back");
var playing=document.getElementsByClassName("playing");
var contain=document.getElementsByClassName("contain");
var jianhuaenter=document.getElementsByClassName("gamechoice-introduce1");
var caicienter=document.getElementsByClassName("gamechoice-introduce2");
var baichienter=document.getElementsByClassName("gamechoice-introduce3");
var lastgame=document.getElementsByClassName("lastgame");

var intonight=document.getElementById("intonight");
var killmanbtn=document.getElementsByClassName("killman-check");
var dayhuodong=document.getElementsByClassName("dayhuodong");
var killman=document.getElementsByClassName("killman");
var killnum=document.getElementById("killnum");
var toupiao=document.getElementById("toupiao");
var dayofdetail=document.getElementById("dayofdetail")
var player=[];
var killer=[];
var cunmin=[];
var alliden=[];
var numofdeath;
var displaydetail=document.getElementsByClassName("playing-people_displaydetail");
var displaydata='';
playing[0].style.display='none';
playingsend.onclick=function(){
	var peoplenum=document.getElementById("peoplenum");
	if(peoplenum.value<4||peoplenum.value>18)
		{alert("人数规定为4至18位");}
	else{player.length=parseInt(peoplenum.value);}
	for(var i=0;i<player.length;i++)
	{
		var kk=i+1;
		player[i]={
			'num' : kk+"号玩家",
			'alive' : "存活",
			'iden' : "玩家"
		}
	}
	var killernum=parseInt(peoplenum.value/2-parseInt(peoplenum.value/6)),
	cunminnum=peoplenum.value-killernum;
	killerunder.innerHTML=killernum;
	cunminunder.innerHTML=cunminnum;
	for(var i=0;i<killernum;i++)
	{
		killer[i]="杀手";
	}
	for(var i=0;i<cunminnum;i++)
	{
		cunmin[i]="村民";
	}
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
	/*for(var i=0;i<player.length;i++)  展示身份
	{	

		for(var k in player[i])
		{
			displaydata=displaydata+player[i][k]+" ";
		}
		displaydata=displaydata+"<br>"
	}
	displaydetail[0].innerHTML=displaydata;
	displaydata='';*/}
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


intonight.onclick=function(){
	if(typeof(player[0])=="undefined")
	{
		alert("请先输入玩家人数！");
		return ;
	}
dayhuodong[0].style.display='none';
killman[0].style.display='block';
killnum.value='';
}

killmanbtn[0].onclick=function(){
dayhuodong[0].style.display='block';
killman[0].style.display='none';
numofdeath=killnum.value;
dayofdetail.innerHTML=numofdeath+"号玩家出局,他的身份是"+player[numofdeath-1].iden;
}

toupiao.onclick=function(){
	if(typeof(player[0])=="undefined")
	{
		alert("请先输入玩家人数！");
		return ;
	}
dayhuodong[0].style.display='none';
killman[0].style.display='block';
killnum.value='';
}