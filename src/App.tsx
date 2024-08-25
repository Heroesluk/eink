import './App.css'
import {Memo} from "./components/memo.tsx";
import {thingToDo, ToDo} from "./components/toDoList.tsx";
import {Weather} from "./components/weather.tsx";

function App() {

    const things: thingToDo[] = [
        {status: true, text: "Make dinner"},
        {status: false, text: "Run 5 km"},
        {status: false, text: "Wash yourself"},
        {status: false, text: "o to sleep"}]

    return (
        <>
            <div>
                <Memo memoText="Lukasz remember to take out the trash" memoTitle="Some title"></Memo>
                <ToDo thingsToDo={things}></ToDo>
                <Weather description={"Mostly cloudy"} location={"Lodz Poland"} precipationChance={5} humidity={50}
                         image={""} temperature={22} wind={10}></Weather>
            </div>
        </>
    )
}

export default App
