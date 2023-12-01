
import Image from "next/legacy/image"

export default function Hero({
  title,
  description,
  image,
  hasOwner
}) {

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Get the selected rating
    var rating = document.querySelector('input[name="rating"]:checked').value;
    console.log(rating);
  };


  return (
    <section>
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
            </div>
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                {hasOwner &&
                  <div className="text-xl inline-block p-4 py-2 rounded-full font-bold bg-green-200 text-green-700">
                    You are owner of:
                  </div>
                }
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">
                    {title.substring(0, title.length / 2)}
                  </span>
                  <span className="block text-indigo-600 xl:inline">
                    {title.substring(title.length / 2)}
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  {description}
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                      Add to Cart
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                      Buy
                    </a>
                  </div>
                </div>
                <div className="mt-3 sm:mt-10 sm:ml-3">


                  <form className="rating" id="ratingForm" onsubmit={handleSubmit}>
                    <div className="rating__stars">
                      <input id="rating-1" className="rating__input rating__input-1" type="radio" name="rating" value="1" />
                      <input id="rating-2" className="rating__input rating__input-2" type="radio" name="rating" value="2" />
                      <input id="rating-3" className="rating__input rating__input-3" type="radio" name="rating" value="3" />
                      <input id="rating-4" className="rating__input rating__input-4" type="radio" name="rating" value="4" />
                      <input id="rating-5" className="rating__input rating__input-5" type="radio" name="rating" value="5" />
                      <label className="rating__label" for="rating-1">

                        <svg className="rating__star" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
                          <ellipse className="rating__star-shadow" cx="16" cy="31" rx="16" ry="1" />
                          <g className="rating__star-body-g">
                            <path className="rating__star-body"
                              d="M15.5,26.8l-8.2,4.3c-0.8,0.4-1.7-0.3-1.6-1.1l1.6-9.2c0.1-0.3-0.1-0.7-0.3-1l-6.7-6.5c-0.6-0.6-0.3-1.7,0.6-1.8l9.2-1.3c0.4-0.1,0.7-0.3,0.8-0.6L15,1.3c0.4-0.8,1.5-0.8,1.9,0l4.1,8.3c0.2,0.3,0.5,0.5,0.8,0.6l9.2,1.3c0.9,0.1,1.2,1.2,0.6,1.8L25,19.9c-0.3,0.2-0.4,0.6-0.3,1l1.6,9.2c0.2,0.9-0.8,1.5-1.6,1.1l-8.2-4.3C16.2,26.7,15.8,26.7,15.5,26.8z" />
                          </g>
                        </svg>
                        <span className="rating__sr">1 star</span>
                      </label>
                      <label className="rating__label" for="rating-2">
                        <svg className="rating__star" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
                          <ellipse className="rating__star-shadow" cx="16" cy="31" rx="16" ry="1" />
                          <g className="rating__star-body-g">
                            <path className="rating__star-body"
                              d="M15.5,26.8l-8.2,4.3c-0.8,0.4-1.7-0.3-1.6-1.1l1.6-9.2c0.1-0.3-0.1-0.7-0.3-1l-6.7-6.5c-0.6-0.6-0.3-1.7,0.6-1.8l9.2-1.3c0.4-0.1,0.7-0.3,0.8-0.6L15,1.3c0.4-0.8,1.5-0.8,1.9,0l4.1,8.3c0.2,0.3,0.5,0.5,0.8,0.6l9.2,1.3c0.9,0.1,1.2,1.2,0.6,1.8L25,19.9c-0.3,0.2-0.4,0.6-0.3,1l1.6,9.2c0.2,0.9-0.8,1.5-1.6,1.1l-8.2-4.3C16.2,26.7,15.8,26.7,15.5,26.8z" />
                          </g>
                        </svg>
                        <span className="rating__sr">2 stars</span>
                      </label>
                      <label className="rating__label" for="rating-3">
                        <svg className="rating__star" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
                          <ellipse className="rating__star-shadow" cx="16" cy="31" rx="16" ry="1" />
                          <g className="rating__star-body-g">
                            <path className="rating__star-body"
                              d="M15.5,26.8l-8.2,4.3c-0.8,0.4-1.7-0.3-1.6-1.1l1.6-9.2c0.1-0.3-0.1-0.7-0.3-1l-6.7-6.5c-0.6-0.6-0.3-1.7,0.6-1.8l9.2-1.3c0.4-0.1,0.7-0.3,0.8-0.6L15,1.3c0.4-0.8,1.5-0.8,1.9,0l4.1,8.3c0.2,0.3,0.5,0.5,0.8,0.6l9.2,1.3c0.9,0.1,1.2,1.2,0.6,1.8L25,19.9c-0.3,0.2-0.4,0.6-0.3,1l1.6,9.2c0.2,0.9-0.8,1.5-1.6,1.1l-8.2-4.3C16.2,26.7,15.8,26.7,15.5,26.8z" />
                          </g>
                        </svg>
                        <span className="rating__sr">3 stars</span>
                      </label>
                      <label className="rating__label" for="rating-4">
                        <svg className="rating__star" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
                          <ellipse className="rating__star-shadow" cx="16" cy="31" rx="16" ry="1" />
                          <g className="rating__star-body-g">
                            <path className="rating__star-body"
                              d="M15.5,26.8l-8.2,4.3c-0.8,0.4-1.7-0.3-1.6-1.1l1.6-9.2c0.1-0.3-0.1-0.7-0.3-1l-6.7-6.5c-0.6-0.6-0.3-1.7,0.6-1.8l9.2-1.3c0.4-0.1,0.7-0.3,0.8-0.6L15,1.3c0.4-0.8,1.5-0.8,1.9,0l4.1,8.3c0.2,0.3,0.5,0.5,0.8,0.6l9.2,1.3c0.9,0.1,1.2,1.2,0.6,1.8L25,19.9c-0.3,0.2-0.4,0.6-0.3,1l1.6,9.2c0.2,0.9-0.8,1.5-1.6,1.1l-8.2-4.3C16.2,26.7,15.8,26.7,15.5,26.8z" />
                          </g>
                        </svg>
                        <span className="rating__sr">4 stars</span>
                      </label>
                      <label className="rating__label" for="rating-5">
                        <svg className="rating__star" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
                          <ellipse className="rating__star-shadow" cx="16" cy="31" rx="16" ry="1" />
                          <g className="rating__star-body-g">
                            <path className="rating__star-body"
                              d="M15.5,26.8l-8.2,4.3c-0.8,0.4-1.7-0.3-1.6-1.1l1.6-9.2c0.1-0.3-0.1-0.7-0.3-1l-6.7-6.5c-0.6-0.6-0.3-1.7,0.6-1.8l9.2-1.3c0.4-0.1,0.7-0.3,0.8-0.6L15,1.3c0.4-0.8,1.5-0.8,1.9,0l4.1,8.3c0.2,0.3,0.5,0.5,0.8,0.6l9.2,1.3c0.9,0.1,1.2,1.2,0.6,1.8L25,19.9c-0.3,0.2-0.4,0.6-0.3,1l1.6,9.2c0.2,0.9-0.8,1.5-1.6,1.1l-8.2-4.3C16.2,26.7,15.8,26.7,15.5,26.8z" />
                          </g>
                        </svg>
                        <span className="rating__sr">5 stars</span>
                      </label>
                    </div>
                    <a href="#" className="w-10 flex items-center justify-center px-8 py-6 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                      <input type="submit" value="Submit" />
                    </a>
                  </form>


                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Image
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src={image}
            alt={title}
            layout="fill"
          />
        </div>
      </div>
    </section>
  )
}