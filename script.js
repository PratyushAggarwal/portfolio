var navmenuanchortag=document.querySelectorAll('.nav-menu a');
for(var i=0;i<navmenuanchortag.length;i++){
	navmenuanchortag[i].addEventListener('click',function(event){
		event.preventDefault();
		var targetSectionId=this.textContent.trim().toLowerCase();
		var targetSection=document.getElementById(targetSectionId);
		var Interval=setInterval(function(){
			var coordinates=targetSection.getBoundingClientRect();
			if(coordinates.top<=0){
				clearInterval(Interval);
			}
			window.scrollBy(0,6);
		},1)
	})
}

var progressbars=document.querySelectorAll('.skill-progress > div');
var skillcontainer=document.getElementById('skills-container');
window.addEventListener('scroll',checkScroll);
var animation=[false,false,false,false,false,false];

function initialisedBars(){
	for(let bar of progressbars){
		bar.style.width=0+'%';
	}
}
initialisedBars();

function fillBars(bar){
	let target=bar.getAttribute('data-width');
	var intial=0;
	var interval2=setInterval(function(){
		if(intial>target){
			clearInterval(interval2);
			return;
		}
		intial=intial+0.2;
		bar.style.width=intial+'%';
	},1)
}
var pageHeight = document.documentElement.scrollHeight-window.innerHeight;
pageHeight=pageHeight+10;
var view=document.getElementById('value');
function checkScroll(){
	let percent=Math.ceil((window.pageYOffset/pageHeight)*100);
	view.innerText=percent;
	var i=0;
	for(let bar of progressbars){
		var coordinates=bar.getBoundingClientRect();
		if(!animation[i] && coordinates.top<window.innerHeight){
			fillBars(bar);
			animation[i]=true;
		}else if(coordinates.top>window.innerHeight){
			animation[i]=false;
		}
		i++;
	}
}


