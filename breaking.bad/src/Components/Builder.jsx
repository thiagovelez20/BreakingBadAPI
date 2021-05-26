import React, { useEffect, useState } from 'react';
import PersonCards from './PersonCards';
import Quote from '../Components/Quote';
import './Components.css'
import Spinner from '../Components/Spinner';

// code filter Person
const Builder = () => {
    const [info, setinfo] = useState([]);
    const [value, setvalue] = useState('');
    const [pagenfilter, setpagenfilter] = useState(0);


    useEffect(() => {

        getBuilder();
    }, [])

    const getBuilder = async () => {
        const url = 'https://www.breakingbadapi.com/api/characters';
        const respuesta = await fetch(url);
        const data = await respuesta.json();

        console.log(data);
        setinfo(data)

    }
    const handleChange = (e) => {
        setvalue(e.target.value)
    }
    // Filter
    const filterName = info.filter(PersonCards => {
        return PersonCards.name.toLowerCase().includes(value.toLocaleLowerCase())

    })

    const filteredName = info.filter(PersonCards => {
        return PersonCards.name.slice(pagenfilter, pagenfilter + 5);

    })
    //  code Author phares
    const initialQuote = {
        text: 'Quote',
        author: 'Author',
        imgenes: 'img'

    }
    const [quote, setQuote] = useState(initialQuote);
    const [loading, setloading] = useState(false);


    const updateQuote = async () => {
        setloading(true);
        const url = "https://www.breakingbadapi.com/api/quote/random";
        const res = await fetch(url);
        const [newQuote] = await res.json();

        setQuote({
            text: newQuote.quote,
            author: newQuote.author,
            imgeges: newQuote.img,
        })
        setloading(false);
    }

    useEffect(() => {
        updateQuote();

    }, [])

    return (

        <main>
            {value}
            <br />
            <input
                type="text"
                placeholder="Search"
                className="form-control"
                onChange={handleChange}
                value={value}

            />
            <br />
            <br />
            <section>
                <h1> Authors and Their Phares</h1>
                <button onClick={() => updateQuote()}> Get Another  </button>
                {loading ? <Spinner /> : <Quote quote={quote} />}
                < br />
                < br />
               
            </section>
            
            <br /><br /><br />
            <ht />
            <ul>
                {
                    filterName.map(noun => <PersonCards key={noun.char_id} {...noun} />)
                }

            </ul>
            <nav aria-label="...">
                <ul class="pagination pagination-lg">
                    <li class="page-item active" aria-current="page">
                        <span class="page-link">1</span>
                    </li>
                    <li className="page-item"><a class="page-link" href="#">2</a></li>
                    <li clasName="page-item"><a class="page-link" href="#">3</a></li>
                    <li className="page-item"><a class="page-link" href="#">4</a></li>
                    <li className="page-item"><a class="page-link" href="#">5</a></li>
                    <li className="page-item"><a class="page-link" href="#">6</a></li>
                    <li className="page-item"><a class="page-link" href="#">7</a></li>
                    <li className="page-item"><a class="page-link" href="#">8</a></li>
                    <li className="page-item"><a class="page-link" href="#">9</a></li>
                    <li className="page-item"><a class="page-link" href="#">10</a></li>
                    <li classname="page-item"><a class="page-link" href="#">....</a></li>
                </ul>
            </nav>
            <footer>
                <span> <p className='footer'>  Editado por : Santiago Isaza Velez | Semillero de React Js | 2021 </p>  </span>
            </footer>
            <hr />
        </main>


    )
}

export default Builder
