let player="X";
	let chance=document.getElementById("display");
	var box;
	function start(position){
	box=document.getElementById("cell"+position);
	if(box.innerHTML==""){
	chance.innerHTML="PLAYER 1";
	box.innerHTML=player;
	winner();
	var myvar = setTimeout(function(){ player2(); }, 2000);
	if(winner()){
		clearTimeout(myvar);
	}
	
	}
}
function player2()
{
		if(player=="X")
	{
		chance.innerHTML="PLAYER 2";
		player="O";
		var random=Math.floor(Math.random()*9)+1;
		var check=document.getElementById("cell"+random).innerHTML;
		if(check=="" || check==null)
		{
			document.getElementById("cell"+random).innerHTML=player;

		}
		else
		{
			while(check!=null||check!="")
			{
				 random=Math.floor(Math.random()*9)+1;
				  check=document.getElementById("cell"+random).innerHTML;
				 if(check!=null||check!=""||check!=" ")
				 {
			
				 	if(check == null || check==""|| check==" ")
					 {
				 		break;
					 }
				 	
				 }
				
			}

			document.getElementById("cell"+random).innerHTML=player;
			winner();
		}	
	}
		player="X";

}
	

function winner(){
	var A1=document.getElementById("cell1").innerHTML;
	var A2=document.getElementById("cell2").innerHTML;
	var A3=document.getElementById("cell3").innerHTML;
	var A4=document.getElementById("cell4").innerHTML;
	var A5=document.getElementById("cell5").innerHTML;
	var A6=document.getElementById("cell6").innerHTML;
	var A7=document.getElementById("cell7").innerHTML;
	var A8=document.getElementById("cell8").innerHTML;
	var A9=document.getElementById("cell9").innerHTML;
	if((A1==player && A2==player && A3==player) || (A4==player && A5==player && A6==player) || (A7==player && A8==player && A9==player)
		|| (A1==player && A4==player && A7==player) || (A2==player && A5==player && A8==player) || (A3==player && A6==player && A9==player)
		|| (A3==player && A5==player && A7==player) || (A1==player && A5==player && A9==player))
		{
			if(player=="X")
			{
			chance.innerHTML="Congratulation You won";
			}
			else{
				chance.innerHTML="Oops You Loose";
			}
			setTimeout(function(){ clear(); }, 2000);
			return true;
			
		}
	 if(A1!="" && A2!="" && A3!="" && A4!="" && A5!="" && A6!="" && A7!="" && A8!="" && A9!="")
	{
		
		chance.innerHTML="GAME OVER";
		if(confirm("do you want to play again")){
			clear();
		}
		chance.innerHTML="GAME OVER";

	}
}

function clear(){
	chance.innerHTML="Let's Play";
	document.getElementById("cell1").innerHTML="";
	document.getElementById("cell2").innerHTML="";
	document.getElementById("cell3").innerHTML="";
	document.getElementById("cell4").innerHTML="";
	document.getElementById("cell5").innerHTML="";
	document.getElementById("cell6").innerHTML="";
	document.getElementById("cell7").innerHTML="";
	document.getElementById("cell8").innerHTML="";
	document.getElementById("cell9").innerHTML="";
}