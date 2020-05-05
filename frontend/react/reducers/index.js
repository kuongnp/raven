import { combineReducers } from 'redux'
import about from './about'
import portfolio from './portfolio'
import contact from './contact'
import site from './site'

//import entry from './entry'
//import story from './story'

const rootReducer = combineReducers({
  site,
  about,
  portfolio,
  contact
})

export default rootReducer
