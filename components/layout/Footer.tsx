import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-gray-800 py-16 static bottom-0">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 wow fadeInUp animated" data-wow-delay="0.2s" style={{ visibility: 'visible', WebkitAnimationDelay: '0.2s', MozAnimationDelay: '0.2s', animationDelay: '0.2s' }}>
            <div className="mx-3 mb-8">
              {/* <div className="footer-logo mb-3">
                <img src="assets/img/logo.svg" alt="Logo" />
              </div> */}
              <p className="text-gray-300">
                Best Blogs Around the World That Will Inspire Your Life
              </p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 wow fadeInUp animated" data-wow-delay="0.4s" style={{ visibility: 'visible', WebkitAnimationDelay: '0.4s', MozAnimationDelay: '0.4s', animationDelay: '0.4s' }}>
            <div className="mx-3 mb-8">
              <h3 className="font-bold text-xl text-white mb-5">Company</h3>
              <ul>
                <li><a href="#" className="footer-links">Press Releases</a></li>
                <li><a href="#" className="footer-links">Mission</a></li>
                <li><a href="#" className="footer-links">Strategy</a></li>
              </ul>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 wow fadeInUp animated" data-wow-delay="0.6s" style={{ visibility: 'visible', WebkitAnimationDelay: '0.6s', MozAnimationDelay: '0.6s', animationDelay: '0.6s' }}>
            <div className="mx-3 mb-8">
              <h3 className="font-bold text-xl text-white mb-5">About</h3>
              <ul>
                <li><a href="#" className="footer-links">Career</a></li>
                <li><a href="#" className="footer-links">Team</a></li>
                <li><a href="#" className="footer-links">Clients</a></li>
              </ul>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 wow fadeInUp animated" data-wow-delay="0.8s" style={{ visibility: 'visible', WebkitAnimationDelay: '0.8s', MozAnimationDelay: '0.8s', animationDelay: '0.8s' }}>
            <div className="mx-3 mb-8">
              <h3 className="font-bold text-xl text-white mb-5">Find us on</h3>
              <ul className="social-icons flex justify-start">
                <li className="mx-2">
                  <a href="#" className="footer-icon hover:bg-indigo-500">
                    <i className="lni lni-facebook-original" aria-hidden="true" />
                  </a>
                </li>
                <li className="mx-2">
                  <a href="#" className="footer-icon hover:bg-blue-400">
                    <i className="lni lni-twitter-original" aria-hidden="true" />
                  </a>
                </li>
                <li className="mx-2">
                  <a href="#" className="footer-icon hover:bg-red-500">
                    <i className="lni lni-instagram-original" aria-hidden="true" />
                  </a>
                </li>
                <li className="mx-2">
                  <a href="#" className="footer-icon hover:bg-indigo-600">
                    <i className="lni lni-linkedin-original" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
