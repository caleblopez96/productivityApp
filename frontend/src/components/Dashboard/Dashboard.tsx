import { Nav } from "../Nav/Nav";
import { Greeting } from "../Greeting/Greeting";
import { TaskNotification } from "../TaskNotification/TaskNotification";

export function Dashboard() {
    return (
        <div className="grid grid-cols-[30%_70%] gap-2 bg-gray-100 rounded-4xl box-border h-full w-full overflow-hidden">
            {/* Column 1 */}
            <div className="grid grid-cols-1 grid-rows-6 bg-white p-12 rounded-4xl overflow-hidden">
                <Nav />
                <Greeting name="Caleb" />
                <TaskNotification tasks="5" />

                {/* Spacer to push content up naturally */}
                <div className="flex-1"></div>

                <div className="text-sm text-gray-600 p-2">Column 1 - Widget 2</div>
            </div>

            {/* Column 2 */}
            <div className="grid grid-cols-3 grid-rows-3 gap-2 border-2 border-green-500 p-10 box-border overflow-hidden">
                {/* Row 1: */}
                <div className="col-span-3 border border-yellow-500 flex items-center justify-center text-sm">weather widget</div>

                {/* Row 2:*/}
                <div className="col-span-2 border border-purple-500 flex items-center justify-center text-sm">chart</div>
                <div className="col-span-1 border border-pink-500 flex items-center justify-center text-sm">clock</div>

                {/* Row 3:*/}
                <div className="border border-orange-500 flex items-center justify-center text-sm">events</div>
                <div className="border border-blue-500 flex items-center justify-center text-sm">news</div>
                <div className="border border-teal-500 flex items-center justify-center text-sm">weather</div>
            </div>
        </div>
    );
}
