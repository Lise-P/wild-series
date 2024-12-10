import { useEffect, useState } from "react";

const ProgramPage = () => {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3310/api/programs")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch programs");
        }
        return response.json();
      })
      .then((data) => {
        setPrograms(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching programs:", error);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>Liste séries</h1>
      <ul>
        {programs.map((program) => (
          <li key={program.id}>
            <h2>{program.title}</h2>
            <p>{program.synopsis}</p>
            <img src={program.poster} alt="{program.title}" />
            <p>{program.country}</p>
            <p>{program.year}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProgramPage;
