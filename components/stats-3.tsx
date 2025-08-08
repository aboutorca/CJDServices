export default function StatsSection() {
    return (
        <section id="stats" className="py-12 md:py-20">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
                    <h2 className="text-4xl font-semibold lg:text-5xl">Proudly Serving Mount Vernon and Beyond</h2>
                    <p></p>
                </div>

                <div className="grid gap-0.5 *:text-center md:grid-cols-3">
                    <div className="rounded-(--radius) space-y-4 border py-12">
                        <div className="text-5xl font-bold">+300</div>
                        <p>Local Homes Serviced</p>
                    </div>
                    <div className="rounded-(--radius) space-y-4 border py-12">
                        <div className="text-5xl font-bold">95%</div>
                        <p>Repeat Customers</p>
                    </div>
                    <div className="rounded-(--radius) space-y-4 border py-12">
                        <div className="text-5xl font-bold">+15</div>
                        <p>Years Combined Experience</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
