import { useCallback,useState } from "react";

export const useArray = initialArray => {
    const [value, setValue] = useState(initialArray);

    return {
        value, setValue,
        add: useCallback((item) => setValue((arr) => [...arr, item])),
        clear: useCallback(() => setValue(() => [])),
        removeByIndex: useCallback((index) => setValue((arr) => arr.filter((_,i) => i!==index))),
        updateAtIndex: useCallback((newItem,index) => setValue((arr) => arr.map((item,i) => i===index?newItem:item))),
    }
}