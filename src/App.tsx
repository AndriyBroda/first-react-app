import React from 'react';
import './App.scss';
interface IApp {
  name: string;
  projects: IProject[];
  setName(name: string): void;
  addProject(project: IProject): void;
}

interface IUser {
  id: number;
  name: string;
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

class User implements IUser {
  constructor(public id: number, public name: string) {}
}
class Project implements IProject {
  public tasks: Task[] = [];

  addTask(task: Task): void {
    this.tasks.push(task);
  }

  editTask(task: Partial<Task>): void {
    // It also works, but I guess solution with map is better

    // const editedTaskIndex = this.tasks.findIndex(item => item.id === task.id);
    // const editedTask = this.tasks[editedTaskIndex];

    // if (editedTask) {
    //   this.tasks[editedTaskIndex] = Object.assign(editedTask, task);
    // }

    this.tasks = this.tasks.map(item => {
      return item.id === task.id ? Object.assign(item, task) : item;
    });
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  getTotalTime(): number {
    return this.tasks.reduce((acc, task) => acc + task.durationMin, 0);
  }

  getAllTasksByDeveloper(id: number): Task[] {
    return this.tasks.filter(task => task.developer.id === id);
  }
}
class Task implements ITask {
  public static lastID = 0;
  public id = 0;

  constructor(
    public title: string,
    public durationMin: number,
    public completed: boolean,
    public developer: User
  ) {
    this.id = ++Task.lastID;
  }

  public getInfo() {
    return `#${this.id} ${this.title} ${this.completed ? 'completed' : 'not completed'}`;
  }
}

function ReactApp() {
  const app = new App('FirstApp');

  const firstProject = new Project();

  const developerIgor = new User(0, 'Igor');
  const developerAndrew = new User(1, 'Andrew');

  firstProject.addTask(new Task('Implement new nav', 100, false, developerIgor));
  firstProject.addTask(new Task('Main page layout', 360, false, developerAndrew));

  app.addProject(firstProject);

  firstProject.editTask({ id: 1, completed: true });
  firstProject.deleteTask(1);

  console.log(app);

  return <div>Hello</div>;
}

export default ReactApp;
