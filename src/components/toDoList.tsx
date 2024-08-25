// Simple tdo list

export interface thingToDo {
    status: boolean
    text: string
}


interface TodoProps {
    toDoAltTitle?: string
    thingsToDo: thingToDo[]
}

export const ToDo = (todoProps: TodoProps) => {
    return <>
        <div>
            <h3>{todoProps.toDoAltTitle ? todoProps.toDoAltTitle : "TODO:"}</h3>
            {todoProps.thingsToDo.map((thing, index) => (
                <div key={index} className="left-right-container">
                    <div className="left-text">{thing.text}</div>
                    <div className="right-text">{thing.status}</div>
                </div>
            ))}
        </div>
    </>
}