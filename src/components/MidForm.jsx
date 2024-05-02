import { useState } from 'react';
import  '../styles/form2.css';

export default function MidForm() {

    const [person, setperson] = useState({ schoolName: '', studyTitle: '', startDate: '', endDate: '', });
    const [sub, setSub] = useState(true);

    function handleReset(e) {
        e.preventDefault();
        setSub(true); // Display the submit button.
        // Enter users data back to input fields
        e.target[0].value = person.schoolName;
        e.target[1].value = person.studyTitle;
        e.target[2].value = person.startDate;
        e.target[3].value = person.endDate;
    }

    function handleSubmit(e) {
        // This will prevent the browser from reloading the page.
        e.preventDefault();
        // Add input values to the person state
        setperson({...person, 
            schoolName: e.target[0].value, 
            studyTitle: e.target[1].value, 
            startDate: e.target[2].value,
            endDate: e.target[3].value} 
        )
        // Reset the input fields
        e.target[0].value = '';
        e.target[1].value = '';
        e.target[2].value = '';
        e.target[3].value = '';
        console.log(e.target[0].value);
        // Sub & setSub is used to display/Hide the submit button. 
        setSub(false);
    }

    function getYearFromDate(dateString) {
        return new Date(dateString).getFullYear();
    }


    return (
        <>
        <div id='form2'>
            <h4>Education</h4>
            <form method="post" onSubmit={handleSubmit} onReset={handleReset}>
                <label id="label">
                    School name: <input name="text" placeholder=''/>
                    Education program: <input name="text" placeholder=''/>
                    Start date: <input type="date"  placeholder=''/>
                    End date: <input type="date"  placeholder=''/>
                </label>
               {sub && <button type="submit">Submit</button>}
                <button type="reset">Edit</button>
            </form>
        </div>
        <div id='general2' className='card2'>
            <div id='general-info'>
                <h3>EDUCATION</h3>
               <h3 id='contact3'> {person.schoolName} </h3>
               <h4 id='contact6'> {person.studyTitle} </h4>
               <h5 id='contact4'>{person.startDate ? getYearFromDate(person.startDate) : null} -</h5>
                <h5 id='contact5'>{person.endDate ? getYearFromDate(person.endDate) : null} </h5>
                <hr id='hrTag2'/>
            </div>
        </div>
        </>
    )
}