// useReducer => hook do React que recebe um reducer e um estado inicial.
// reducer => função que recebe o estado atual e uma ação e retorno o novo estado.
// state => o estado atual.
// action => a ação disparada, geralmente é o objeto com type e (opcionalmente) payload.
// type => o tipo da ação, geralmente uma string (pode ser um enum, constante, etc).
// payload => os dados extras enviados junto com o action, se necessário para atualizar o estado.

import type { TaskModel } from '../../models/TaskModels';

export enum TaskActionTypes {
  START_TASK = 'START_TASK',
  INTERRUPT_TASK = 'INTERRUPT_TASK',
  RESET_STATE = 'RESET_STATE',
}

export type TaskActionWithPayload = {
  type: TaskActionTypes.START_TASK;
  payload: TaskModel;
};

export type TaskACtionWithoutPayload =
  | {
      type: TaskActionTypes.INTERRUPT_TASK;
    }
  | {
      type: TaskActionTypes.RESET_STATE;
    };

export type TaskActionModel = TaskActionWithPayload | TaskACtionWithoutPayload;
