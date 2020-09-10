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
7. Adding Custom Form Validation: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/95cada3e3288605a5e44a9e599b6dad31178d4e5)
8. Fixing a Common Validation Gotcha using Interpolation: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/0be6a86ce1c2a7498664a1e8a08ef97e904f9b2b)
9. Adding Validation Feedback for UI: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/77c9edaa1b116fb9d032a4505dd8b4ed1933c72b)
10. Improving Visual Feedback: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/2b9a8006c9651cef42188f8648e02708fcf2ff6d)
11. Handling Overall Form Validity: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/a319cb9fda29ac9fb3ef21fe8b656d1c55a3b301)
12. Fixing an Error Related to Drop Down Component's State in `<ContactData />`: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/02c8afe907d185ff72c395de581e5cba259b45fe)
13. Fixing a Minor Bug: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/881f39f67deca14650953d01767aabcb8c93b8dc)

### Adding Redux ♻ To Our Project 🍔🛠

**Dependency Installation: `npm i --save redux react-redux`**

1. Setting Up Redux **`STORE`**, **`REDUCER`** & **`ACTIONs`**: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/49e1e3a8308096450f6fc8268cd7caa33d3b716d)
2. Connecting the Redux **`STORE`** to the `<App />` Component: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/257c8bc90ad26b59efa9fa0f0020b293544825b3)
3. Finishing the **`REDUCER`** for Ingredients: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/45a0123a382061ed1c7807bb39dc54c3f514b515)
4. Connecting the `<BurgerBuilder />` Container to Redux **`STORE`**: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/3425425c5be98d658f59f98d81296bb3724de573)
5. Working on the `totalPrice`'s state in Redux **`STORE`**: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/0ef7caec3d7510c993b90c88205558f1e9cdfccd)
6. Updating local UI state `purchasable` with simple logic && maintaining Redux & UI State separately: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/9b458cdc4fb9da2dd3dc06dec36fc7f98a3ab9a6)
7. Adjusting `<Checkout />` & `<ContactData />` Components using Redux STORE: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/bbb0f3d7d6a7d5bd5fe01f021f242e2dc5c527da)

### Adding ⚡ Advanced Redux ♻ To Our Project 🍔🛠

Dependency Installation: **`npm i --save redux-thunk`**

1. Installing the **[Redux Devtools](https://github.com/zalmoxisus/redux-devtools-extension#11-basic-store)**: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/90a76bab3dc28ae461c7229419f5c3ff49ec8c27)
2. Preparing the Folder Structure to use **`ACTION CREATORS`**: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/dc431d4c3cf4b3151498a2457e9fd2a5d075bca3)
3. Creating **`ACTION CREATORS`** for `<BurgerBuilder />` Component: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/77ee57ca9edb8bfe4462daba114f537c31bde8a2)
4. Setting Up **[`redux-thunk`](https://github.com/reduxjs/redux-thunk#installation)** & **[`Redux DevTools`](https://github.com/zalmoxisus/redux-devtools-extension#12-advanced-store-setup)** to Execute Asynchronous Code: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/91ed3a4478ac6b568f09beb98c1a60d6acde97ce)
5. Fetching `ingredients` Asynchronously from the **[Firebase-Backend](https://burger-builder-ram.firebaseio.com/ingredients.json)**: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/bca5060d328da1dfa7fd6b65eb5c9c2da0768a3f)
6. Initializing `ingredients` in the `<BurgerBuilder />` Component: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/c53894fff653877d267a8980e8ec466c926f36bd)
7. Changing the Order of our `ingredients` Manually: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/88607a0746a07e9c5021f56d7b8126d7487cd239)
8. Adding **`ACTIONS`** for Orders: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/ed60d4643fe02ef0684b9d1ec9271645e01b9da0)
9. Connecting `<ContactData />` Container & Order ACTIONS: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/61c94b912042d3ecad8d8c80d48f45eb5c0da798)
10. The Order **`REDUCER`**: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/c96dbb6ba4f585e6bb6bfd895b1979d4cba912ae)
11. Working on Order **`ACTIONS`**: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/d24c2cc486b23d0bc3d4d481c5451df39a48aa41)
12. Redirect in `<ContactData />` to Improve UX: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/e114f5c158cd8a4383d643137b1b91e48471ccf7)
13. Combining **`REDUCERS`** in **`[./store/reducers/order.js]`** & **`[./store/reducers/burgerBuilder.js]`**: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/f521ec42f175146b165091e670d92f187534f0e7)
14. Handling Purchases & Updating the UI: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/c42f5f9d6b1cc7c7d948028e34bd21f64eecd8c6)
15. Resetting the `totalPrice` after Purchases: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/ddc8161cff3e022fa088e0f5cc42b2b06ea6caa4)
16. Fetching Orders via Redux & Refactoring the **`REDUCERS`** using Custom Utility Function(s): [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/e39ea9c1d7c92ca92cc3639ac6be175c904e87c8)
17. Making a Leaner Switch Case by Refactoring Code in **`REDUCERS`**: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/e85c53e3250ae1672432be21e9665fc3005e912f)

### Adding Authentication 🔐 to the 🍔🛠 Project

1. Adding an `<Auth />` Container Form: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/48acdef930355784a90ba1487187663e2055a487)
2. Adding **`ACTION Creators`** for the Auth Form: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/0a75199f9f50f0ba10fa05489739b6541152f27c)
3. Getting a Token from the Backend for Sign-Up: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/57771e243efe0719b86938a041656073b30a69d4)
4. Adding Sign-In for Authorized Users: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/2e00bc34c30fe005f6aa303191a4ad7050b613c5)
5. Storing the Response Token from Sing-In/Sign-Up: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/674882c777eda0514e1432aa4a85ebd1a328ff08)
6. Adding a `<Spinner />` UI Component for Sign-In & Showing Errors on the View: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/9e2332b6ecde73b692cdb532e8344d4517b68ac5)
7. Logging Users Out: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/4dae4c4f481f2727a40da9c9f59f4fd989508fb9)
8. Accessing Protected Resources by Setting Up Rules in Firebase 🔥: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/5e141b593ed1b4c468ee16d17ed9d046d85eb8fd)
9. Updating the UI Depending on `auth` State: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/2846f3a2c4d6f875b0ed040a74b9c7693f660cb0)
10. Adding a Logout Link: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/0a912cd59813270b92fb5a9bd6b89f5a71e16d19)
11. Forwarding Unauthenticated Users: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/9c7f59c8d90bb35c903253fd537cc92767fdc8d7)
12. Redirecting the User to the Checkout Page (In case the User is New and has Built a Burger w/o Login/Signup): [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/35c2a66977084175b1c9bd14b42f5158c56ee736)
13. Persistent `auth` State with `localStorage` && Fixing Routing Errors using `withRouter()` from `react-router`: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/c80a5e75710dd07156e264a8b058a3ff1c920d99)
14. Guarding Routes: [Commit Details](https://github.com/Ch-sriram/burger-builder/commit/575e1f0407059f55513181cf4a13beeadb8d9a7b)
15. Displaying User Specific Orders: [Commit Details]()
