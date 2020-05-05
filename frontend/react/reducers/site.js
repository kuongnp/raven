
import helpers from '../helpers.js';


const initState = async() => {
  return await helpers.active_theme();
}

console.log(initState());

/*const site = async() => {
  const state = await helpers.active_theme();
  return state;
};*/

const site = (state={title:'Jake Long',tagline:'freelance dev',contact:{name:'kuongnp',email:'kuongnp@gamil.com',phone_number:'0836574343',address:'31 luong ngoc quyen'}}) => {
  return state;
}
export default site