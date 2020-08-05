# Burger Builder

A Demo Application for Building/Customizing a Burger with Meat, Bacon, Cheese & Salad (Lettuce), built using React.

Reade about installation and other details **[here](./README.react-notes.md)**

## Design Overview

The app's layout and component structure (react) has been designed at [draw.io](https://www.draw.io), and the basic design can be found **[here](https://codepen.io/ch-sriram/full/JjXPbEe)**.

NOTE: There can be more additions into the design, over iterations of the Application.

## Development Workflow

Layout, Component & State Design: **[View](https://codepen.io/ch-sriram/pen/LYNPbxq)**

### Implementing the Core Functionality (`<BurgerBuilder/> Component`) of the App

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
13. Implementing and adding the `<OrderButton />`: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/4b5c848b026bd9c921731a3f11ba5ae05d6a46cf)
14. Creating the `<OrderSummary />` Modal Component: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/220a907178932aac83bf09d61997785edf3f0bff)
15. Showing/Hiding the `<OrderSummary />` Modal Component w. Animation: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/c50a7880b846b16bb0b1267034faf945d18f40e0)
16. Implementing a `<Backdrop />` Component: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/d97b727fe03205c73aaad09d223f08dd18febcb4)
17. Adding a Custom Button `<StyledButton />` Component: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/d97b727fe03205c73aaad09d223f08dd18febcb4)
18. Implementing the Functionality of the `<StyledButton />` Component: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/afd95bf43088d39c1e3a2ef626028dc4f2603259)

### Implementing the Toolbar & Side Drawer

1. Adding a `<Toolbar />` Component: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/1f5cf0c1ae06912264691a5bd2cbdaed15d066a8)
2. Using & Adding a `<Logo />` in our Application: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/fe3e10f5665a6943e2e480ce280ce4afe06355df)
3. Adding Reusable `<NavigationItem />` inside `<NavigationItems />`: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/7b491babafc6790d4523d09f195e36ef7a2c5874)
4. Creating a Responsive `<SideDrawer />` Component: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/affec9d695647c789486a460782451a2c336f9a6)
5. Working on Responsive Adjustments for the `<SideDrawer />` Component: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/3e828543bd38fedcc80cb45d89c1c187d0aacd71)
6. Responsive Adjustments on `<NavigationItem />` & `<NavigationItems />` Components for the `<SideDrawer />` Component: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/6f791baf4c4e10aa0c8e5c2b48e2723438701bb2)
7. Reusing the `<Backdrop />` Component for the `<SideDrawer />` Component: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/c890b62822706d56733cc0113307fe58367a21a9)
8. Adding a `<DrawerToggle />` Component to toggle the `<SideDrawer />` Component: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/e9720a7b7011684e3fe13469f06ad5d2c3f173ba)
9. Adding a Hamburger Icon for the `<DrawerToggle />` Component: [Commit Details]()
