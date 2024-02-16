import { useState, useEffect } from "react";
import getProjects from "../api/get-projects";

export default function useProjects() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState();
  const [isloading, setisLoading] = useState(true);

  useEffect(() => {
    getProjects()
      .then((projects) => {
        setProjects(projects);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setisLoading(false);
      });
  }, []);

  return { projects, error, isloading };
}