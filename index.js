// Select the form used to add new tasks
const addForm = document.querySelector(".add")

// Select the task list container (UL or DIV)
const tasks = document.querySelector(".tasks")

// Select the "Clear All" button
const clearAll = document.querySelector(".clear")

// Select the span where task count message is shown
const messageSpan = document.querySelector(".message span")

// Select the search form
const searchForm = document.querySelector(".search")

// ---------------------------------------------
// Update the pending task message
// ---------------------------------------------
let updateMessage = () => {
    // Count number of task items
    const textLength = tasks.children.length
    // Update message text
    messageSpan.textContent = `You have ${textLength} pending tasks.`
}
// Run once when page loads
updateMessage()

// ---------------------------------------------
// Handle Add Task form submit
// ---------------------------------------------
addForm.addEventListener("submit", event => {
    event.preventDefault() // Prevent page reload

    // Get trimmed task value
    const value = addForm.task.value.trim()
    // Only add task if input is not empty
    if (value.length) {
        tasks.innerHTML += `<li>
                            <span>${value}</span>
                            <i class="bi bi-trash-fill delete"></i>
                            </li>`
    }
    // Reset form input
    addForm.reset()
    // Update task count
    updateMessage()
})

// ---------------------------------------------
// Handle task delete (event delegation)
// ---------------------------------------------
tasks.addEventListener("click", event => {

    // Check if delete icon is clicked
    if (event.target.classList.contains("delete")) {
        event.target.parentElement.remove();
    }
    // Update task count
    updateMessage()
})

// ---------------------------------------------
// Clear all tasks
// ---------------------------------------------
clearAll.addEventListener("click", event => {
    // Select all task items
    const taskItems = tasks.querySelectorAll("li")
    // Remove each task
    taskItems.forEach((items) => {
        items.remove()
    })
    // Update task count
    updateMessage()
})

// ---------------------------------------------
// Filter tasks based on search input
// ---------------------------------------------
let filterTask = (term) => {
    // Hide tasks that do NOT match search term
    Array.from(tasks.children).filter((task) => {
        return !task.textContent.toLowerCase().includes(term)
    })
        .forEach((task) => {
            task.classList.add("hide")
        })

    // Show tasks that match search term
    Array.from(tasks.children).filter((task) => {
        return task.textContent.toLowerCase().includes(term)
    })
        .forEach((task) => {
            task.classList.remove("hide")
        })
}

// ---------------------------------------------
// Search input keyup event
// ---------------------------------------------
searchForm.addEventListener("keyup", event => {
    // Get search term
    const term = searchForm.task.value.trim().toLowerCase()
    // Filter tasks
    filterTask(term)
})

// ---------------------------------------------
// Reset search filter
// ---------------------------------------------
searchForm.addEventListener("click", event => {
     // Check if reset button is clicked
    if (event.target.classList.contains("reset")) {
        searchForm.reset()
        // Empty term shows all tasks
        const term = searchForm.task.value.trim()
        filterTask(term)
    }
})