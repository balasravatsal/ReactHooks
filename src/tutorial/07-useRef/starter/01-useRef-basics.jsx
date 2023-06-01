import { useEffect, useRef, useState } from 'react';

const UseRefBasics = () => {
  const [value, setValue] = useState(0);

  const refContainer = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value)
  };

  useEffect(()=> {
    refContainer.current.focus()
    }
  )

  return (
    <>
    
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-row'>
          <input type="text" ref={refContainer}/>
          <button type="submit" >Submit</button>
        </div>
      </form>
    
    
    </>
  );
};

export default UseRefBasics;
