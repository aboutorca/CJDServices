import { Activity, DraftingCompass, Mail, Zap } from 'lucide-react'
import Image from 'next/image'

export default function FeaturesSection() {
    return (
        <section id="features" className="py-16 md:py-32">
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">
                    <div className="lg:col-span-2">
                        <div className="md:pr-6 lg:pr-0">
                            <h2 className="text-4xl font-semibold lg:text-5xl">Here When You Need a Hand</h2>
                            <p className="mt-6">From quick fixes to bigger projects, we’ve got you covered. Whether it’s painting, repairs, or electrical work, we treat every home like it’s our own.</p>
                        </div>
                        <ul className="mt-8 divide-y border-y *:flex *:items-center *:gap-3 *:py-3">
                            <li>
                                <Mail className="size-5" />
                                Friendly, local service you can trust
                            </li>
                            <li>
                                <Zap className="size-5" />
                                Fast turnaround on most projects
                            </li>
                            <li>
                                <Activity className="size-5" />
                                Clear pricing with no surprises
                            </li>
                            <li>
                                <DraftingCompass className="size-5" />
                                Quality workmanship that lasts
                            </li>
                        </ul>
                    </div>
                    <div className="border-border/50 relative rounded-3xl border p-3 lg:col-span-3">
                        <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
                            <Image src="/featuresimg.webp" className="rounded-[15px] shadow" alt="features illustration" width={1207} height={929} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
