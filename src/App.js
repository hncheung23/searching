import { Routes, Route, Link, useNavigate, useParams } from "react-router-dom";
import "./App.css";
import Authors from "./components/authors/authors";
import Books from "./components/books/books";
import BookDetail from "./components/book-detail/book-detail";
import Breadcrumbs from "./components/breadcrumbs/breadcrumbs";
import SearchBar from "./components/search-bar/search-bar";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";

function App() {
  const useStyles = makeStyles((theme) => ({
    root: {
      position: "relative",
      height: "65vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    title: {
      textAlign: "center",
    },
    container: {
      margin: "5vh",
    },
  }));

  const classes = useStyles();

  const welcomeText = "Try to start with typing somethings";
  const navigate = useNavigate();

  const [searchingWords, setSearchingWords] = useState("");
  const [author, setAuthor] = useState("");

  const reset = () => {
    setAuthor("");
  };
  
  const renderWelcome = () => {
    return (
      <div className={classes.root}>
        <div>
          <h1 className={classes.title}>{welcomeText}</h1>
        </div>
      </div>
    );
  };

  const ROUTES = [
    { path: "/", Component: renderWelcome() },
    {
      path: "authors/:searchingWords",
      Component: <Authors navigate={navigate} setAuthor={setAuthor} />,
    },
    {
      path: "/authors/:searchingWords/:authorsId/books",
      Component: <Books navigate={navigate} />,
    },
    {
      path: "/authors/:searchingWords/:authorsId/books/:bookId",
      Component: <BookDetail />,
    },
  ];
  return (
    <div className={classes.container}>
      <SearchBar
        navigate={navigate}
        reset={reset}
        setSearchingWords={setSearchingWords}
      />
      <Breadcrumbs navigate={navigate} />
      <div>{`Search term: ${searchingWords}`}</div>
      <div>{`Author: ${author}`}</div>
      <Routes>
        {ROUTES.map(({ path, Component }, key) => (
          <Route key={key} path={path} element={Component}/>
        ))}
      </Routes>
    </div>
  );
}

export default App;
