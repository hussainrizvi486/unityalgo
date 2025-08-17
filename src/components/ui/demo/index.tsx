import React, { useState } from "react";

const Tooltip = React.lazy(() => import("../tooltip"));
const DatePicker = React.lazy(() => import("../date-picker"));

const Index = () => {
    const [date, setDate] = useState<Date>();

    return (
        <div className="mx-auto max-w-7xl p-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex justify-center items-center bg-gray-50 rounded-md border border-gray-100 shadow-sm">
                    <Tooltip text="Please Contact us! when you click me i am deliver your message to my sir">
                        <button className="text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-md py-2 px-6 cursor-pointer">
                            Hover Me
                        </button>
                    </Tooltip>
                </div>

                <div className="flex flex-col justify-center items-center bg-gray-50 rounded-md border border-gray-100 shadow-sm p-10">
                    <DatePicker value={date} onChange={(d) => setDate(d)} />
                    {date && <p className="mt-2">Selected date: {date.toDateString()}</p>}
                </div>
            </div>
        </div>
    );
};

export default Index;
