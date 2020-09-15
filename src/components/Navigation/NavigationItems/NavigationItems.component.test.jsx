import React from 'react';
import NavigationItems from './NavigationItems.component';
import NavigationItem from './NavigationItem/NavigationItem.component';

// IMPORTS FOR ENZYME & REACT CONFIGURATION
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter(), });

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
    // https://enzymejs.github.io/enzyme/docs/api/ShallowWrapper/setProps.html
    wrapper.setProps({ isAuth: true, });
    expect(wrapper.find(NavigationItem)).toHaveLength(3);
  });

  test("should contain Logout <NavigationItem /> element if authenticated", () => {
    // https://enzymejs.github.io/enzyme/docs/api/ShallowWrapper/contains.html
    wrapper.setProps({ isAuth: true });
    expect(wrapper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)).toEqual(true);
  });
});
