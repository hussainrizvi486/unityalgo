import React, { useState } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  addMonths,
  subMonths,
  isSameMonth,
  isSameDay,
} from "date-fns";
import { Calendar as CalendarIcon, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

interface DatePickerProps {
  value?: Date;
  onChange?: (date: Date) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({ value, onChange }) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(value);
  const [currentMonth, setCurrentMonth] = useState<Date>(value || new Date());
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectDate = (day: Date) => {
    setSelectedDate(day);
    onChange?.(day);
    setIsOpen(false);
  };

  const renderHeader = () => {
    return (
      <div className="flex items-center justify-between px-2 py-2">
        <button
          type="button"
          onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
          className="p-1 hover:bg-gray-100 rounded-md"
        >
          <ChevronLeft size={16} />
        </button>
        <div className="flex items-center gap-2">
          <select
            value={currentMonth.getMonth()}
            onChange={(e) =>
              setCurrentMonth(
                new Date(currentMonth.getFullYear(), Number(e.target.value), 1)
              )
            }
            className="rounded border border-gray-300 text-sm"
          >
            {Array.from({ length: 12 }).map((_, idx) => (
              <option key={idx} value={idx}>
                {format(new Date(0, idx), "MMMM")}
              </option>
            ))}
          </select>
          <select
            value={currentMonth.getFullYear()}
            onChange={(e) =>
              setCurrentMonth(
                new Date(Number(e.target.value), currentMonth.getMonth(), 1)
              )
            }
            className="rounded border border-gray-300 text-sm"
          >
            {Array.from({ length: 50 }).map((_, idx) => {
              const year = 1980 + idx;
              return (
                <option key={year} value={year}>
                  {year}
                </option>
              );
            })}
          </select>
        </div>
        <button
          type="button"
          onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
          className="p-1 hover:bg-gray-100 rounded-md"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    );
  };

  const renderDays = () => {
    const days = [];
    const startDate = startOfWeek(startOfMonth(currentMonth), { weekStartsOn: 0 });
    const endDate = endOfWeek(endOfMonth(currentMonth), { weekStartsOn: 0 });
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const currentDay = day;
        const isToday = isSameDay(currentDay, new Date());
        const isSelected = selectedDate && isSameDay(currentDay, selectedDate);
        const isOutsideMonth = !isSameMonth(currentDay, currentMonth);

        days.push(
          <div
            key={day.toISOString()}
            className={`p-1 text-center text-sm rounded-md cursor-pointer
              ${isOutsideMonth ? "text-gray-400" : ""}
              ${isToday && !isSelected ? "border border-blue-400" : ""}
              ${isSelected ? "bg-blue-500 text-white hover:bg-blue-600" : "hover:bg-gray-100"}
            `}
            onClick={() => handleSelectDate(currentDay)}
          >
            {format(currentDay, "d")}
          </div>
        );
        day = addDays(day, 1);
      }
    }

    return <div className="grid grid-cols-7 gap-1">{days}</div>;
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-64 flex items-center justify-between border rounded-md px-3 py-2 text-left text-sm bg-white hover:bg-gray-50"
      >
        <span className="flex items-center gap-2">
          <CalendarIcon size={16} />
          {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
        </span>
        <ChevronDown size={16} />
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-72 bg-white border rounded-lg shadow-lg z-50 p-3">
          {renderHeader()}
          <div className="grid grid-cols-7 gap-1 text-xs text-center text-gray-500 mb-1">
            {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
              <div key={day}>{day}</div>
            ))}
          </div>
          {renderDays()}
        </div>
      )}
    </div>
  );
};

export default DatePicker;
