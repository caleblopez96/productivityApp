import { Task } from "./Task/Task";

export function TaskComp() {
    return (
        <div>
            <h2 className="text-red-500">Today</h2>
            <div>
                <Task className="bg-red-500" description="testing description" time="testing time" />
            </div>
            <div>
                <Task className="bg-green-500" description="testing description" time="testing time" />
            </div>
        </div>
    );
}
