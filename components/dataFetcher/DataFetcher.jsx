"use client";
import { useState, useEffect } from "react";
import { getPeople } from "@/sevices/starWaraServices";

export const DataFetcher = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await getPeople();
      setData(response);
    } catch (e) {
      console.log(e.message ?? "something bad");
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {data.length > 0 ? (
        <ul>
          {data.map((person, index) => (
            <li key={index}>
              <p><b>Name of the Person:---</b>{person.name}</p>
              <p><b>Gender:---</b>{person.gender}</p>
            <p><b>Height:---</b>{person.height}</p>
             <p>Birth Year:---{person.birth_year}</p>
            <p>HAir Color:---{person.hair_color}</p>
           
            
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
