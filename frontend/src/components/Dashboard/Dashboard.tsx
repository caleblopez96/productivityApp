import { useState } from "react";
import type { Bill } from "../../types/Bill";
import { BillsList } from "../Bills/BillsList";

export function Dashboard() {
    const [bills, setBills] = useState<Bill[]>([
        { id: "1", name: "Rent", amount: 1200, dueDate: "2025-09-06", isPaid: false },
        { id: "2", name: "Electricity", amount: 150, dueDate: "2025-09-10", isPaid: false },
    ]);

    return (
        <div className="grid grid-cols-2 grid-rows-2 gap-4 p-4">
            <div className="border p-2">
                <h2 className="font-bold mb-2">Bills</h2>
                <BillsList bills={bills} />
            </div>

            <div className="border p-2">
                <h2 className="font-bold mb-2">Homework</h2>
                <div>Homework List Placeholder</div>
            </div>

            <div className="border p-2">
                <h2 className="font-bold mb-2">Schedule</h2>
                <div>Schedule List Placeholder</div>
            </div>

            <div className="border p-2">
                <h2 className="font-bold mb-2">Reminders</h2>
                <div>Reminder List Placeholder</div>
            </div>
        </div>
    );
}
