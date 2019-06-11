const renderUI = () => {
	taskList.map((task,i) => {
		if(!task.isRendered) {
			let para = document.createElement("P");
			para.id = 'task'+task.id;
      		para.className = "todo";
      		let chk = document.createElement("INPUT");
          	chk.addEventListener('change', () => {
            	if (task.isChecked) {
              		task.isChecked = false;
           		} 
           		else {
              		task.isChecked = true;
            	}
            	renderUI();
          		})
      		chk.setAttribute("type","checkbox");
      		chk.setAttribute("id", 'completedTasks'+task.id);
      		chk.setAttribute("class","chkbox");
      		let deleteButton = document.createElement("BUTTON");
			deleteButton.id = 'taskDelete'+task.id;
			deleteButton.className = "del";
			deleteButton.onclick = () => { deleteTask(i); }
			let buttonText = document.createTextNode("-");
			let t = document.createTextNode(task.value);
			para.appendChild(t);
			deleteButton.appendChild(buttonText);
			para.appendChild(deleteButton);
			para.appendChild(chk);
			document.getElementById("yourTasks").appendChild(para);
			document.getElementById("task").value = "";
			document.getElementById("task").focus(); 
			task.isRendered = true;	
		}
    		if(task.isChecked) {
      	try {      	

          let checkedTask = document.getElementById('completedTasks'+task.id);
          let elem = document.getElementById('task'+task.id);
	      elem.appendChild(checkedTask);
          document.getElementById("completedTasks").appendChild(elem);
          document.getElementById("completedTasks").style.display = "contents";

        } catch(e) {}
      } 
      	else {
      	try {
          let elem = document.getElementById('task'+task.id);
          document.getElementById("completedTasks").removeChild(elem);
          document.getElementById("yourTasks").appendChild(elem);
        } catch(e) {};
      }
  
		if(task.isDeleted) {
			try {
				let elem = document.getElementById('task'+task.id);
				elem.parentNode.removeChild(elem);
				let chkTask = document.getElementById('completedTasks'+task.id);
				chkTask.parentNode.removeChild(chkTask);
			} catch(e) {};
		}
	});
} 

let taskList = [];
let id = 1;
const addTask = () => {
	let task = document.getElementById("task").value;
  if(task.length == 0){
    alert("Please describe your task");
    return;
  }
	let taskObj = {
		id: id++, 
		value: task,
		createdAt: new Date(),
		done: false,
		isRendered: false,
		isDeleted: false,
		isChecked: false
	};
	taskList.push(taskObj);
	renderUI();
}

const deleteTask = (index) => {
	taskList[index].isDeleted = true;
	renderUI();
}


/*
TODO:
-> Think about a data structure to hold the list in memory instead of just writing to the screen
-> Add function for add delete and change order of list 


Further enhancements:
-> Add database (MySql) for holding the todos
-> Write API's with node.js for accesing and altering list 


Task no 1:
Write complete application in vanilla javascript
Task no 2:
Write backend with nodejs and integrate with vanilla JS frontend
Task no 3:
Change frontend to react frontend
*/