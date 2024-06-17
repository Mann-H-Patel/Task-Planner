console.log("hello");

function task_creater() {
    let task = document.getElementsByClassName("input-task")[0].value;

    let taskContainer = document.createElement("div");
    taskContainer.className = "individual-task";
    
    let taskMessage = document.createElement("h1");
    taskMessage.className = "task-message";
    taskMessage.innerText = task;

    let deleteButton = document.createElement("button");
    deleteButton.className = "button";
    deleteButton.innerHTML = `
        <span class="text">Delete Task</span>
        <svg class="arrow" viewBox="0 0 448 512" height="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
        </svg>
    `;

    // Event listener for delete button
    deleteButton.addEventListener("click", function() {
        taskContainer.remove();
    });

    taskContainer.appendChild(taskMessage);
    taskContainer.appendChild(deleteButton);

    document.querySelector(".task-display-main").appendChild(taskContainer); // Assuming you have a container for the tasks with the class "task-list"
}
