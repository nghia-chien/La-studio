import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../../lib/utils';

export interface CalendarProps {
  selected?: Date;
  onSelect?: (date: Date) => void;
  className?: string;
  minDate?: Date;
}

const MONTH_NAMES = [
  'Tháng 1',
  'Tháng 2',
  'Tháng 3',
  'Tháng 4',
  'Tháng 5',
  'Tháng 6',
  'Tháng 7',
  'Tháng 8',
  'Tháng 9',
  'Tháng 10',
  'Tháng 11',
  'Tháng 12',
];

const DAY_LABELS = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];

export const Calendar: React.FC<CalendarProps> = ({
  selected,
  onSelect,
  className,
  minDate = new Date(new Date().setHours(0, 0, 0, 0)),
}) => {
  const [currentMonth, setCurrentMonth] = useState<Date>(
    selected || new Date()
  );

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();

  // Get total days in month
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // First day of week index (Monday = 0, Sunday = 6)
  const firstDayOfWeek = (new Date(year, month, 1).getDay() + 6) % 7;

  // Previous month days to fill
  const prevMonthDays = new Date(year, month, 0).getDate();

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(year, month + 1, 1));
  };

  const isSameDay = (d1?: Date, d2?: Date) => {
    if (!d1 || !d2) return false;
    return (
      d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate()
    );
  };

  const isPast = (date: Date) => {
    if (!minDate) return false;
    const test = new Date(date);
    test.setHours(0, 0, 0, 0);
    return test < minDate;
  };

  return (
    <div className={cn('p-2 w-72 select-none', className)}>
      {/* Month Navigation Header */}
      <div className="flex items-center justify-between pb-3 px-1 border-b border-[#F5EFEB]">
        <span className="font-editorial text-base font-semibold text-[#221F1F]">
          {MONTH_NAMES[month]} {year}
        </span>
        <div className="flex items-center space-x-1">
          <button
            type="button"
            onClick={handlePrevMonth}
            className="p-1.5 rounded-lg hover:bg-[#FAEBED] text-[#78706E] hover:text-[#221F1F] transition-colors"
            aria-label="Tháng trước"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={handleNextMonth}
            className="p-1.5 rounded-lg hover:bg-[#FAEBED] text-[#78706E] hover:text-[#221F1F] transition-colors"
            aria-label="Tháng sau"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Weekday Labels */}
      <div className="grid grid-cols-7 gap-1 pt-3 pb-1 text-center">
        {DAY_LABELS.map((label) => (
          <span
            key={label}
            className="text-[11px] font-semibold text-[#968E8C] uppercase tracking-wider"
          >
            {label}
          </span>
        ))}
      </div>

      {/* Days Grid */}
      <div className="grid grid-cols-7 gap-1 pt-1">
        {/* Leading empty days from prev month */}
        {Array.from({ length: firstDayOfWeek }).map((_, i) => {
          const prevDay = prevMonthDays - firstDayOfWeek + i + 1;
          return (
            <div
              key={`prev-${i}`}
              className="h-8 flex items-center justify-center text-xs text-[#DCD0C2] pointer-events-none"
            >
              {prevDay}
            </div>
          );
        })}

        {/* Current month days */}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          const date = new Date(year, month, day);
          const isSelected = isSameDay(selected, date);
          const disabled = isPast(date);
          const isToday = isSameDay(new Date(), date);

          return (
            <button
              key={day}
              type="button"
              disabled={disabled}
              onClick={() => onSelect && onSelect(date)}
              className={cn(
                'h-8 w-8 mx-auto flex items-center justify-center text-xs rounded-full transition-all cursor-pointer font-medium',
                disabled && 'text-[#DCD0C2] cursor-not-allowed hover:bg-transparent',
                !disabled && !isSelected && 'text-[#221F1F] hover:bg-[#FAEBED] hover:text-[#CF9297]',
                isToday && !isSelected && 'border border-[#CF9297] text-[#CF9297] font-semibold',
                isSelected && 'bg-[#221F1F] text-white shadow-md font-semibold scale-105'
              )}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
};
