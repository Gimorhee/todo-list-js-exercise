function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function () {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markCompleted: function () {
      this.complete = true;
    }
  }
  return task;
}


const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

task2.markCompleted();

console.log(task2);
// // DRIVER CODE BELOW

// newTask("Clean Cat Litter"); // task 0
// newTask("Do Laundry"); // task 1

// logTaskState(0); // Clean Cat Litter has not been completed
// completeTask(0);
// logTaskState(0); // Clean Cat Litter has been completed



