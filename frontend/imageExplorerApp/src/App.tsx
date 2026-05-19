import { useState } from 'react'
import './App.css'
import { use, Suspense } from 'react';

const fetchSanity = async () => {
  const res = await
  fetch('http://127.0.0.1:8000/sanity/');
  return res.json();
}
const dataPromise =fetchSanity();

function App() {
  const [count, setCount] = useState(0)
  const sanityValue = use(dataPromise);

  return (
    <>

        <section id="center">
          <div>
            <p>
              Data selection zone
            </p>
          </div>
        </section>

        <div className="ticks"></div>

        <section id="next-steps">
          <div id="im2D">
              <p>
                2D image will be here
              </p>
          </div>
          <div id="im3D">
              <p>
                3D image will be here
              </p>

          </div>
        </section>

        <div className="ticks"></div>
        <section id="spacer"></section>

    </>
  )
}

export default App
