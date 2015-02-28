function getRandomColor() {
    		var letters = '0123456789ABCDEF'.split('');
    		var color = '#';
    		for (var i = 0; i < 6; i++ ) {
        		color += letters[Math.floor(Math.random() * 16)];
    		}
    		return color;
		}


		var clickedTime; 
		var createdTime;
		var reactionTime;
		

		function makeBox() {

			var time = Math.random();

			time = time*3500;

			

			setTimeout(function() {

				if (Math.random()>0.5){
					document.getElementById("box").style.borderRadius="100px";
				}
				else {
					document.getElementById("box").style.borderRadius="0";
				}

				var top=Math.random() * 300;
				var left=Math.random() * 500;

				document.getElementById("box").style.top=top+"px";
				document.getElementById("box").style.left=left+"px";
				
				document.getElementById("box").style.backgroundColor=getRandomColor();

				document.getElementById("box").style.display="block";

				createdTime=Date.now();

			}, time);//in milliseconds, 3000ms==3s

		}

		document.getElementById("box").onclick=function(){

				clickedTime=Date.now();

				reactionTime=(clickedTime-createdTime)/1000;
				

				document.getElementById("time").innerHTML= reactionTime + " seconds";

				this.style.display="none";
				makeBox();
			}

			makeBox();
