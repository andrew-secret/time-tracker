import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import ListView from "../views/ListView/ListView";
import TimerView from "../views/TimerView/TimerView";

import styles from "./App.scss";

const clients = [
  {
    id: 0,
    client: "Aurelo"
  },
  {
    id: 1,
    client: "Nikdin"
  },
  {
    id: 2,
    client: "WakeSys"
  }
];

const projectList = [
  {
    id: 0,
    client: "Nikdin",
    timeElapsed: 230,
    projectDescription: "i did something...",
    earned: 300
  },
  {
    id: 1,
    client: "HansWurst Gmbh",
    timeElapsed: 130,
    projectDescription: "Die Krümmel gezählt",
    earned: 231
  },
  {
    id: 2,
    client: "RichClient",
    timeElapsed: 230,
    projectDescription: "Redesign everything",
    earned: 123
  },
  {
    id: 3,
    client: "HansWurst Gmbh",
    timeElapsed: 130,
    projectDescription: "Die Krümmel gezählt",
    earned: 1200
  },
  {
    id: 4,
    client: "RichClient",
    timeElapsed: 230,
    projectDescription: "Redesign everything",
    earned: 300
  },
  {
    id: 5,
    client: "Nikdin",
    timeElapsed: 230,
    projectDescription: "i did something...",
    earned: 456
  },
  {
    id: 6,
    client: "HansWurst Gmbh",
    timeElapsed: 130,
    projectDescription: "Die Krümmel gezählt",
    earned: 300
  },
  {
    id: 7,
    client: "RichClient",
    timeElapsed: 230,
    projectDescription: "Redesign everything",
    earned: 300
  },
  {
    id: 8,
    client: "HansWurst Gmbh",
    timeElapsed: 130,
    projectDescription: "Die Krümmel gezählt",
    earned: 300
  },
  {
    id: 9,
    client: "RichClient",
    timeElapsed: 230,
    projectDescription: "Redesign everything",
    earned: 300
  }
];

const generatedId = () => Math.floor(Math.random() * 100000);

const addProject = (list, item) => [...list, item]

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clients,
      timeElapsed: 0,
      isRunning: false,
      currentClient: "",
      projectDescription: "",
      projects: projectList,
      isActive: false
    };

    this.handleSubmitProject = this.handleSubmitProject.bind(this);
    this.handleProjectDescription = this.handleProjectDescription.bind(this);
    this.handleClientChange = this.handleClientChange.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.reset = this.reset.bind(this);
    this.addActiveClass = this.addActiveClass.bind(this);
  }

  handleSubmitProject() {
    const newId = generatedId();
    const newProject = {
      id: newId,
      client: this.state.currentClient,
      projectDescription: this.state.projectDescription,
      timeElapsed: this.state.timeElapsed
    };
    const updateProjectList = addProject(projectList, newProject);
    this.setState({
      projects: updateProjectList,
      isRunning: false,
    });
  }

  addActiveClass = () => {
    const currentState = this.state.isActive;
    this.setState({
      isActive: !currentState
    })
  }

  handleClientChange(event) {
    this.setState({
      currentClient: event.target.value
    });
  }

  handleProjectDescription(event) {
    this.setState({
      projectDescription: event.target.value
    });
  }

  startTimer = () => {
    console.log('es wurde was geklickt');
    this.interval = setInterval(() => {
      this.setState({
        timeElapsed: this.state.timeElapsed + 1,
        isRunning: true
      });
    }, 1000);
  };

  stopTimer = () => {
    clearInterval(this.interval);
    this.setState({
      isRunning: false
    });
  };

  reset = () => {
    clearInterval(this.interval);
    this.setState({
      timeElapsed: 0,
      isRunning: false
    });
  };

  render() {
    return (
      <div className={styles.App}>
        <BrowserRouter>
          <div className={styles.background}>
            <Route
              exact
              path="/"
              render={state => (
                <TimerView
                  timer={this.state.timer}
                  startTimer={this.startTimer}
                  stopTimer={this.stopTimer}
                  reset={this.reset}
                  isRunning={this.state.isRunning}
                  timeElapsed={this.state.timeElapsed}
                  clients={this.state.clients}
                  currentClient={this.state.currentClient}
                  handleClientChange={this.handleClientChange}
                  handleProjectDescription={this.handleProjectDescription}
                  handleSubmitProject={this.handleSubmitProject}
                />
              )}
            />
            <Route
              path="/ListView"
              render={state => <ListView 
                projects={this.state.projects}
                addActiveClass={this.addActiveClass}
                isActive={this.state.isActive}
              />}
            />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
