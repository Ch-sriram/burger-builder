# 🍔 Burger Builder 🛠

A Demo Application for Building/Customizing a Burger with Meat, Bacon, Cheese & Salad (Lettuce), built using React.

Reade about installation and other details **[here](./README.react-notes.md)**

## 💷 Design Overview 📝

The app's layout and component structure (react) has been designed at [draw.io](https://www.draw.io), and the basic design can be found **[here](https://codepen.io/ch-sriram/pen/LYNPbxq)**.

NOTE: There can be more additions into the design, over iterations of the Application.

## 💻 Development Workflow 🌊⌚

Layout, Component & State Design: **[View](https://codepen.io/ch-sriram/pen/LYNPbxq)**

### Implementing the Core Functionality of the App &mdash; `<BurgerBuilder/>` 🍔🛠 Component

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

### Implementing the `<Toolbar />` & `<SideDrawer />` Components ⚡

1. Adding a `<Toolbar />` Component: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/1f5cf0c1ae06912264691a5bd2cbdaed15d066a8)
2. Using & Adding a `<Logo />` in our Application: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/fe3e10f5665a6943e2e480ce280ce4afe06355df)
3. Adding Reusable `<NavigationItem />` inside `<NavigationItems />`: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/7b491babafc6790d4523d09f195e36ef7a2c5874)
4. Creating a Responsive `<SideDrawer />` Component: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/affec9d695647c789486a460782451a2c336f9a6)
5. Working on Responsive Adjustments for the `<SideDrawer />` Component: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/3e828543bd38fedcc80cb45d89c1c187d0aacd71)
6. Responsive Adjustments on `<NavigationItem />` & `<NavigationItems />` Components for the `<SideDrawer />` Component: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/6f791baf4c4e10aa0c8e5c2b48e2723438701bb2)
7. Reusing the `<Backdrop />` Component for the `<SideDrawer />` Component: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/c890b62822706d56733cc0113307fe58367a21a9)
8. Adding a `<DrawerToggle />` Component to toggle the `<SideDrawer />` Component: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/e9720a7b7011684e3fe13469f06ad5d2c3f173ba)
9. Adding a Hamburger Icon for the `<DrawerToggle />` Component: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/40598a9b851042abe785436fae760e20f4a1f93e)

### Improvements & Changes Before Addition of Routing & API Calls ⚡

1. Improving the Overall Application using `shouldComponentUpdate()` for `<Modal />` Component & Removing unnecessary `.styled.jsx` files: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/f19f68ba17acb7e094741865f0397131ca991f09)
2. Responsive Styling Changes in the `<Layout />`, `<BuildControls />` & `<BurgerBuilder />` Components && Adding `<Wrapper />` UI Component to Make Use of CSS Grid: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/281b64b6882915b75a39a62106a2f8200b25571c)

### 🖥 Creating a Backend Firebase 🔥 & GETting/POSTing Data from/to the Server ☁

Firebase Common API Endpoint: <https://burger-builder-ram.firebaseio.com/>

1. Creating a Firebase Realtime Database: [Firebase DOCS](https://firebase.google.com/docs/database/web/start)
2. Creating the `axios` instance to access our DB: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/beb5dcb669a15a69b733f8b289e04ab5f06cdcdd)
3. Sending a POST Request using `axios.post()`: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/2c7645a8b26cd5a3db6ac0052e274cf89662b4ca)
4. Displaying a **[Spinner](https://projects.lukehaas.me/css-loaders/)** while sending a POST Request: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/2067df848d89f1b97b5d3564215b648d398468e0)
5. Handling Errors Globally using the `<Modal />` Component inside the `<withErrorHandler />` Closure HOC: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/74552c827692cadf1ef419214f360494ad350d81)
6. Retrieving Data from the **[Firebase Backend](https://burger-builder-ram.firebaseio.com/ingredients)** & Resetting Error Handler inside `withErrorHandler` Closure HOC inside the `constructor()` lifecycle method: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/25931159b2254abff5398b69b3ef1d9d877a5498)
7. De-allocating Previously Allocated Interceptors to Different Respective Components using `axios.interceptors.request/response.eject(axiosInstance)`: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/56ec181898c2dd9be30af028a2f76832ce708864)
8. Resetting the `<BurgerBuilder />` Component to show in App.js: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/ae43d461e8b467b0639a066ffd1b62b70fce6424)

### 🔀 Adding Routing using `react-router` 🔀

**API Endpoint to fetch Orders: <https://burger-builder-ram.firebaseio.com/orders.json>**

1. Building the `<Checkout />` & `<CheckoutSummary />` Components: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/bb4ab26d36667835423c08ca13c66db4be548c82)
2. Setting Up Routing & Routes **`npm i --save react-router-dom`**: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/3c6460117d6ea628539b3f21b93c8cefdf8c16ff)
3. Navigating to the Checkout Page: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/0b4e6a4c06d40293f5b77cf0255f5be35680d1a8)
4. Navigating Back & To Next Page: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/055272d5adc3d75bb447e681bf5e149d026af714)
5. Passing `ingredients` data via Query Params using `URLSearchParams()` & `encodeURIComponent()` methods: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/269ed08052bb9ceedabc3692510fd72c6d7650fe)
6. Navigating to the `<ContactData />` Component: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/ab1083c80d9e48cb1bc13c888b7d342942772edb)
7. Order Submission & Passing Data Between Pages using `withRouter()` HOC: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/cd0160730a28ab8f8d96afa165e8c4858b47afc3)
8. Adding a `<Order />` Component inside `<Orders />` Container (Page): [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/a8ecf21d53600cc3fe33ef92d100eeb651acf2c2)
9. Implementing Navigation Links using `<NavLink />` Component: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/cd28720d9650cea831ca4c4975dfeb9c09160d8f)
10. Fetching Orders from the **[Firebase Backend](https://burger-builder-ram.firebaseio.com/orders.json)**: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/c0a5f197c56fc2b146f59d9d3fe8bc83e5361900)
11. Outputting the Orders: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/61ed1ab9380291d1b8f6ad8ebfeeb5c2b64cbfc0)

### 💷 Adding Contact Form & Form Handling 📝

1. Creating a Custom Dynamic `<Input />` Component: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/3576b226a1f6c453948052e66b10a3da85da10cc)
2. Setting-up JS Config for the Form in `<ContactData />` Component: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/10c4e62025e610b6fb6259a0caa5311082a3f614)
3. Creating `<Input />` Components Dynamically, based on the JS Config, inside the `<ContactData />` Component: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/dae73e0b18d53a5529df6fe706cf3432098da830)
4. Adding a Drop Down Component for `<ContactData />` Component inside `<Input />` Component: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/2a9da1d69c9f242245c14fd6f19ca8d2d7161953)
5. Handling User Input: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/7080a9d9873d216ab9b1332e6f6e3d931904f774)
6. Handling Form Submission: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/5368d4df7ceb25d11d01bfdbe70495acde8acb33)
7. Adding Custom Form Validation: [Commit Details]()
