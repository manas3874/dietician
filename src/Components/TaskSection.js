import React from "react";
import CreateMeal from "./CreateMeal";
var TaskSection = () => {
  var newTask = function (ev) {
    if (ev.key == "Enter") {
      console.log("task " + ev.target.value);
      let task = `<p>${ev.target.value}</p>`;
      // console.log(task);
      document
        .getElementById("task-input")
        .insertAdjacentHTML("afterend", task);
      ev.target.value = "";
    }
  };
  const ingredients = [];
  var newMeal = function (ev) {
    if (ev.key == "Enter") {
      // console.log("task " + ev.target.value);
      ingredients.push(ev.target.value);
      // console.log(ingredients);
      let task = `<p>${ev.target.value}</p>`;
      // console.log(task);
      document
        .getElementById("meal-input")
        .insertAdjacentHTML("afterend", task);
      ev.target.value = "";
    }
  };

  return (
    <div className="task-section-container">
      <div>
        <h3>UserName</h3>
        <div className="notification">
          <h4>
            Latest <span>6 m</span>
          </h4>
          <h4>
            today's target <span>12000 steps</span>
          </h4>
        </div>
      </div>
      <div className="to-do-container">
        <div>
          <h3>Today's tasks</h3>
          <label htmlFor="task-input" id="task-input">
            to do?
            <input type="text" name="task-input" onKeyPress={newTask} />
          </label>

          {/* <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p> */}
        </div>
        <div>
          <h3>Today's Meals</h3>
          <label htmlFor="meal-input" id="meal-input">
            <input type="text" name="meal-input" onKeyPress={newMeal} />
            <CreateMeal ing={ingredients} />
          </label>

          {/* <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p> */}
        </div>
      </div>
    </div>
  );
};

export default TaskSection;
