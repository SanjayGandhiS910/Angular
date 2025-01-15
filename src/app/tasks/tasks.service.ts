import { Injectable } from '@angular/core';
import { dummyTasks } from '../DUMMY_Tasks';

@Injectable({ providedIn: 'root'})
export class TaskService{
    private tasks = dummyTasks;

    getUserTasks(userId: string){
        return this.tasks.filter((task)=> task.userId === userId);
    }

    addUserTask(obj: {title: string, summary: string, dueDate: string }, userId: string){
        this.tasks.push({
            id: new Date().getHours().toString(),
            userId: userId,
            title: obj.title,
            summary: obj.summary,
            dueDate: obj.dueDate
        })
    }

    removeTask(id: string){
        this.tasks = this.tasks.filter((task)=>task.id !== id);
    }
}