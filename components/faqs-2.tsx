'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'

export default function FAQsTwo() {
    const faqItems = [
        {
            id: 'item-1',
            question: 'How soon can you start?',
            answer: 'Most small jobs can be scheduled within a week. Larger projects may take a bit longer, but we’ll always be upfront about our availability.',
        },
        {
            id: 'item-2',
            question: 'What areas do you serve?',
            answer: 'We’re based in Mount Vernon, WA, and also work in surrounding Skagit County communities.',
        },
        {
            id: 'item-3',
            question: 'What services do you offer?',
            answer: 'Painting (indoor & outdoor), home repairs, and light electrical work. If you’re not sure, just give us a call.',
        },
        {
            id: 'item-4',
            question: 'Do you provide free estimates?',
            answer: 'Yes. We’ll visit your home, discuss the project, and give you a free, no-obligation quote.',
        },
    ]

    return (
        <section id="faq" className="py-16 md:py-24">
            <div className="mx-auto max-w-5xl px-4 md:px-6">
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">Frequently Asked Questions</h2>
                    <p className="text-muted-foreground mt-4 text-balance"></p>
                </div>

                <div className="mx-auto mt-12 max-w-xl">
                    <Accordion
                        type="single"
                        collapsible
                        className="bg-card ring-muted w-full rounded-2xl border px-8 py-3 shadow-sm ring-4 dark:ring-0">
                        {faqItems.map((item) => (
                            <AccordionItem
                                key={item.id}
                                value={item.id}
                                className="border-dashed">
                                <AccordionTrigger className="cursor-pointer text-base hover:no-underline">{item.question}</AccordionTrigger>
                                <AccordionContent>
                                    <p className="text-base">{item.answer}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>

                    <p className="text-muted-foreground mt-6 px-8">
                        Can't find what you're looking for? Contact our{' '}
                        <Link
                            href="mailto:info@CJDservice.com"
                            className="text-primary font-medium hover:underline">
                            customer support team
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    )
}
