import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';

export function Tips() {
  const { state } = useTaskContext();
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  // tips
  const tipsForWhenActiveTask = {
    workTime: <span>Foque na atividade por {state.config.workTime} min</span>,
    shortBreakTime: (
      <span>Descanso curto de {state.config.shortBreakTime} min</span>
    ),
    longBreakTime: (
      <span>Descanso longo de {state.config.longBreakTime} min</span>
    ),
  };

  const tipsForNoActiveTask = {
    workTime: <span>Próximo ciclo será de {state.config.workTime} min</span>,
    shortBreakTime: (
      <span>Próximo ciclo será de {state.config.shortBreakTime} min</span>
    ),
    longBreakTime: (
      <span>Próximo ciclo será de {state.config.longBreakTime} min</span>
    ),
  };

  return (
    <>
      {state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
      {!state.activeTask && tipsForNoActiveTask[nextCycleType]}
    </>
  );
}
