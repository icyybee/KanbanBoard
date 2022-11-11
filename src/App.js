import Notelist from "./components/notelist/notelist.component";

import './component.styles.scss';

const App = () => {

  const notes = [
    {
      id: 0,
      title: "To-do",
      color:  "#ff0000",
      content: "Add your tasks on individual cards here"
    },

    {
      id: 1,
      title: "In-progress",
      color: "#008000",
      content: "As you begin work on tasks, drag them into this column."
    },

    {
      id: 2,
      title: "Review / Waiting",
      color: "#0000ff",
      content: "Bring tasks that are waiting to be reviewed or have dependencies here."
    },

    {
      id: 3,
      title: "Done",
      color: "#f5ba13",
      content: "As you finish tasks, bring the task card into this column."
    }
  ];

  // const todo = [
  //   {
  //     content: ""
  //   }
  // ]

  // const progress = [
  //   {
  //     content: ""
  //   }
  // ]

  // const review = [
  //   {
  //     content: ""
  //   }
  // ]

  // const done = [
  //   {
  //     content: ""
  //   }
  // ]

  return (
    <div className="board">
      <div className="board__head">
        <h1>Simple Kanban Board</h1>
        <p>Manage tasks visually with process stage columns</p>
      </div>
    
      <div className="board__body">
        <h2>Board</h2>
        <div className="board__body--box">
          <Notelist notes={notes} />
        </div>
      </div>
    </div>
  );
}

export default App;
