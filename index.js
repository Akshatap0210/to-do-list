const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask()
{       
    //if input box is empty it gives alert message
    if(inputBox.value === '')
    {
        alert("You must write something");
    }
    else{
        let li = document.createElement("li");   //stored element in li variable
        li.innerHTML = inputBox.value;   //add the text in li
        listContainer.appendChild(li);   //this li is displayed under the listcontainer
        let span = document.createElement("span");  // add the cross(*) icon span tag
        span.innerHTML ="\u00d7";                //cross icon add
        li.appendChild(span);                    //display this span
    }
    inputBox.value="";  //if add the task then text should be empty
    saveData();      //add any task save data shoud be called
}

listContainer.addEventListener("click", function(e)    //whenever click the function then it store the task
{
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");            //checked the task
        saveData();  //save the data after checked
        
    }
    else if(e.target.tagName === "SPAN"){               //cross icon delete the task
        e.target.parentElement.remove();
        saveData();  //save the data after remove
    }

}, false);


//store the data in browser and store the entire container that is listcontainer
function saveData()
{
    localStorage.setItem("data",listContainer.innerHTML);
}


//Display or show the data again in the stored data
//if we refresh the browser then it shows stored data
function showTask()
{
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
