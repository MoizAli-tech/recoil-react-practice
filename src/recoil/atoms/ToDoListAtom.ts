import { atom } from "recoil";

const ToDoListAtom = atom<string[] | []>({
    key: "ToDoListAtom",
    default: []
})

export default ToDoListAtom;