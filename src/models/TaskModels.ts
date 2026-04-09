import type { TaskStateModel } from './TaskStateModel';

export type TaskModel = {
  id: string;
  name: string;
  duration: number;
  startDate: number;
  completeDate: number; // quando o timer chegar ao final
  interruptdDate: number; // quando a task for interrompida
  type: keyof TaskStateModel['config'];
};
