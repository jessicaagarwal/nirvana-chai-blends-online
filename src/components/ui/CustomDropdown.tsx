import React from 'react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from './dropdown-menu';
import { ChevronDown } from 'lucide-react';

interface Option {
  value: string;
  label: string;
}

interface CustomDropdownProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({ options, value, onChange, placeholder, className }) => {
  const selected = options.find(o => o.value === value);
  return (
    <div className="relative w-full">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            className={`flex items-center justify-between w-full rounded-2xl border border-cream bg-cream px-4 py-1 font-medium text-forest-green shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-saffron-orange/40 ${className}`}
          >
            <span className="text-forest-green text-base font-semibold">{selected ? selected.label : placeholder}</span>
            <ChevronDown className="ml-2 h-5 w-5 text-saffron-orange" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" side="bottom" sideOffset={0} className="w-full min-w-0 bg-white rounded-xl shadow-xl border border-cream mt-2 p-1 z-50">
          {options.map(opt => (
            <DropdownMenuItem
              key={opt.value}
              onSelect={() => onChange(opt.value)}
              className={`rounded-lg px-4 py-2 font-medium text-forest-green text-[15px] cursor-pointer transition-colors
                ${opt.value === value ? 'bg-saffron-orange/20 text-forest-green' : 'hover:bg-saffron-orange/10 hover:text-saffron-orange'}
                focus:bg-saffron-orange/30 focus:text-forest-green
              `}
              style={{ outline: 'none' }}
            >
              {opt.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default CustomDropdown; 