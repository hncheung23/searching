import { Routes, Route, Link, useNavigate } from "react-router-dom";
import "./App.css";
import Authors from "./components/authors/authors";
import Books from "./components/books/books";
import BookDetail from "./components/book-detail/book-detail";
import Breadcrumbs from "./components/breadcrumbs/breadcrumbs";
import SearchBar from "./components/search-bar/search-bar";
import { makeStyles } from "@material-ui/core/styles";

function App() {
  const useStyles = makeStyles((theme) => ({
    root: {
      position: 'relative',
      height: '65vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    title: {
      textAlign: 'center',
    },
    container: {
      margin: '5vh',
    }
  }));

  const classes = useStyles();

  const welcomeText = "Try to start with typing somethings";
  const navigate = useNavigate();
  const renderWelcome = () => {
    return (
      <div className={classes.root}>
        <div><h1 className={classes.title}>{welcomeText}</h1></div>
      </div>
    );
  };
  return (
    <div className={classes.container}>
      <SearchBar navigate={navigate} />
      <Breadcrumbs navigate={navigate} />
      <Routes>
        <Route path="/" element={renderWelcome()} />
        <Route
          path="/authors/:searchingWords"
          element={<Authors navigate={navigate} />}
        />
        <Route
          path="/authors/:searchingWords/:authorsId/books"
          element={<Books navigate={navigate} />}
        />
        <Route
          path="/authors/:searchingWords/:authorsId/books/:bookId"
          element={<BookDetail />}
        />
        <Route path="*" element={renderWelcome()} />
      </Routes>
    </div>
  );
}

export default App;
