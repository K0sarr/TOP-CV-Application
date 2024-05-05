import { useState } from 'react';
import  '../styles/form.css';

export default function BaseForm() {

    const [person, setPerson] = useState({ name: '', email: '', phone: '' });
    const [sub, setSub] = useState(true);
    // console.log(person.name);

    function handleReset(e) {
        e.preventDefault();
        setSub(true); // Display the submit button.
        // Enter users data back to input fields
        e.target[0].value = person.name;
        e.target[1].value = person.email;
        e.target[2].value = person.phone;
    }

    function handleSubmit(e) {
        // This will prevent the browser from reloading the page.
        e.preventDefault();
        // Add input values to the person state
        setPerson({...person, 
            name: e.target[0].value, 
            email: e.target[1].value, 
            phone: e.target[2].value} 
        )
        // Reset the input fields
        e.target[0].value = '';
        e.target[1].value = '';
        e.target[2].value = '';
        // Sub & setSub is used to display/Hide the submit button. 
        setSub(false);

    }


    return (
        <>
        <div id='form'>
        <h4>General</h4>
            <form method="post" onSubmit={handleSubmit} onReset={handleReset}>
                <label id="label">
                    Name: <input name="name" placeholder=''/>
                    Email: <input name="email" placeholder=''/>
                    Phone: <input name="text" pattern="[0-9]*" placeholder=''/>
                </label>
               {sub && <button type="submit">Submit</button>}
                <button type="reset">Edit</button>
            </form>
        </div>
        <div className="cv-container">
               <hr />
        <div id='general' className='card'>
            <div id='general-info'>
            <h2>General</h2>
               <h1 id='contact0'> {person.name} </h1>
            </div>
               <h4 id='contact'> {person.email} </h4>
                <h4 id='contact2'> {person.phone} </h4>
               <hr id='hrTag'/>
               
        </div>
        </div>
        </>
    )
}
