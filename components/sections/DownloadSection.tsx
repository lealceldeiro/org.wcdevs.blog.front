export const DownloadSection: React.FC = () => {
    return (
        <div id="download" className="basic-5">
            <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-2">
                <div className="mb-16 lg:mb-0">
                    <img src="/static/pavo/images/conclusion-smartphone.png" alt="alternative" />
                </div>
                <div className="lg:mt-24 xl:mt-44 xl:ml-12">
                    <p className="mb-9 text-gray-800 text-3xl leading-10">
                        The bloggers running these blogs are some of the best in the blogging business and you can learn a lot
                        about blogging by observing their blogs
                    </p>
                    <a className="btn-solid-lg" href="#your-link"><i className="fab fa-apple"></i>Download</a>
                    <a className="btn-solid-lg secondary" href="#your-link"><i className="fab fa-google-play"></i>Download</a>
                </div>
            </div>
        </div>
    )
}