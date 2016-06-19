import { Dispatcher } from 'flux'

const AppDispatcher  = new Dispatcher

// ToDo: Dor dev only
AppDispatcher.register(console.log.bind(console))

export default AppDispatcher