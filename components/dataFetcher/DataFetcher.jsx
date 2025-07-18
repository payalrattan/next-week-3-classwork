"use client";
import { useState, useEffect } from "react";
import { getPeople } from "@/services/starWarServices";
import styles from "@/app/page.module.css"; 

export const DataFetcher = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await getPeople();
      setData(response);
    } catch (e) {
      console.log(e.message ?? "something went wrong");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {data.length > 0 ? (
        <div>
          {data.map((person, index) => (
            <div key={index} className={styles.personCard}>
              <strong>Name:</strong> {person.name} <br />
              <strong>Height:</strong> {person.height} <br />
              <strong>Mass:</strong> {person.mass} <br />
              <strong>Gender:</strong> {person.gender} <br />
              <strong>Birth Year:</strong> {person.birth_year}
            </div>
          ))}
        </div>
      ) : (
        <p>Fetching People Details...</p>
      )}
    </div>
  );
};
