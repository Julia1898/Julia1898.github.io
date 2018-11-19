function showComment(data) {
  var out = document.querySelector(".out");
  var output = '';

  data.forEach((item) => {
  	output += `<div class="block_comment">
  		          <p class="out_name">${item.name}</p>
  		          <p>${item.text}</p>
  		          <p class="out_time">
  		            <em>${makeComment.timeConverter(item.time)}</em>
  		          </p>
  		        </div>`;
  	});
  out.innerHTML = output;
}