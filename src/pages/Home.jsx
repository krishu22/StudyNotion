import React from 'react'
import {FaArrowRight} from "react-icons/fa";
import {Link} from "react-router-dom";

const Home = () => {

  return (

    <div>
        
        {/* Section 1 */}
        <div className='relative auto flex flex-col w-11/12 items-center justify-between'>

                <Link to={"/signup"}>
                        <div>
                                <p>Become an Instructor</p>
                                <FaArrowRight/>
                        </div>
                </Link>

        </div>

        {/* Section 2 */}

        {/* Section 3 */}

        {/* Footer */}
      
    </div>

  )
   
}

export default Home
