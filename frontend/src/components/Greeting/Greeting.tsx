import man from "../../assets/man.jpg";

interface GreetingProps {
    name: string;
}

function getDayOfWeek() {
    const date = new Date();
    const dayIndex = date.getDay(); // 0 = Sunday, 1 = Monday, ...
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayName = dayNames[dayIndex];
    return dayName;
}

export function Greeting({ name }: GreetingProps) {
    const dayOfTheWeek = getDayOfWeek();
    return (
        <div className="flex gap-4 items-center">
            <img src={man} alt="Greeting" className="h-[64px] w-[64px] rounded-full" />
            <h2 className="text-left text-purple-600 font-normal">
                Happy {dayOfTheWeek}, <span className="font-semibold">{name}</span>!
            </h2>
        </div>
    );
}
