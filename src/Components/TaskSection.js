import React from "react";

var TaskSection = () => {
  return (
    <div className="task-section-container">
      <div>
        <h3>UserName</h3>
        <div className="notification">
          <h4>
            Latest <span>6 m</span>
          </h4>
          <h4>today's target</h4>
        </div>
      </div>
      <div className="to-do-container">
        <div>
          <h3>Today's tasks</h3>
          <label htmlFor="task-input">
            to do?
            <input type="text" name="task-input" />
          </label>

          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div>
          <h3>Today's Meals</h3>
          <label htmlFor="meal-input">
            to eat?
            <input type="text" name="meal-input" />
          </label>

          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </div>
  );
};

export default TaskSection;
