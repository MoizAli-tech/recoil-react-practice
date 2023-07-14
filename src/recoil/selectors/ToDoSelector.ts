import { selector } from "recoil";
import ToDoAtom from "../atoms/ToDoAtom";

const ToDoSelector = selector<string>({
    key: "ToDoSelector",
    get: ({ get }) => {
        const newState = get(ToDoAtom);
        return newState.toUpperCase();
    }
})

export default ToDoSelector;