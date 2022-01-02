import Image from 'next/image';

export const Header: React.FC = () => {
    return (
        <header id="header" className="header py-28 text-center md:pt-36 lg:text-left xl:pt-44 xl:pb-32">
            <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
                <div className="mb-16 lg:mt-32 xl:mt-40 xl:mr-12">
                    <h1 className="h1-large mb-5">Online Publishing Platform</h1>
                    <p className="p-large mb-8">
                        Online journal where an individual, group, or corporation presents a record of activities, thoughts, or beliefs.
                    </p>
                    <a className="btn-solid-lg" href="#your-link">
                        {/* <i className="fab fa-apple"></i> */}
                        Login
                    </a>
                    <a className="btn-solid-lg secondary" href="#your-link">
                        {/* <i className="fab fa-google-play"></i> */}
                        Sign up
                    </a>
                </div>
                <div className="xl:text-right align-center my-auto">
                    {/* TODO: check how to put assets in a folder called 'assets' */}
                    <Image className='rounded shadow'
                        src='/static/pavo/images/pl.jpeg'
                        alt='programming languages'
                        layout='responsive'
                        width={500}
                        height={300}
                    />
                </div>
            </div>
        </header>
    )
}