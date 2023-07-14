import React from 'react';
import ToDoAtom from '../recoil/atoms/ToDoAtom';
import ToDoListAtom from '../recoil/atoms/ToDoListAtom';
import ToDoSelector from '../recoil/selectors/ToDoSelector';
import { useRecoilState, useRecoilValue } from "recoil"
import { CiCircleCheck } from "react-icons/ci";


const ToDo = () => {
    let [todo, setToDo] = useRecoilState(ToDoAtom);
    let [todoList, setToDoList] = useRecoilState(ToDoListAtom);

    function addToListHandler(): void {
        if (todo != "") {
            setToDoList([...todoList, todo])
            setToDo("")
        }

    }

    function iconHandler(item: string) {
        let filteredList: string[] = todoList.filter((element) => {
            return element != item;
        })
        setToDoList(filteredList)
    }

    let recoilValue = useRecoilValue(ToDoSelector)
    return (
        <div className='p-4'>
            <h1 className='text-3xl mb-4'> Welcome to our ToDoApp </h1>
            {useRecoilValue(ToDoSelector) ?
                <p className={"whitespace-normal w-1/2 "}>Your Value In Upper Case is {recoilValue}</p> :
                <p></p>
            }

            <input
                className={"outline-none border-2 border-teal-500 mt-2 mr-4 p-1"}
                type="text"
                value={todo}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setToDo(e.target.value)} />
            <button
                className={"bg-teal-500 text-white p-2 rounded hover:scale-125 hover:bg-teal-300"}
                onClick={addToListHandler}> Add To List</button>

            <div>
                {todoList.map((item: string) => {
                    return (
                        <div className={"flex my-4 justify-between   w-fit"}>
                            <li>{item}</li>
                            <CiCircleCheck onClick={() => iconHandler(item)} className="icon ml-4 mt-1 text-teal-700 text-lg font-bold hover:scale-125 " />
                        </div>

                    )
                })}
            </div>

        </div>
    )
}

export default ToDo