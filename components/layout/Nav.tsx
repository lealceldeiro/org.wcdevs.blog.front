import Link from 'next/link';

export const Nav = () => {
    return (
        <nav className="navbar fixed-top">
            <div className="container sm:px-4 lg:px-8 flex flex-wrap items-center justify-between lg:flex-nowrap">
                <Link href='/'>
                    <a className="text-gray-800 font-semibold text-3xl leading-4 no-underline page-scroll">
                        My Blog
                    </a>
                </Link>

                {/* Image Logo */}
                {/* <Link href='#header'>
                    <a className="inline-block mr-4 py-0.5 text-xl whitespace-nowrap hover:no-underline focus:no-underline">
                        <img src="/static/pavo/images/logo.svg" alt="alternative" className="h-8" />
                    </a>
                </Link> */}

                <button className="background-transparent rounded text-xl leading-none hover:no-underline focus:no-underline lg:hidden lg:text-gray-400" type="button" data-toggle="offcanvas">
                    <span className="navbar-toggler-icon inline-block w-8 h-8 align-middle"></span>
                </button>

                <div className="navbar-collapse offcanvas-collapse lg:flex lg:flex-grow lg:items-center" id="navbarsExampleDefault">
                    <ul className="pl-0 mt-3 mb-2 ml-auto flex flex-col list-none lg:mt-0 lg:mb-0 lg:flex-row">
                        <li>
                            <a className="nav-link page-scroll active" href="#header">
                                Home
                            </a>
                        </li>
                        <li>
                            <a className="nav-link page-scroll" href="#features">Articles</a>
                        </li>
                    </ul>
                    <span className="block lg:ml-3.5">
                        <a className="no-underline" href="#your-link">
                            <i className="fas fa-moon text-indigo-600 hover:text-pink-500 text-xl transition-all duration-200 mr-1.5"></i>
                        </a>
                        <a className="no-underline" href="#your-link">
                            <i className="fas fa-sun text-indigo-600 hover:text-pink-500 text-xl transition-all duration-200"></i>
                        </a>
                    </span>
                </div>
            </div>
        </nav>
    )
}