import './App.css';
import CountdownTimer from "./components/CountdownTimer/CountdownTimer";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './bootstrap.min.css'

function App() {
    const myDate = "2022-07-01"
    const timestamp = +new Date(myDate)

    const retirement = "2047-09-01"
    const timestamp2 = +new Date(retirement)

    const zippy = "2040-09-01"
    const timestamp3 = +new Date(zippy)

    return (
  <div>
      <Header/>
       <div className="container-fluid">
           <div className='row'>
           <div className="col rounded bg-gradient-1 text-white shadow p-5 text-center mb-5">
               <p className="mb-4 font-weight-bold text-uppercase">Remaining time on PS-CC/EAG</p>
               <div id="clock-b" className="countdown-circles d-flex flex-wrap justify-content-center pt-4">
                   <CountdownTimer
                       countdownTimestampMs={timestamp}/>
               </div>


            </div>

           <div className="col rounded bg-gradient-1 text-white shadow p-5 text-center mb-5">
               <p className="mb-4 font-weight-bold text-uppercase">Remaining time in CZ</p>
               <div id="clock-b" className="countdown-circles d-flex flex-wrap justify-content-center pt-4">
                   <CountdownTimer
                       countdownTimestampMs={timestamp}/>
               </div>


           </div>
           <div className="col rounded bg-gradient-1 text-white shadow p-5 text-center mb-5">
               <p className="mb-4 font-weight-bold text-uppercase">Retirement</p>
               <div id="clock-b" className="countdown-circles d-flex flex-wrap justify-content-center pt-4">
                   <CountdownTimer
                       countdownTimestampMs={timestamp2}/>
               </div>


           </div>
           <div className="col rounded bg-gradient-1 text-white shadow p-5 text-center mb-5">
               <p className="mb-4 font-weight-bold text-uppercase">Nourish </p>
               <div id="clock-b" className="countdown-circles d-flex flex-wrap justify-content-center pt-4">
                   <CountdownTimer
                       countdownTimestampMs={timestamp3}/>
               </div>


           </div>
           <div className="col rounded bg-gradient-1 text-white shadow p-5 text-center mb-5">
               <p className="mb-4 font-weight-bold text-uppercase">another event</p>
               <div id="clock-b" className="countdown-circles d-flex flex-wrap justify-content-center pt-4">
                   <CountdownTimer
                       countdownTimestampMs={timestamp2}/>
               </div>


           </div>
           <div className="col rounded bg-gradient-1 text-white shadow p-5 text-center mb-5">
               <p className="mb-4 font-weight-bold text-uppercase">another event</p>
               <div id="clock-b" className="countdown-circles d-flex flex-wrap justify-content-center pt-4">
                   <CountdownTimer
                       countdownTimestampMs={timestamp2}/>
               </div>


           </div>

       </div>
       </div>
      <Footer/>
  </div>
  );
}

export default App;
