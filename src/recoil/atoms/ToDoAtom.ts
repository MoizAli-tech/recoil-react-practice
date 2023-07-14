import { atom } from "recoil";

const ToDoAtom = atom<string>({
    key: "ToDoAtom",
    default: ""
})

export default ToDoAtom;