import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../loading/loading";
import { useParams } from "react-router-dom";
import Card from "../card/card";
import { bookDetailApiPath as URL_PATH } from "../../api";

export default function Books({ navigate }) {
  const p = useParams();
  const [results, setResults] = useState(null);

  useEffect(() => {
    const path = URL_PATH.replace("{id}", p.bookId);
    axios.get(path).then((response) => {
      setResults(response.data);
    });
  }, []);

  if (!p || !p.bookId) return null;

  return results ? (
    results.key ? (
      <Card data={results} />
    ) : (
      <div>No detail are found.</div>
    )
  ) : (
    <Loading />
  );
}
