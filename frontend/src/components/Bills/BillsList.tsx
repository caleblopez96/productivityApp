import type { Bill } from "../../types/Bill";

export interface BillsListProps {
    bills: Bill[];
    onBillClick?: (bill: Bill) => void;
    onMarkPaid?: (billId: string) => void;
}

export function BillsList({ bills, onBillClick, onMarkPaid }: BillsListProps) {
    return (
        <ul>
            {bills.map((bill) => (
                <li key={bill.id} onClick={() => onBillClick && onBillClick(bill)}>
                    {bill.name}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onMarkPaid && onMarkPaid(bill.id);
                        }}
                    >
                        {" "}
                        Mark as Paid
                    </button>
                </li>
            ))}
        </ul>
    );
}
