import React, { useContext, useEffect, useState } from "react";

const api = `http://www.omdbapi.com/?apikey=727bbdc1&s=titanic`;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const [isError, setISError] = useState({ show: "false", msg: "" })
    const getMovies = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            if (data.Response === "True") {
                setIsLoading(false);
                setMovie(data.Search);
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
        getMovies(api);

    }, [])
    return <AppContext.Provider value={{ movie, isLoading, isError }}>
        {children}
    </AppContext.Provider>
};

const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider, useGlobalContext }