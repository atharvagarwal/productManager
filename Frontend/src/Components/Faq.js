import React from 'react'

const Faq = () => {
  return (
    <>
    <h1 className="text-5xl font-bold text-center">Frequenty Asked Questions</h1>
  <div className="container my-24 mx-auto md:px-6">
    {/* Section: Design Block */}
    <section className="mb-32">
      {/* Jumbotron */}
      <div className="container mx-auto text-center lg:text-left xl:px-32">
        <div className="flex grid items-center lg:grid-cols-2">
          <div className="mb-12 lg:mb-0">
            <div className="block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14 backdrop-blur-[30px]">
              <h3 className="mb-3 text-2xl font-bold">
                We know how valuable your time is
              </h3>
              <h5 className="mb-12 text-lg font-bold text-primary dark:text-primary-400 lg:mb-10 xl:mb-12">
                Let us answer your questions
              </h5>
              <p className="mb-4 font-bold">
                Anim pariatur cliche reprehenderit?
              </p>
              <p className="mb-6 text-gray-500 dark:text-neutral-300">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
                autem numquam dolore molestias aperiam culpa alias veritatis
                architecto eos, molestiae vitae ex eligendi libero eveniet
                dolorem, doloremque rem aliquid perferendis.
              </p>
              <p className="mb-4 font-bold">
                Non cupidatat skateboard dolor brunch?
              </p>
              <p className="mb-6 text-gray-500 dark:text-neutral-300">
                Distinctio corporis, iure facere ducimus quos consectetur ipsa
                ut magnam autem doloremque ex! Id, sequi. Voluptatum magnam sed
                fugit iusto minus et suscipit? Minima sunt at nulla tenetur,
                numquam unde quod modi magnam ab deserunt ipsam sint aliquid
                dolores libero repellendus cupiditate mollitia quidem dolorem
                odit
              </p>
              <p className="mb-4 font-bold">
                Praesentium voluptatibus temporibus consequatur non aspernatur?
              </p>
              <p className="text-gray-500 dark:text-neutral-300">
                Minima sunt at nulla tenetur, numquam unde quod modi magnam ab
                deserunt ipsam sint aliquid dolores libero repellendus
                cupiditate mollitia quidem dolorem.
              </p>
            </div>
          </div>
          <div>
            <img
              src="https://mdbcdn.b-cdn.net/img/new/ecommerce/vertical/075.jpg"
              className="w-full rounded-lg shadow-lg dark:shadow-black/20"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* Jumbotron */}
    </section>
    {/* Section: Design Block */}
  </div>
  {/* Container for demo purpose */}
</>

  )
}

export default Faq