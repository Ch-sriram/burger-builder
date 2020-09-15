import React from 'react';
import NavigationItems from './NavigationItems.component';
import NavigationItem from './NavigationItem/NavigationItem.component';

// IMPORTS FOR ENZYME & REACT CONFIGURATION
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter(), });

/**
 * for a single component, we can test more than one aspect
 * of that component. For example, we previously tested for
 * <NavigationItems /> component if it definitely has exactly
 * 2 <NavigationItem /> components or not, when the user is not
 * authenticated.
 * 
 * Now we can also test when the user is authenticated, are 
 * there exactly 3 <NavigationItem /> components present or
 * not, which is another valid test, as shown below after/in 
 * line #36 below.
 */

// https://jestjs.io/docs/en/api#describename-fn
// describe('<NavigationItems />', () => {
//   // https://jestjs.io/docs/en/api#testname-fn-timeout
//   test('should render two <NavigationItem /> elements if not authenticated', () => {
//     // https://enzymejs.github.io/enzyme/docs/api/shallow.html
//     const wrapper = shallow(<NavigationItems />);

//     // To know more, look into the following links:
//     // 1. API: https://jestjs.io/docs/en/expect#expectvalue
//     // 2. Usage: https://enzymejs.github.io/enzyme/docs/api/shallow.html
//     expect(wrapper.find(NavigationItem)).toHaveLength(2);
//   });

//   test('should render three <NavigationItem /> elements if authenticated', () => {
//     const wrapper = shallow(<NavigationItems isAuth />);
//     expect(wrapper.find(NavigationItem)).toHaveLength(3);
//   });
// });

/**
 * Now instead of defining the `wrapper` const which has the 
 * same component which is being tested, we can use the method
 * beforeEach() provided by Jest (other method is afterEach(),
 * which is used for clean-up work) and we can do some general
 * setup (initialization of variables/components that are in 
 * common use), which is demonstrated below:
 */

describe("<NavigationItems />", () => {
  let wrapper;
  
  // https://jestjs.io/docs/en/api#beforeeachfn-timeout
  beforeEach(() => {
    // https://enzymejs.github.io/enzyme/docs/api/shallow.html
    wrapper = shallow(<NavigationItems />);
  });

  // https://jestjs.io/docs/en/api#testname-fn-timeout
  test("should render two <NavigationItem /> elements if not authenticated", () => {
    expect(wrapper.find(NavigationItem)).toHaveLength(2);
  });

  test("should render three <NavigationItem /> elements if authenticated", () => {
    // Here, we'll have a failed test because there will only 
    // be three (3) <NavigationItem /> components in the 
    // <NavigationItems /> when the `isAuth` prop of the
    // <NavigationItems /> component is true.

    // And so, to set the `isAuth` prop to the common wrapper
    // (that we're using for both the tests) for this 
    // respective test, and for that, we can do 2 things:
    //  1. We can simply assign the <NavigationItems /> with 
    //     the `isAuth` prop to the `wrapper` variable defined 
    //     above i.e.,
    //       wrapper = shallow(<NavigationItems isAuth/>);
    //     But that's not the standard way, another method is:
    //  2. We can access the common `wrapper` variable and on 
    //     that, before calling the expect() method, we can use
    //     the setProps() method as follows:
    // https://enzymejs.github.io/enzyme/docs/api/ShallowWrapper/setProps.html
    wrapper.setProps({ isAuth: true, });
    expect(wrapper.find(NavigationItem)).toHaveLength(3);
  });
});
