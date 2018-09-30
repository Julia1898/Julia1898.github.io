window.onload= function(){

  var comments=[];
  loadComments();

   document.querySelector('button').onclick = function(e){
   	    e.preventDefault();
	   	var name = document.querySelector('.name');
	    var text = document.querySelector('.text');
	   	
	   	var comment = {
	   		name: name.value,
	   	    text: text.value,
	   	    time: Math.floor(Date.now()/1000)
	   	}
        
        comments.push(comment);
	    clearFields(name);
	    clearFields(text);
	    saveComment();
	    showComment();
   }


   function clearFields(field){
       field.value = '';
   }
  

  function saveComment(){
  	   localStorage.setItem('comments', JSON.stringify(comments));
  }

  
  function showComment(){
	  	var out = document.querySelector(".out");
	  	var output = '';

	  	comments.forEach(function(item){
	  		output +=`<div class="block_comment">
	  		               <p class="out_name">${item.name}</p>
	  		               <p>${item.text}</p>
	  		               <p class="out_time"><em>${timeConverter(item.time)}</em></p>
	  		          </div>`;
	  	});
	    out.innerHTML = output;
  }


  function loadComments(){
      if(localStorage.getItem('comments')) comments = JSON.parse(localStorage.getItem('comments'));
      showComment();
  }


  function timeConverter(UNIX_timestamp){
	  	var a = new Date(UNIX_timestamp * 1000);
	  	var months = ['Jan','Feb','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
	  	var year = a.getFullYear();
	  	var month = months[a.getMonth()];
	  	var date = a.getDate();
	  	var hour = a.getHours();
	  	var min = a.getMinutes();
	  	var sec = a.getSeconds();
	  	var time = date + ' '+ month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
	  	return time;
  }

}