import { useState } from 'react';
import  '../styles/form3.css';

export default function TopForm() {

    const [person, setperson] = useState({ companyName: '', workTitle: '', workStartDate: '', workEndDate: '', });
    const [sub, setSub] = useState(true);

    function handleReset(e) {
        e.preventDefault();
        setSub(true); // Display the submit button.
        // Enter users data back to input fields
        e.target[0].value = person.companyName;
        e.target[1].value = person.workTitle;
        e.target[2].value = person.workStartDate;
        e.target[3].value = person .workEndDate;
    }

    function handleSubmit(e) {
        // This will prevent the browser from reloading the page.
        e.preventDefault();
        // Add input values to the person3 state
        setperson({...person, 
            companyName: e.target[0].value, 
            workTitle: e.target[1].value, 
            workStartDate: e.target[2].value,
            workEndDate: e.target[3].value} 
        )
        // Reset the input fields
        e.target[0].value = '';
        e.target[1].value = '';
        e.target[2].value = '';
        e.target[3].value = '';
        // console.log(e.target[0].value);
        // Sub & setSub is used to display/Hide the submit button. 
        setSub(false);
    }

    function getYearFromDate(dateString) {
        return new Date(dateString).getFullYear();
    }


    return (
        <>
        <div id='form3'>
            <h4>Experience</h4>
            <form method="post" onSubmit={handleSubmit} onReset={handleReset}>
                <label id="label">
                    Company name: <input name="text" placeholder=''/>
                    Position title: <input name="text" placeholder=''/>
                    Start date: <input type="date"  placeholder=''/>
                    End date: <input type="date"  placeholder=''/>
                </label>
               {sub && <button type="submit">Submit</button>}
                <button type="reset">Edit</button>
            </form>
        </div>
        <div id='general3' className='card2'>
            <div id='general-info'>
                <h3>Experience</h3>
               <h3> {person.companyName} </h3>
               <h4> {person.workTitle} </h4>
                <h5 id='contact8'> {person.workStartDate ? getYearFromDate(person.workStartDate) : null} -</h5>
                <h5 id='contact9'> {person.workEndDate ? getYearFromDate(person.workEndDate) : null} </h5>
                <hr id='hrTag3'/>
                <hr id='hrTag4'/>

            </div>
        </div>
        </>
    )
}