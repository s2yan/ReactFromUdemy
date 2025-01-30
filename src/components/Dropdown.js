// Dropdown Component
import React, { useState, useRef, useEffect } from 'react';
import { GoChevronDown } from 'react-icons/go';

export default function Dropdown({ options }) {
    const [selectedOption, setSelectedOption] = useState('Select');
    const [expanded, setExpanded] = useState(false);
    const divEle = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!divEle.current.contains(event.target)) {
                setExpanded(false);
            }
        };

        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    const renderOptions = options.map((option, index) => (
        <div
            className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
            key={index}
            onClick={(e) => {
                setSelectedOption(option.label);
                setExpanded(false);
            }}
        >
            {option.label}
        </div>
    ));

    return (
        <div 
            ref={divEle}
            onClick={() => setExpanded(!expanded)}
            className="relative max-w-xs border border-gray-700 rounded-md p-3 mx-auto bg-white shadow cursor-pointer"
        >
            <div className="flex justify-between items-center text-sm font-medium">
                {selectedOption} <GoChevronDown className={`text-lg transition-transform ${expanded ? 'rotate-180' : ''}`} />
            </div>
            {expanded && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-900 rounded shadow z-10">
                    {renderOptions}
                </div>
            )}
        </div>
    );
}
