
import React, { useState } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const LanguageCurrencySelector = () => {
  const [language, setLanguage] = useState('EN');
  const [currency, setCurrency] = useState('₸');

  const languages = [
    { code: 'EN', name: 'English' },
    { code: 'RU', name: 'Русский' },
    { code: 'KZ', name: 'Қазақша' },
  ];

  const currencies = [
    { symbol: '₸', name: 'Kazakhstani Tenge' },
    { symbol: '₽', name: 'Russian Ruble' },
    { symbol: '$', name: 'US Dollar' },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center space-x-1">
          <Globe className="h-4 w-4" />
          <span className="text-xs">{language} | {currency}</span>
          <ChevronDown className="h-3 w-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48 bg-white">
        <div className="p-2 text-xs font-medium text-gray-500 uppercase">Language</div>
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`cursor-pointer ${language === lang.code ? 'bg-secondary/10 text-secondary' : ''}`}
          >
            {lang.name}
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <div className="p-2 text-xs font-medium text-gray-500 uppercase">Currency</div>
        {currencies.map((curr) => (
          <DropdownMenuItem
            key={curr.symbol}
            onClick={() => setCurrency(curr.symbol)}
            className={`cursor-pointer ${currency === curr.symbol ? 'bg-secondary/10 text-secondary' : ''}`}
          >
            {curr.symbol} {curr.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageCurrencySelector;
