var moveProgress = function(id, percent){
 var progressBar = document.getElementById(id)
 progressBar.style.width = percent+'%'
}

var point = 0

setInterval(function(){
 moveProgress('pb1',Math.floor(Math.random() * 100))
 moveProgress('pb2',Math.floor(Math.random() * 100))
 moveProgress('pb3',Math.floor(Math.random() * 100))
 point +=10
 if (point >=100 ) {
    point = 0
 }
}, 200)


  
 
  
  