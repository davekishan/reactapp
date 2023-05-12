import './App.css';
import Header from "./mycomponent/header";
import { Footer } from "./mycomponent/footer";
import { Todos } from "./mycomponent/todos";
import { useEffect, useState } from "react";
import { Addtodo } from "./mycomponent/addtodo";
import { Calculator } from "./mycomponent/calculator/calculator";
import {
  BrowserRouter,
  Route,
  useParams,
  Routes,
  redirect,
} from "react-router-dom";
import { Edit } from './mycomponent/edit';
import { Recipesearch } from './mycomponent/recipe/recipesearch';
import { Displayrecipe } from './mycomponent/recipe/displayrecipe';
import { Searchdownload } from './mycomponent/downloader/searchdownload';
import { Instadownloader } from './mycomponent/instagram/instadownloader';


function App() {
  const params = useParams();


  let inittodo = JSON.parse(localStorage.getItem("todos")) || [];
  const onDelete = (todo) => {

    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
  }

  const add = (title, desc) => {
    console.log("Im adding : ", title, desc)
    let sno;

    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    console.log("Sno is ", sno)

    const todoadd = {
      sno: sno,
      title: title,
      desc: desc
    }

    setTodos([...todos, todoadd]);
    alert("Data Added Successfully")
    console.log(todoadd)

  }

  const [todos, setTodos] = useState(inittodo)

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);



  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Addtodo add={add} />
            <Todos todos={todos} onDelete={onDelete} />
          </>} />

        <Route path="/edit/:sno" element={
          <>
            <Edit todos={todos} sno={params.sno} />

          </>} />


        <Route path="/calculator" element={
          <>
            <Calculator />

          </>} />

        <Route path="/recipe" element={
          <Recipesearch />

        } />

        <Route path="/downloader" element={
          <Searchdownload />

        } />

        <Route path="/instagram" element={
          <Instadownloader />

        } />


      </Routes>
      <Footer />
    </BrowserRouter>


  );
}

export default App;
