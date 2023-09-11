import React, { useContext, useEffect, useState } from "react";

export const api = `http://www.omdbapi.com/?apikey=da979bab`;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const [isError, setISError] = useState({ show: "false", msg: "" });
    const [query,setQuery]= useState();
    const getMovies = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            if (data.Response === "True") {
                setIsLoading(false);
                setMovie(data.Search);
                console.log(data);
            }
            else {
                setISError({
                    show: true,
                    msg: data.error,
                })
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getMovies(`${api}&s=${query}`);

    }, [query]); 
    return <AppContext.Provider value={{ movie, isLoading, isError ,query, setQuery,setMovie}}>
        {children}
    </AppContext.Provider>
};

const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider, useGlobalContext };