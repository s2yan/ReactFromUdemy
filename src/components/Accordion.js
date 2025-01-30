import React, { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';

const Accordion = ({ items }) => {
    const [expandedIndex, setExpandedIndex] = useState(-1);

    const renderItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex;
        const icon = (
            <span className="text-xl transition-transform">
                {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
            </span>
        );

        return (
            <div key={index} className="border border-gray-700 rounded-lg overflow-hidden mb-2">
                <div
                    className="flex justify-between items-center p-4 cursor-pointer bg-gray-200 hover:bg-gray-400"
                    onClick={() => setExpandedIndex(isExpanded ? -1 : index)}
                >
                    <span className="text-lg font-medium text-black">{item.label}</span>
                    {icon}
                </div>
                {isExpanded && (
                    <div className="p-4 bg-white text-black">
                        {item.content}
                    </div>
                )}
            </div>
        );
    });

    return <div className="mx-auto max-w-4xl">{renderItems}</div>;
};

export default Accordion;
