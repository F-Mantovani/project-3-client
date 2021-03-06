import apiConstructor from './apiConstructor'

class tasksConnect extends apiConstructor {
  constructor(){
    super('task')
  }

  getAllTasks = async () => {
    try {
      const { data } = await this.api.get('/')
      return data
    } catch (error) {
      throw error.response.data
    }
  }

  createTask = async (newTask) => {
    try {
      const { data } = await this.api.post('/', newTask)
      return data
    } catch (error) {
      throw error.response.data
    }
  }

  updateTitle = async (payload) => {
    const { title , id } = payload
    try {
      const { data } = await this.api.put(`/${id}`, {title: title})
      return data
    } catch (error) {
      throw error.response.data
    }
  }

  updateStatus = async (payload) => {
    const { id, status } = payload
    try {
      const { data } = await this.api.put(`/${id}`, {status: status})
      return data
    } catch (error) {
      throw error.response.data
    }
  }

  deleteTask = async (id) => {
    try {
      const { data } = await this.api.delete(`/deleteOne/${id}`)
      return data
    } catch (error) {
      throw error.response.data
    }
  }

  deleteAllTasks = async (status) => {
    try {
      const { data } = await this.api.delete(`/deleteAll/${status}`)
      return data
    } catch (error) {
      throw error.response.data
    }
  }

}

export default new tasksConnect ()