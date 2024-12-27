import { useState,useEffect } from 'react'
import reactLogo from '/react.svg'
import viteLogo from '/vite.svg'
import './addevent.css'
// import 'https://www.w3schools.com/w3css/4/w3.css'
// import 'https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.css'
// import '%PUBLIC_URL%/manifest.json'
// import '%PUBLIC_URL%/favicon.ico'

function App() {
  const [count, setCount] = useState(0)

  // var myIndex = 0;
  // function carousel() {
  //   var i;
  //   var x = document.getElementsByclassNameName("mySlides_addevent");
  //   for (i = 0; i < x.length; i++) {
  //     x[i].style.display = "none";  
  //   }
  //   myIndex++;
  //   if (myIndex > x.length) {myIndex = 1}    
  //   x[myIndex-1].style.display = "block";  
  //   setTimeout(carousel, 9000);    
  // }
  // useEffect(() => {
  //   carousel()
  // }, [])

  return (
    <>
<div className="body bg-gray-900 maindiv_addevent">
<div className="slideshow_addfest">
      <img className="mySlides_addfest w3-animate-fading" src="01.jpg" alt="img-1" />
      <img className="mySlides_addfest w3-animate-fading" src="02.jpg" alt="img-2" />
      <img className="mySlides_addfest w3-animate-fading" src="03.jpg" alt="img-3" />
      <img className="mySlides_addfest w3-animate-fading" src="04.jpg" alt="img-4" />
    </div>

    <div className="line_under_head_addevent"></div>
    <div className="containers_addevent">
      <form action="/addevent" method="POST" enctype="multipart/form-data">
      <div className="form-container_addevent bg-gray-900">
 
    <span className="event-no_addevent">Event</span>
    <div className="event1_addevent">
      <div className="tint_addevent"></div>
      <div className="inputs_addevent">
        <div className="part_addevent fest-name_addevent event-name_addevent">
          <label for="event-name-1" className="label_addevent label-event-name_addevent">Fest-Name</label>
          <input type="text" id="fest-name-1" className="input_addevent event-name_addevent event-name-1_addevent" placeholder="Name of The Fest" name="fest_name" required />
        </div>
        <div className="part_addevent event-name_addevent">
          <label for="event-name-1_addevent" className="label_addevent label-event-name_addevent">Event-Name</label>
          <input type="text" id="event-name-1" className="input_addevent event-name_addevent event-name-1_addevent" placeholder="Name of Event" name="event_name" required />
        </div>
        <div className="part_addevent event-day_addevent">
          <label for="event-day-1" className="label_addevent label-event-day_addevent">Event-Day</label>
          <input type="number" id="event-day-1" className="input_addevent event-day_addevent event-day-1_addevent" placeholder="On Which day of fest will it be conducted" name="event_day" required />
        </div>
        <div className="part_addevent event-start_addevent">
          <label for="event-start-1" className="label_addevent label-event-start_addevent">Starting-Time(24-hr Format)</label>
          <input type="time" id="event-start-1" className="input_addevent event-start_addevent event-start-1_addevent" placeholder="Time at which Event will start" name="event_start" required />
        </div>
        <div className="part_addevent event-end_addevent">
          <label for="event-end-1" className="label label-event-end">Ending-Time(24-hr Format)</label>
          <input type="time" id="event-end-1" className="input event-end event-end-1" placeholder="Time at which Event will end" name="event_end" required />
        </div>
        <div className="part_addevent event-head-name_addevent">
          <label for="event-head-name-1" className="label_addevent label-event-head-name_addevent">Event Head's Name</label>
          <input type="text" id="event-head-name-1" className="input_addevent event-head-name_addevent event-head-name-1_addevent" placeholder="Name of the Event Head" name="event_head_name" required />
        </div>
        <div className="part_addevent event-head-email_addevent">
          <label for="event-head-email-1" className="label label-event-head-mail">Email</label>
          <input type="email" id="event-head-email-1" className="input event-head-email event-head-email-1_addevent" placeholder="Email of the Event Head" name="event_head_email" required />
        </div>
        <div className="part_addevent event-head-mobile_addevent">
          <label for="event-head-mobile-1" className="label_addevent label-event-head-mobile_addevent">Mobile No.</label>
          <input type="number" id="event-head-mobile-1" className="input_addevent event-head-mobile_addevent event-head-mobile-1_addevent" placeholder="Mobile No. of the Event Head" name="event_head_mobile" required />
        </div>
      </div>
      <div className="part_addevent description_addevent">
        <div className="par_addeventt desc_addevent">
          <label for="event-description-1" className="label_addevent label-event-description_addevent">Description</label>
          <textarea type="text" id="event-description-1" className="input_addevent event-description_addevent event-description-1_addevent" placeholder="Briefly Describe the Event" name="event_description" required></textarea>
        </div>
        <div className="photos_addevent">
          <div className="flex items-center justify-center w-full">
            <label for="files" className="photo-label_addevent flex flex-col items-center justify-center  border-2 border-gray-300 border-dashed rounded-lg cursor-pointer dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                </div>
                <input id="files" type="file" className='rounded input_photo_addevent' name="files" required />
            </label>
          </div> 
        </div>
      </div>
    </div>
  </div>

    
    <div className="but_addevent">
      <button type="submit" className="button_addevent text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    </div>
  </form>
</div>
<form action="/received">
  <div className="but_addevent but_finish_addevent">
    <button id="button_finish_addevent" type="submit" className="button_addevent button_finish_addevent bg-gray-900 text-white hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">That's All</button>
  </div>
</form>

    <div className="line_under_head_addevent"></div>

    <footer>
      <div className="query_addevent bg-gray-900">
        <div className="no">Questions? Call 000-800-919-1694</div>
        <div className="grids_addevent">
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

    </div>
    </>
  )
}

export default App
