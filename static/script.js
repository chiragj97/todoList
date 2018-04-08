document.addEventListener('DOMContentLoaded', function() {
	loadTodoFromState(list.items); 
});

var state = ( function() {

})();

function loadTodoFromState(list) {
	var listDiv = document.getElementById("list");
	list.map(function(item) {
		var h3Tag = document.createElement("H4");
		var listItem = document.createTextNode(item.taskName);
		h3Tag.appendChild(listItem);
		listDiv.appendChild(h3Tag);
	})	
}