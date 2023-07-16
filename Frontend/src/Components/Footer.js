const Footer = () => {
    return (
    <div id="contact" className="w-full bg-white border-black border-t-2">
      <div className="px-2 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:w-11/12   ">
        <div className="grid gap-10 row-gap-8 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center"
            >
              <img src="/logo.png" className="w-32 text-deep-purple-accent-400"></img>
              <span className="ml-2 text-xl font-bold tracking-wide text-black uppercase">
                Product Management
              </span>
            </a>
            <div className="mt-2 lg:max-w-sm">
              <p className="text-sm text-black px-4">
              This website helps large businesses to manage their warehouse products.
              </p>
             
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-base font-bold tracking-wide text-gray-900">
              Contacts
            </p>
            <div className="flex text-black">
              <p className="mr-1 text-black">Phone:</p>
              <a
                href="tel:850-123-5021"
                aria-label="Our phone"
                title="Our phone"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                +91 7389998681
              </a>
            </div>
            <div className="flex text-black">
              <p className="mr-1 text-black">Email:</p>
              <a
                href="mailto:info@lorem.mail"
                aria-label="Our email"
                title="Our email"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                prodmanager@gmail.com
              </a>
            </div>
            <div className="flex text-black">
              
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Our address"
                title="Our address"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Developed and Deployed by product manager team
              </a>
            </div>
          </div>
          <div>
            <span className="text-base font-bold tracking-wide text-gray-900">
              
            </span>
           
            <p className="mt-4 text-sm text-black">
             Made with love in India ❤️
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 border-t-2 border-black">
          <p className="text-sm text-black text-center">
            © Copyright Product Manager. All rights reserved.
          </p>
          
        </div>
      </div>
      </div>
    );
  };

  export default Footer