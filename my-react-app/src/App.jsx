/*
React components are functions that return JSX. 
The function name should start with a capital letter. 
The function name should be the same as the file name. 
The function should return a single JSX element. 
The function should be exported at the end of the file.
*/
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import ButtonExternalStyle from './ButtonExternalStyle.jsx'
import ButtonModuleStyle from './Button/ButtonModuleStyle.jsx'
import ButtonInlineStyle from './ButtonInlineStyle.jsx'
import Student from './Student.jsx'
import UserGreeting from './UserGreeting.jsx'
import FruitsList from './FruitsList.jsx'
import PropsFoodList from './PropsFoodList.jsx'
import ButtonClickHandling from './ButtonClickHandling.jsx'
import MyHookComponent from './MyHookComponent.jsx'
import MyOnChangeComponent from './MyOnChangeComponent.jsx'
import StockMarketCard from './StockMarketCard.jsx'
import MyObjectUpdateComponent from './MyObjectUpdateComponent.jsx'
import MyArrayUpdateComponent from './MyArrayUpdateComponent.jsx'
import ComponentA from './ComponentA.jsx'
import MyUseRefComponent from './MyUseRefComponent.jsx'

function App() {
  //List to pass to our PropsFoodList component
  const fruits = [{id: 1, name: "Apple", calories: 95},
                  {id: 2, name: "Banana", calories: 105},
                  {id: 3, name: "Cherry", calories: 5},
                  {id: 4, name: "Date", calories: 20},
                  {id: 5, name: "Elderberry", calories: 73},
                  {id: 6, name: "Fig", calories: 107},
  ]

  return (
    //Only a single JSX element can be returned from a component
    //So we wrap everything in a fragment
    <>  
      <Header/> {/*same as <Header></Header>*/}

      <Food/>

      <Card/>

      <br /> 

      {/*styling can be done in 3 ways: external, module, inline*/}
      <ButtonExternalStyle/>
      <br /> 
      <ButtonModuleStyle/>
      <br />
      <ButtonInlineStyle/>
      <br />

      {/*props are passed to components as attributes*/}
      <Student name="Spongebob" age={20} isStudent={true}/>

      {/*defaultProps are used to set default values to props*/}
      <Student/>

      {/*conditional rendering of components*/}
      <UserGreeting isLoggedIn = {true} username="Spongebob"/>
      <UserGreeting isLoggedIn = {false} username="Spongebob"/>

      {/*render arrays as lists*/}
      <FruitsList/>
      {/*render arrays as lists using props, fruits is declared higher up*/}
      <PropsFoodList items = {fruits} category = "Fruits"/>
      
      {/*click event handling*/}
      <ButtonClickHandling/>

      {/*reach hooks*/}
      {/*hooks are functions that let you use state and other React features in function components without writing class components*/}
      {/*useState is a hook that lets you add state to your function components*/}
      {/* other examples of hooks are: useEffect, useContext, useReducer, useRef, useMemo, useCallback, useImperativeHandle, useLayoutEffect, useDebugValue*/}
      <MyHookComponent/>

      {/*onChange event handling*/}
      {/*onChange is an event handler that is called when the input value changes*/}
      {/*examples include: input, textarea, select, checkbox, radio, file*/}
      <MyOnChangeComponent/>

      {/*updater function*/}
      {/*The updater function is a function that takes the previous state as an argument and returns the new state*/}
      {/*The updater function is used to update state based on the previous state*/}
      {/*The updater function is necessary because REACT batches together state updates for performance reasons*/}

      {/*Personal project*/}
      <StockMarketCard/>

      {/*updating object state*/}
      <MyObjectUpdateComponent/>

      {/*updating array state*/}
      <MyArrayUpdateComponent/>

      {/*context*/}
      {/*Context provides a way to pass data through the component tree without having to pass props down manually at every level*/}
      {/*Context is designed to share data that can be considered “global” for a tree of React components*/}
      {/*Context is primarily used when some data needs to be accessible by many components at different nesting levels*/}
      {/*Better than props because it avoids passing props through intermediate elements*/}
      {/* provider and consumer are the two main components of context*/}
      {/*provider is used to provide the data to the components that need it*/}
      {/*consumer is used to consume the data provided by the provider*/}
      {/*contextType is a property on a class component that can be assigned a context object created by React.createContext()*/}
      {/*useContext is a hook that accepts a context object and returns the current context value for that context*/}
      <ComponentA/>

      {/*useRef*/}
      {/*useRef does not cause a component to re-render when the value of the ref changes*/}
      <MyUseRefComponent/>




      <Footer/> {/*same as <Footer></Footer>*/}
    </>
  )   
}
export default App
