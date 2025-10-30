'use client';

import React from 'react';
import { Accordion, AccordionItem } from '@heroui/react';
import { Plus, Minus } from 'lucide-react';
import './faqs.css';

const IndustryFAQS = ({ faqItems }) => {
    return (
        <section className="faq-section py-[70px]" >
            <div className="w-full">
                <Accordion
                    variant="splitted"
                    showDivider={false}
                    className=""
                    itemClasses={{
                        base: 'py-6 border-b border-gray-200 first:border-t-0 last:border-none', // ✅ removes only top from first & bottom from last
                        trigger: 'flex items-center justify-between w-full text-left group focus:outline-none',
                        title: 'flex-1 flex justify-between items-center w-full',
                        content: 'pt-2',
                        indicator: 'hidden',
                    }}
                >
                    {faqItems.map((item, index) => (
                        <AccordionItem
                            key={item.key || index}
                            aria-label={item.title}
                            className="faqs-content"
                            title={
                                <div className="flex justify-between items-start sm:items-center w-full gap-3">
                                    {/* Question Title */}
                                    <h3 className="font-semibold text-[#0B0D17] transition-colors duration-200 leading-snug break-words !text-[18px] lg:!text-[24px]">
                                        {item.title}
                                    </h3>



                                    {/* Plus/Minus icons */}
                                    <div className="relative flex-shrink-0 w-5 h-5">
                                        <Plus className="absolute w-5 h-5 text-[#6B7280] transition-opacity duration-200 group-data-[open=true]:opacity-0" />
                                        <Minus className="absolute w-5 h-5 text-[#6B7280] opacity-0 transition-opacity duration-200 group-data-[open=true]:opacity-100" />
                                    </div>
                                </div>
                            }
                        >
                            <p className="text-[#6B7280] text-[17px] leading-relaxed mt-2" style={{ padding: '0px' }}>
                                {item.content}
                            </p>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
};

export default IndustryFAQS;
