// NOTE: Read the comments as numbered from 1 onwards.

/** 1 */
// Naming this file as: "NavigationItems.component.test.jsx" is
// important because that's automatically picked up by CRA once
// we run the `npm test` command and so, this `.test.jsx` files
// will also be included when running the tests.


/** 2 */
/**
 * A `.test.jsx` file uses Jest by default and Jest gives us a 
 * couple of methods to define the test(s). 
 * 
 * Some of the important methods provided by Jest are:
 *  1. describe(description: string, callback: fn)
 *  2. test(description: string, callback: fn, timeout: int)
 *  3. it() -- alias for the test() method.
 */


/** 5 */
import React from 'react';
import NavigationItems from './NavigationItems.component';

/** 6 */
import NavigationItem from './NavigationItem/NavigationItem.component';

/** 4 */
// To connect the React application to enzyme testing utility 
// package, we use the configure method to pass in an 'adapter'
// which is basically the connection between enzyme and react.
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter(), });


/** 3 */
// https://jestjs.io/docs/en/api#describename-fn
describe('<NavigationItems />', () => {
  // https://jestjs.io/docs/en/api#testname-fn-timeout
  // NOTE: it() and test() are both same functions where it() 
  // is the alias of the test() method.
  test('should render two <NavigationItem /> elements if not authenticated', () => {
    // Here, we write our TEST LOGIC, and for that - we create
    // an instance of the <NavigationItems /> component as how
    // it is rendered to the real DOM through React and then
    // have a look into the rendered component and see what was
    // rendered for the case that the respective prop (which
    // is `isAuthenticated` prop) is true/false.

    // Now we might think that we might have to render the
    // entire React application because <NavigationItems />
    // is just one tiny component in the entire application,
    // and that's where enzyme comes in. Enzyme allows us to
    // render these individual components, in a standalone
    // manner, independent of the entire React application.

    // That's the whole idea behind the enzyme package, we can
    // write Unit Tests (Isolated Tests) - tests where we don't
    // need to render the complete React application.

    // for that, we need to connect the React app to the enzyme
    // package. Configuration can be read in #4.

    // Now we can render a mock <NavigationItems /> component
    // using the shallow() method from 'enzyme' testing
    // utility package. shallow() method is the best option to
    // render a React component in many circumstances. Enzyme
    // also offers 2 other alternatives, which we'll look into
    // later in the enzyme docs.

    // https://enzymejs.github.io/enzyme/docs/api/shallow.html
    // Using shallow(), we'll mock render the
    // <NavigationItems /> component and test the respective
    // component.

    // To the shallow() method, we pass in <NavigationItems />
    // component and so, we essentially pass in JSX, and to
    // make use of JSX in our code, we need to import React
    // from 'react' as seen in #5.
    const wrapper = shallow(<NavigationItems />);

    // Now we can have a look into the `wrapper` const in the
    // test, where we now write our expectation using the
    // expect() method which is provided by Jest.

    // To know more, look into the following links:
    // 1. API: https://jestjs.io/docs/en/expect#expectvalue
    // 2. Usage: https://enzymejs.github.io/enzyme/docs/api/shallow.html

    // expect() method inside a test simply asserts what is to
    // be expected of this component. For example, our 
    // component, which is the <NavigationItems /> component,
    // inside the `wrapper`, we want 2 <NavigationItem /> 
    // components, and so for that, we'll use the find() method
    // provided by 'enzyme' to for the `wrapper` object, which
    // is passed to the expect() method.
    
    // expect(wrapper.find(NavigationItem)); // this is simply saying we expect to find a NavigationItem component, but it doesn't exactly specify that we want to find 2 of them exactly, and for that, we can chain the utility methods made available by Jest, as follows:

    expect(wrapper.find(NavigationItem)).toHaveLength(2);

    /**
     * NOTE that the `wrapper` is sent a shallow rendered copy 
     * of the <NavigationItems /> component where the `isAuth`
     * prop is not sent, and that means, it will be taken as 
     * false by default.
     */
  });
});

/**
 * We can run tests using `npm test`, if the react app's config
 * is setup through CRA.
 */

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// The code without the comments:

// import React from 'react';
// import NavigationItems from './NavigationItems.component';
// import NavigationItem from "./NavigationItem/NavigationItem.component";

// // Configuration of enzyme and react.
// import { configure } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// configure({ adapter: new Adapter(), });

// describe('<NavigationItems />', () => {
//   test('should render two <NavigationItem /> elements if not authenticated', () => {
//     const wrapper = shallow(<NavigationItems />);
//     expect(wrapper.find(NavigationItem)).toHaveLength(2);
//   });
// });
