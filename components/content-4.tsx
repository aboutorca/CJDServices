import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function ContentSection() {
    return (
        <section id="content" className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid gap-6 md:grid-cols-2 md:gap-12">
                    <h2 className="text-4xl font-semibold">Why Your Neighbors Choose CJD Services</h2>
                    <div className="space-y-6">
                        <p>We live and work right here in the Pacific Northwest, so we understand what local homes need. From rainy-day repairs to fresh paint before the holidays, our goal is simple—make your life easier, one project at a time.</p>
                        <p>
                            We show up on time, keep our work area clean, and finish the job with care. No shortcuts. No stress. Just a handyman you can count on.
                        </p>
                        <Button
                            asChild
                            variant="secondary"
                            size="sm"
                            className="gap-1 pr-1.5">
                            <Link href="#">
                                <span>Learn More</span>
                                <ChevronRight className="size-2" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
