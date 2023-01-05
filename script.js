const bntSave = document.getElementById("btn_save") 

bntSave.addEventListener("click", getTask)

function getTask() {
    const task = document.getElementById("input_task")
    console.log("task", task.value)

}