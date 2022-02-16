export const Details3Section: React.FC = () => {
    return (
        <div className="pt-16 pb-12">
            <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-12 lg:gap-x-12">
                <div className="lg:col-span-5">
                    <div className="mb-16 lg:mb-0 xl:mt-16">
                        <h2 className="mb-6">Platform integration and life time free updates</h2>
                        <p className="mb-4">Get a glimpse of what this app can do for your marketing automation and understand why current users are so excited when using Pavo
                            together with their teams.</p>
                        <p className="mb-4">We will promptly answer any questions and honor your requests based on the service level agreement</p>
                    </div>
                </div> {/* end of col */}
                <div className="lg:col-span-7">
                    <div className="ml-14">
                        {/* <img className="inline" src="/static/pavo/images/details-3.jpg" alt="alternative" /> */}
                    </div>
                </div> {/* end of col */}
            </div> {/* end of container */}
        </div>
    )
}