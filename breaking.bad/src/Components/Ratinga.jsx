import React from 'react'

const [formData, setData] = useState({
    
       gender:""

    })

    const  handeleChanage = event => {
        const target = event.target;
        const name = event.name;
        const value = event.value;
        alert('${name} ${value}');
    }
const Ratinga = (prop) => {
    return (
        <div className="">
        
            <form>

          <div className="">
            <label> Good: </label>
            <input type="radio" name="gender" value="good" onChange={handeleChanage} />

            <label>Regular: </label>
            <input type="radio" name="gender" value="regular"  onChange={handeleChanage}/>

            <label>Bad : </label>
            <input type="radio" name="gender" value="bad"  onChange={handeleChanage}/>

            <label>: Acceptable </label>
            <input type="radio" name="gender" value="acceptable"  onChange={handeleChanage}/>

            <label>Deficient: </label>
            <input type="radio" name="gender" value="deficient" onChange={handeleChanage} />

            <label>Cometario</label>
            <textarea>Writer Commmint</textarea>


        </div>    
        </form>
        </div>
    )
}

export default Ratinga
