import { useState } from 'react'
import reactLogo from '/react.svg'
import viteLogo from '/vite.svg'
import './addfest.css'
import './style.css'
// import 'https://www.w3schools.com/w3css/4/w3.css'
// import 'https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.css'
// import '%PUBLIC_URL%/manifest.json'
// import '%PUBLIC_URL%/favicon.ico'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <body className="bg-gray-900 main_addfest">
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>

    <div className="slideshow_addfest">
      <img className="mySlides_addfest w3-animate-fading" src="01.jpg" alt="img-1" />
      <img className="mySlides_addfest w3-animate-fading" src="02.jpg" alt="img-2" />
      <img className="mySlides_addfest w3-animate-fading" src="03.jpg" alt="img-3" />
      <img className="mySlides_addfest w3-animate-fading" src="04.jpg" alt="img-4" />
    </div>

    <div className="line_under_head_addfest"></div>
    <div className="containers_addfest">
      <form action="http://localhost:3000/fest" method="POST" enctype="multipart/form-data">
      <div className="form-container_addfest">
        <h2 className="form-title_addfest">Add New Fest</h2>
        <div className="form-group_addfest">
            <label for="name">Fest Name:</label>
            <input
                type="text"
                id="name"
                name="fest_name_addfest"
                required
            />
        </div>
        <div className="form-group_addfest">
            <label for="from">From:</label>
            <input
                type="date"
                id="from"
                name="fest_from_addfest"
                required
            />
        </div>
        <div className="form-group_addfest">
            <label for="to">To:</label>
            <input
                type="date"
                id="to"
                name="fest_to_addfest"
                required
            />
        </div>
        <div className="form-group_addfest">
            <label for="location">Location:</label>
            <input
                type="text"
                id="location"
                name="fest_location_addfest"
                required
            />
        </div>
        <div className="form-group_addfest">
            <label for="festHead">Fest Head:</label>
            <input
                type="text"
                id="festHead"
                name="fest_head_name_addfest"
                required
            />
        </div>
        <div className="form-group_addfest">
            <label for="festHeadEmail">Fest Head Email ID:</label>
            <input
                type="email"
                id="festHeadEmail"
                name="fest_head_email_addfest"
                required
            />
        </div>
        <div className="form-group_addfest">
            <label for="festHeadPhone">Fest Head Phone Number:</label>
            <input
                type="number"
                id="festHeadPhone"
                name="fest_head_mobile_addfest"
                required
            />
        </div>
        <div className="form-group">
            <label for="description">Description:</label>
            <textarea
                id="description"
                name="fest_description_addfest"
                required
            ></textarea>
        </div>
        <div className="photos_addfest">
            <div className="flex items-center justify-center w-full">
              <label for="files" className="photo-label_addfest flex flex-col items-center justify-center  border-2 border-gray-300 border-dashed rounded-lg cursor-pointer dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                      </svg>
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                  </div>
                  <input id="files" type="file" className='rounded hidden' name="file" required/>
              </label>
            </div> 
          </div>
    </div>
   

    <div className="but_addfest">
      <button type="submit" className="button_addfest text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Next</button>
    </div>
  </form>
</div>


    <div className="line_under_head_addfest"></div>

    <footer>
      <div className="query">
        <div className="no">Questions? Call 000-800-919-1694</div>
        <div className="grids">
          <div className="footer-item">
            <a href="faq" target="_blank">Investor Relations</a>
            <a href="faq" target="_blank">Jobs</a>
            <a href="faq" target="_blank">Ways to Watch</a>
            <a href="faq" target="_blank">Terms of Use</a>
          </div>
          <div className="footer-item">
            <a href="faq" target="_blank">Help Centre</a>
            <a href="faq" target="_blank">Account</a>
            <a href="faq" target="_blank">Speed Test</a>
            <a href="faq" target="_blank">Legal Notices</a>
          </div>
          <div className="footer-item">
            <a href="faq" target="_blank">Media Centre</a>
            <a href="faq" target="_blank">Privacy</a>
            <a href="faq" target="_blank">Cookie Preferences</a>
            <a href="faq" target="_blank">Corporate</a>
          </div>
          <div className="footer-item">
            <a href="faq" target="_blank">Contact Us</a>
            <a href="faq" target="_blank">Speed Test</a>
            <a href="faq" target="_blank">Legal Notices</a>
            <a href="faq" target="_blank">Only on Netflix</a>
          </div>

          <div className="footer-item2">
            <a href="faq" target="_blank">Investor Relations</a>
            <a href="faq" target="_blank">Jobs</a>
            <a href="faq" target="_blank">Ways to Watch</a>
            <a href="faq" target="_blank">Terms of Use</a>
            <a href="faq" target="_blank">Help Centre</a>
            <a href="faq" target="_blank">Account</a>
            <a href="faq" target="_blank">Speed Test</a>
            <a href="faq" target="_blank">Legal Notices</a>
          </div>
          <div className="footer-item2">
            <a href="faq" target="_blank">Media Centre</a>
            <a href="faq" target="_blank">Privacy</a>
            <a href="faq" target="_blank">Cookie Preferences</a>
            <a href="faq" target="_blank">Corporate</a>
            <a href="faq" target="_blank">Contact Us</a>
            <a href="faq" target="_blank">Speed Test</a>
            <a href="faq" target="_blank">Legal Notices</a>
            <a href="faq" target="_blank">Only on Netflix</a>
          </div>
        </div>
      </div>
    </footer>

    {/* <script>
      var myIndex = 0;
      carousel();
      
      function carousel() {
        var i;
        var x = document.getElementsByclassNameName("mySlides");
        for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";  
        }
        myIndex++;
        if (myIndex > x.length) {myIndex = 1}    
        x[myIndex-1].style.display = "block";  
        setTimeout(carousel, 9000);    
      }
      </script> */}
  </body>
    </>
  )
}

export default App
