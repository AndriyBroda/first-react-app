import React from 'react';
import './App.scss';

function App() {
  interface IApp {
    name: string;
    setName(name: string): void;
    projects: IProject[];
    addProject(project: IProject): void;
  }

  interface IUser {
    id: number;
    name: string;
    // getAttached: () => Task[];
    // getTotalWorkingTime: () => number;
  }

  interface IProject {
    tasks: ITask[];
    addTask(task: ITask): void;
    editTask(task: Partial<ITask>): void;
    deleteTask(id: number): void;
    getTotalTime(): number;
    getAllTasksByDeveloper(id: number): ITask[];
  }

  interface ITask {
    id: number;
    title: string;
    durationMin: number;
    completed: boolean;
    developer: User;
    getInfo(): string;
  }

  class App implements IApp {
    public projects: IProject[] = [];

    constructor(public name: string) {}

    setName(name: string): void {
      this.name = name;
    }

    addProject(project: IProject): void {
      this.projects.push(project);
    }
  }
  class Task implements ITask {
    constructor(
      public id: number,
      public title: string,
      public durationMin: number,
      public completed: boolean,
      public developer: User
    ) {}

    public getInfo() {
      return `#${this.id} ${this.title} ${this.completed}`;
    }
  }

  class User implements IUser {
    constructor(public id: number, public name: string) {}

    // getAttached: () => {

    // };

    // getTotalWorkingTime: () => {

    // };
  }

  class Project implements IProject {
    public tasks: Task[] = [];

    addTask(task: Task): void {
      this.tasks.push(task);
    }

    editTask(task: Partial<Task>): void {
      const editedTask = this.tasks.find(item => item.id === task.id);
      // const editedTaskIndex = this.tasks.findIndex(editedTask);
    }

    deleteTask(id: number): void {}

    getTotalTime(): number {
      return 44;
    }

    getAllTasksByDeveloper(id: number): Task[] {
      return [];
    }
  }

  // const developer;
  // const workTask = new Task(0, 100, false, )

  const app = new App('FirstApp');

  // app.addProject(new Project)

  return <div>Hello</div>;
}

export default App;
