import { createContext } from "react";

export const DataContext = createContext({
    cardData: {},
})


const Context = ({children}) => {
    // const titles = ['MackBook', 'Asus Zen Book', 'Acer', 'Lenovo'];
    // const bodies = [`This has apple's best chipset`, `Asus Zen Book has Intel's Latest Processor`, `Acer Has Ryzen's Latest Processor `, 'Lenovo Has Latest AI Features.'];

    const cardData = [{title: 'MackBook', body: `This has apple's best chipset`},]


    return <DataContext.Provider value={{cardData}} > {children} </DataContext.Provider>
};


export default Context;