import apiConstructor from './apiConstructor'

class booksConnect extends apiConstructor {
  constructor() {
    super('book')
  }

  getAllBooks = async () => {
    try {
      const { data } = await this.api.get('/')
      return data
    } catch (error) {
      throw error.response.data
    }
  }

  getOneBook = async (id) => {
    try {
      const { data } = await this.api.get(`/bookOne/${id}`)
      return data
    } catch (error) {
      throw error.response.data
    }
  }

  searchBook = async (search) => {
    try {
      const { data } = await this.api.get(`/bookSearch/${search}`)
      return data
    } catch (error) {
      throw error.response.data
    }
  }

  createBook = async (newBook) => {
    try {
      const { data } = await this.api.post('/', newBook)
      return data
    } catch (error) {
      throw error.response.data
    }
  }

  updateBook = async (id, updatedBook) => {
    try {
      const { data } = await this.api.put(`/${id}`, updatedBook)
      return data
    } catch (error) {
      throw error.response.data
    }
  }

  updateImage = async (id ,file) => {
    try {
      const imgData = new FormData()
      imgData.append('image', file)
      const { data } = await this.api.put(`/book/image/${id}`, imgData)
      return data
    } catch (error) {
      throw error.response.data
    }
  }

  deleteBook = async (id) => {
    try {
      const { data } = await this.api.delete(`/delete/${id}`)
      return data
    } catch (error) {
      throw error.response.data
    }
  }
}

export default new booksConnect()
