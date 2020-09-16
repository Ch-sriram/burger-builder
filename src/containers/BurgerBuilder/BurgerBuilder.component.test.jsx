import React from 'react';

/**
 * We have a named import here because we want to get the 
 * container itself without any redux integration.
 */
import { BurgerBuilder } from './BurgerBuilder.component';
import BuildControls from '../../components/Burger/BuildControls/BuildControls.component';

// IMPORTS & CONFIG FOR ENZYME & REACT
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter(), });

/**
 * In order to test a container in react, if we do not use
 * redux to maintain the state in a single STORE, we might've 
 * to use the setState() method on a component rendered using
 * shallow() method, as shown in the docs here:
 * https://enzymejs.github.io/enzyme/docs/api/ShallowWrapper/setState.html
 * 
 * But in our case, we use the Redux STORE to maintain the 
 * state, and so, what we do is, we simply test the containers 
 * (class-based components) in the same way we test functional 
 * components, using setProps() method on the container 
 * rendered using shallow() method, to check the state.
 */

describe('<BurgerBuilder />', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(
      <BurgerBuilder onInitIngredients={() => {}} />
    );
  });

  test('should render <BuildControls /> when receiving ingredients', () => {
    wrapper.setProps({ ings: { salad: 0, bacon: 0, meat: 0, cheese: 0, }, });
    expect(wrapper.find(BuildControls)).toHaveLength(1);
  });
});
