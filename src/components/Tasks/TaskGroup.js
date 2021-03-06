import CardPlato from '../../design.system/CardPlato'
import CheckPlato from '../../design.system/CheckPlato'
import ColumnContainer from '../../design.system/ColumnContainer'
import CustomCheckboxPlato from '../../design.system/CustomCheckboxPlato'
import { Overline } from '../../design.system/text.styling/styles'
import tasksConnect from '../../utils/api.handlers/tasksConnect'
import useAsyncMutation from '../../utils/controllers/useAsyncMutation'
import useTaskForm from '../../utils/controllers/useTaskForm'
import TaskCard from './TaskCard'

const TaskGroup = ({ kanban, name, dashboard }) => {
  
  const { newTask, handleTaskInput, saveNewTask } = useTaskForm()
  const deleteTaskList = useAsyncMutation(tasksConnect.deleteAllTasks, 'kanban')

  return (
    <>
      <div className='task-group-container'>
        <div className='task-card-grouping'>
          {kanban
            .filter((todo) => todo.status === name)
            .map((element) => (
              <TaskCard
                key={element._id}
                title={element.title}
                status={element.status}
                id={element._id}
              />
            ))}
        </div>
      </div>
      {name === 'todo' && (
        <CardPlato muted>
          <CustomCheckboxPlato onKeyDown={(e) => e.key === 'Enter' && saveNewTask()}>
            <input
              type='checkbox'
              id='add-new-task'
              className='custom-checkbox'
            />
            <input
              type='text'
              className='task-add body'
              placeholder='Add new task...'
              value={newTask}
              onChange={(e) => handleTaskInput(e)}
            />
            <label htmlFor='add-new-task' className='task-label'></label>
          </CustomCheckboxPlato>
          {newTask.length ? (
            <CheckPlato onClick={() => saveNewTask()}></CheckPlato>
          ) : null}
        </CardPlato>
      )}
      {!dashboard && kanban.length ? (
        <ColumnContainer  className="pb375 mt-3">
          <Overline destructive onClick={() => deleteTaskList(name)}>
            Delete all tasks from this list
          </Overline>
        </ColumnContainer>
      ) : null}
    </>
  )
}

export default TaskGroup
