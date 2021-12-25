export const DetailsLightboxSection: React.FC = () => {
    return (
        <div id="details-lightbox" className="lightbox-basic zoom-anim-dialog mfp-hide">
            <div className="lg:grid lg:grid-cols-12 lg:gap-x-8">
                <button title="Close (Esc)" type="button" className="mfp-close x-button">×</button>
                <div className="lg:col-span-8">
                    <div className="mb-12 text-center lg:mb-0 lg:text-left xl:mr-6">
                        <img className="inline rounded-lg" src="/static/pavo/images/details-lightbox.jpg" alt="alternative" />
                    </div>
                </div> {/* end of col */}
                <div className="lg:col-span-4">
                    <h3 className="mb-2">Goals Setting</h3>
                    <hr className="w-11 h-0.5 mt-0.5 mb-4 ml-0 border-none bg-indigo-600" />
                    <p>The app can easily help you track your personal development evolution if you take the time to set it up.</p>
                    <h4 className="mt-7 mb-2.5">User Feedback</h4>
                    <p className="mb-4">This is a great app which can help you save time and make your live easier. And it will help improve your productivity.</p>
                    <ul className="list mb-6 space-y-2">
                        <li className="flex">
                            <i className="fas fa-chevron-right"></i>
                            <div>Splash screen panel</div>
                        </li>
                        <li className="flex">
                            <i className="fas fa-chevron-right"></i>
                            <div>Statistics graph report</div>
                        </li>
                        <li className="flex">
                            <i className="fas fa-chevron-right"></i>
                            <div>Events calendar layout</div>
                        </li>
                        <li className="flex">
                            <i className="fas fa-chevron-right"></i>
                            <div>Location details screen</div>
                        </li>
                        <li className="flex">
                            <i className="fas fa-chevron-right"></i>
                            <div>Onboarding steps interface</div>
                        </li>
                    </ul>
                    <a className="btn-solid-reg mfp-close page-scroll" href="#download">Download</a>
                    <button className="btn-outline-reg mfp-close as-button" type="button">Back</button>
                </div> {/* end of col */}
            </div> {/* end of row */}
        </div>
    )
}