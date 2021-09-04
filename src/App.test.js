

import Enzyme,{ shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });
import App from './App';


//test to check we render as App component


// test('render Application',()=>{
//   const wrapper= shallow(<App/>);
//   const app=wrapper.find(".App");
//   expect(app.length).toBe(1)
// })

//test to check  we render counter



//test to check we render increment button




//test to check we render decrement button



//*******************************************//

//behaviour tests


//test to check counter should start at zero




//test to check Increasing the counter



//test to check Decreasing the counter  the counter




// solution




// test('render Application',()=>{
//   const wrapper= shallow(<App/>);
//   const app=wrapper.find(".App");
//   expect(app.length).toBe(1)
// })


// test('render counter',()=>{
//   const wrapper= shallow(<App/>);
//   const counter=wrapper.find(".counter");
//   expect(counter.length).toBe(1)
// })


// test('render increment button ',()=>{
//   const wrapper= shallow(<App/>);
//   const increment=wrapper.find(".increment");
//   expect(increment.length).toBe(1)
// })


// test('render decrement button ',()=>{
//   const wrapper= shallow(<App/>);
//   const decrement=wrapper.find(".decrement");
//   expect(decrement.length).toBe(1)
// })

// //behaviour tests

// test('counter should start at zero',()=>{
//   const wrapper= shallow(<App/>);
//   const counter=wrapper.find(".counter");
//   expect(counter.text()).toBe("0")
// })





// test('Increasing the counter ',()=>{
//   const wrapper= shallow(<App/>);
//   const increment=wrapper.find(".increment");

//   increment.simulate('click');

//   const counter=wrapper.find(".counter");
//   expect(counter.text()).toBe("1")
// })


// test('Decreasing the counter  the counter ',()=>{
//   const wrapper= shallow(<App/>);
//   const decrement=wrapper.find(".decrement");

//   decrement.simulate('click');

//   const counter=wrapper.find(".counter");
//   expect(counter.text()).toBe("-1")
// })