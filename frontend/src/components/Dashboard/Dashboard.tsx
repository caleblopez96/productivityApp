import { useState, useEffect } from "react";
import { Plus, Check, X, Calendar, Clock, TrendingUp, User, Settings, Home, Bell } from "lucide-react";

export const ProductivityApp = () => {
    const [tasks, setTasks] = useState([
        { id: 1, text: "Feed my cat", time: "14:00 - 18:00", completed: false, category: "personal" },
        { id: 2, text: "Take cat to friends", time: "14:00 - 18:00", completed: false, category: "personal" },
        { id: 3, text: "Feed my cat's friends", time: "14:00 - 18:00", completed: false, category: "personal" },
        { id: 4, text: "Meet with cat's lawyer", time: "9:00 - 12:00", completed: false, category: "work" },
    ]);

    const [newTask, setNewTask] = useState("");
    const [stats, setStats] = useState({
        daysSpent: 567,
        hoursWasted: 2515,
        yearsNotSpent: 1.5,
    });

    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const addTask = () => {
        if (newTask.trim()) {
            setTasks([
                ...tasks,
                {
                    id: Date.now(),
                    text: newTask,
                    time: "09:00 - 17:00",
                    completed: false,
                    category: "personal",
                },
            ]);
            setNewTask("");
        }
    };

    const toggleTask = (id: number) => {
        setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
    };

    const deleteTask = (id: number) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Sidebar */}
                <div className="space-y-6">
                    {/* Navigation */}
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                                <User className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-800">Happy Thursday,</h3>
                                <h3 className="font-bold text-gray-900 text-lg">John!</h3>
                            </div>
                        </div>

                        <nav className="space-y-3">
                            {[
                                { icon: Home, label: "Home", active: true },
                                { icon: Calendar, label: "Calendar", active: false },
                                { icon: TrendingUp, label: "Analytics", active: false },
                                { icon: Settings, label: "Settings", active: false },
                            ].map(({ icon: Icon, label, active }) => (
                                <button
                                    key={label}
                                    className={`w-full flex items-center space-x-3 p-3 rounded-xl transition-all duration-300 ${
                                        active
                                            ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg"
                                            : "text-gray-600 hover:bg-gray-100"
                                    }`}
                                >
                                    <Icon className="w-5 h-5" />
                                    <span className="font-medium">{label}</span>
                                </button>
                            ))}
                        </nav>
                    </div>

                    {/* Task Notification */}
                    <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-2xl p-4 border-l-4 border-orange-400">
                        <div className="flex items-center space-x-3">
                            <Bell className="w-5 h-5 text-orange-600" />
                            <div>
                                <p className="text-sm text-orange-800">
                                    You have <span className="font-bold">2 tasks</span>
                                </p>
                                <p className="text-sm text-orange-700">scheduled for today.</p>
                            </div>
                        </div>
                    </div>

                    {/* Today's Tasks */}
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                        <h3 className="font-bold text-gray-900 mb-4">Today</h3>
                        <div className="space-y-3">
                            {tasks.slice(0, 2).map((task) => (
                                <div
                                    key={task.id}
                                    className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                                        task.completed ? "bg-green-50 border-green-200" : "bg-purple-50 border-purple-200 hover:shadow-md"
                                    }`}
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <button
                                            onClick={() => toggleTask(task.id)}
                                            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                                                task.completed
                                                    ? "bg-green-500 border-green-500"
                                                    : "border-purple-300 hover:border-purple-500"
                                            }`}
                                        >
                                            {task.completed && <Check className="w-4 h-4 text-white" />}
                                        </button>
                                        <button
                                            onClick={() => deleteTask(task.id)}
                                            className="text-gray-400 hover:text-red-500 transition-colors"
                                        >
                                            <X className="w-4 h-4" />
                                        </button>
                                    </div>
                                    <h4 className={`font-medium ${task.completed ? "text-gray-500 line-through" : "text-gray-800"}`}>
                                        {task.text}
                                    </h4>
                                    <p className="text-sm text-gray-500 flex items-center mt-1">
                                        <Clock className="w-3 h-3 mr-1" />
                                        {task.time}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Upcoming Tasks */}
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                        <h3 className="font-bold text-gray-900 mb-4">30 January</h3>
                        <div className="space-y-3">
                            {tasks.slice(2).map((task) => (
                                <div
                                    key={task.id}
                                    className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                                        task.completed
                                            ? "bg-green-50 border-green-200"
                                            : task.category === "work"
                                            ? "bg-green-50 border-green-200 hover:shadow-md"
                                            : "bg-purple-50 border-purple-200 hover:shadow-md"
                                    }`}
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <button
                                            onClick={() => toggleTask(task.id)}
                                            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                                                task.completed
                                                    ? "bg-green-500 border-green-500"
                                                    : task.category === "work"
                                                    ? "border-green-300 hover:border-green-500"
                                                    : "border-purple-300 hover:border-purple-500"
                                            }`}
                                        >
                                            {task.completed && <Check className="w-4 h-4 text-white" />}
                                        </button>
                                        <button
                                            onClick={() => deleteTask(task.id)}
                                            className="text-gray-400 hover:text-red-500 transition-colors"
                                        >
                                            <X className="w-4 h-4" />
                                        </button>
                                    </div>
                                    <h4 className={`font-medium ${task.completed ? "text-gray-500 line-through" : "text-gray-800"}`}>
                                        {task.text}
                                    </h4>
                                    <p className="text-sm text-gray-500 flex items-center mt-1">
                                        <Clock className="w-3 h-3 mr-1" />
                                        {task.time}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Add Task Button */}
                    <div className="bg-white rounded-2xl p-4 shadow-lg">
                        <div className="flex space-x-2">
                            <input
                                type="text"
                                value={newTask}
                                onChange={(e) => setNewTask(e.target.value)}
                                onKeyPress={(e) => e.key === "Enter" && addTask()}
                                placeholder="Add a new task..."
                                className="flex-1 p-3 border-2 border-gray-200 rounded-xl focus:border-purple-400 focus:outline-none transition-colors"
                            />
                            <button
                                onClick={addTask}
                                className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-3 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
                            >
                                <Plus className="w-5 h-5" />
                                <span className="hidden sm:inline font-medium">Add Task</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Weather Header */}
                    <div className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 rounded-3xl p-8 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-20 rounded-full -mr-16 -mt-16"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full -ml-12 -mb-12"></div>

                        <div className="flex justify-between items-start">
                            <div>
                                <h1 className="text-4xl font-bold mb-2">New York</h1>
                                <p className="text-lg opacity-90">3rd, thu</p>
                            </div>
                            <div className="text-right">
                                <div className="flex items-center space-x-2 mb-2">
                                    <span className="text-sm opacity-75">Yesterday</span>
                                </div>
                                <div className="text-6xl font-light mb-2">+25°</div>
                                <p className="opacity-90">partially cloudy</p>
                                <div className="mt-4 space-y-1 text-sm">
                                    <div className="flex items-center space-x-2">
                                        <span className="opacity-75">Today</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <span className="opacity-75">Tomorrow</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute top-1/2 right-1/4 transform -translate-y-1/2">
                            <div className="w-20 h-20 bg-white opacity-90 rounded-full flex items-center justify-center">
                                <div className="w-16 h-16 bg-yellow-300 rounded-full"></div>
                            </div>
                        </div>
                    </div>

                    {/* Statistics */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white rounded-2xl p-6 shadow-lg">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-3xl font-bold text-orange-500">567</h3>
                                <TrendingUp className="w-8 h-8 text-orange-500" />
                            </div>
                            <p className="text-gray-600">days spent</p>
                            <p className="text-gray-500 text-sm">with cat</p>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-lg">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-3xl font-bold text-pink-500">2515</h3>
                                <Clock className="w-8 h-8 text-pink-500" />
                            </div>
                            <p className="text-gray-600">hours of life</p>
                            <p className="text-gray-500 text-sm">wasted</p>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-lg">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-3xl font-bold text-purple-500">1.5</h3>
                                <User className="w-8 h-8 text-purple-500" />
                            </div>
                            <p className="text-gray-600">years not spent</p>
                            <p className="text-gray-500 text-sm">with humans</p>
                        </div>
                    </div>

                    {/* Chart Placeholder */}
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                        <h3 className="font-bold text-gray-900 mb-6">Activity Overview</h3>
                        <div className="h-64 bg-gradient-to-r from-orange-100 to-orange-200 rounded-xl flex items-center justify-center relative overflow-hidden">
                            <svg className="w-full h-full" viewBox="0 0 400 200">
                                <path
                                    d="M 50 150 Q 100 100 150 120 T 250 100 T 350 110"
                                    stroke="#f97316"
                                    strokeWidth="3"
                                    fill="none"
                                    className="animate-pulse"
                                />
                                <circle cx="350" cy="110" r="4" fill="#f97316" className="animate-bounce" />
                            </svg>
                            <div className="absolute bottom-4 left-6 text-orange-600 font-semibold">Productivity Trend</div>
                        </div>
                    </div>

                    {/* Events and News */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-2xl p-6 shadow-lg">
                            <h3 className="font-bold text-gray-900 mb-4">Events</h3>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-xl">
                                    <div className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                                    <div>
                                        <h4 className="font-medium text-gray-800">My cat Sir inauguration with Queen Elisabeth</h4>
                                        <p className="text-sm text-gray-500 mt-1">St. Joseph, 13 London</p>
                                        <p className="text-sm text-blue-600 mt-2">15 Dec at 8:30 PM</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4 p-4 bg-yellow-50 rounded-xl">
                                    <div className="w-3 h-3 bg-yellow-500 rounded-full mt-2"></div>
                                    <div>
                                        <h4 className="font-medium text-gray-800">Ball trip for my cat's friends</h4>
                                        <p className="text-sm text-gray-500 mt-1">Upcoming event</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-lg">
                            <h3 className="font-bold text-gray-900 mb-4">News</h3>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex-shrink-0"></div>
                                    <div>
                                        <h4 className="font-medium text-gray-800 mb-1">TV presenters in face masks</h4>
                                        <p className="text-sm text-gray-600">
                                            Face masks have become the dominant image associated with the city of Wuhan...
                                        </p>
                                        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mt-2">
                                            Social
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                                    <div className="w-12 h-12 bg-green-500 rounded-lg flex-shrink-0"></div>
                                    <div>
                                        <h4 className="font-medium text-gray-800 mb-1">
                                            Carbon-neutral in 15 years - one country's ambitious plan
                                        </h4>
                                        <p className="text-sm text-gray-600">An exciting environmental initiative...</p>
                                        <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded mt-2">
                                            Politics
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Calendar Widget */}
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="font-bold text-gray-900">February</h3>
                            <div className="flex space-x-2">
                                <button className="p-2 hover:bg-gray-100 rounded-lg">‹</button>
                                <button className="p-2 hover:bg-gray-100 rounded-lg">›</button>
                            </div>
                        </div>
                        <div className="grid grid-cols-7 gap-2">
                            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                                <div key={day} className="text-center text-sm text-gray-500 p-2 font-medium">
                                    {day}
                                </div>
                            ))}
                            {Array.from({ length: 35 }, (_, i) => {
                                const day = i - 2; // Adjust for month start
                                const isToday = day === 3;
                                const hasEvent = [1, 6, 7].includes(day);

                                if (day < 1 || day > 28) {
                                    return <div key={i} className="p-2"></div>;
                                }

                                return (
                                    <div
                                        key={i}
                                        className={`p-2 text-center text-sm rounded-lg cursor-pointer transition-all ${
                                            isToday
                                                ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg"
                                                : hasEvent
                                                ? "bg-blue-100 text-blue-800 hover:bg-blue-200"
                                                : "hover:bg-gray-100 text-gray-700"
                                        }`}
                                    >
                                        {day}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductivityApp;
