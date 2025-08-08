import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { HeroHeader } from './header'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import { ChevronRight } from 'lucide-react'
import FeaturesSection from '@/components/features-5'
import StatsSection from '@/components/stats-3'
import FAQsTwo from '@/components/faqs-2'
import ContactForm from '@/components/contact-form'
import CallToAction from '@/components/call-to-action'
import FooterSection from '@/components/footer'
import ContentSection from '@/components/content-4'

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-x-hidden">
                <section>
                    <div className="py-24 md:pb-32 lg:pb-36 lg:pt-72">
                        <div className="relative mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12">
                            <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left">
                                <h1 className="mt-8 max-w-2xl text-balance text-5xl md:text-6xl lg:mt-16 xl:text-7xl font-bold">Your Local Handyman in Mount Vernon, WA</h1>
                                <p className="mt-8 max-w-2xl text-balance text-lg">Friendly, reliable help for painting, repairs, and small electrical work—done right the first time.</p>

                                <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="h-12 rounded-full pl-5 pr-3 text-base">
                                        <Link href="tel:3608403345">
                                            <span className="text-nowrap">Call Now</span>
                                            <ChevronRight className="ml-1" />
                                        </Link>
                                    </Button>
                                    <Button
                                        key={2}
                                        asChild
                                        size="lg"
                                        variant="ghost"
                                        className="h-12 rounded-full px-5 text-base hover:bg-zinc-950/5 dark:hover:bg-white/5">
                                        <Link href="#contact">
                                            <span className="text-nowrap">Request a Quote</span>
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="aspect-2/3 absolute inset-1 -z-10 overflow-hidden rounded-3xl border border-black/10 lg:aspect-video lg:rounded-[3rem] dark:border-white/5">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="size-full object-cover opacity-50 dark:opacity-35 dark:lg:opacity-75"
                                src="/HeroVideo.mp4"></video>
                        </div>
                    </div>
                </section>
                <FeaturesSection />
                <ContentSection />
                <StatsSection />
                <FAQsTwo />
                <ContactForm />
                <CallToAction />
                <FooterSection />
            </main>
        </>
    )
}
