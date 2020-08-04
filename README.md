# Burger Builder

A Demo Application for Building/Customizing a Burger with Meat, Bacon, Cheese & Salad (Lettuce), built using React.

Reade about installation and other details **[here](./README.react-notes.md)**

## Design Overview

The app's layout and component structure (react) has been designed at [draw.io](https://www.draw.io), and the basic design can be found **[here](https://codepen.io/ch-sriram/full/JjXPbEe)**.

NOTE: There can be more additions into the design, over iterations of the Application.

## Development Workflow

0. Layout, Component & State Design: **[View](https://codepen.io/ch-sriram/full/JjXPbEe)**
1. Creating a `<Layout />` Component: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/0187377958254ea601fcfb9c6b5c5d5e39bbc484)
2. Initiating the implementation of `<BurgerBuilder />` Container: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/d8d3987494ed8a0297a97d1dd3e864e3a6e7bbf4)
3. Concept Art of the Burger using CSS: **[Code @CodePen](https://codepen.io/ch-sriram/pen/rNeByJy)**
4. Adding Dynamic `<BurgerIngredient />` Component: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/c0df741dc802e801a1f4118aaea57ba1e893da40)
5. Adding `PropType` Validation for `<BurgerIngredient />`: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/47edd2792c2cdb56b2a96d1905fb89b41fca3223)
6. Implementation of the `<Burger />` Component: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/523b225338e21b2d5c97e212db04cf5617282ed1)
7. Outputting `<BurgerIngredients />` Dynamically: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/1d1de276b9d7d677b43a842fc6be21fb436ec988)
8. Calculating the `<BurgerIngredient />` Sum Dynamically using `reduce()`: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/0be94dfd71b0280de5aa7f1ff2233fe5ac65c685)
9. Adding the `<BuildControl />` & `<BuildControls />` Component: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/2c9be483093bc2f9015799e04844cda739f5d699)
10. Outputting Multiple `<BuildControl />` components using the `<BuildControls />` Component: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/ab893618efaf7013c49acc06cdb1b11d8af72d29)
11. Connecting `state` to each `<BuildControl />` & `<BuildControls />` Component
    1. Adding Ingredients Dynamically &mdash; Connecting `onClick` handler to the `More` button: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/bd206d7166ba60336acf25803fc2e01047b85485)
    2. Removing Ingredients Safely &mdash; Connecting `onClick` handler to the `Less` button: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/cb10e79bb824a5de9d7d617426e1cec8feac3fe3)
12. Displaying & Updating the `totalPrice` in the `<Burger />` Component: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/16b0f67cca2c63257b2bddad4899b2899c03b005)
