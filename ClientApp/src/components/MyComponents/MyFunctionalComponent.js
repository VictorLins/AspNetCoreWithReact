import React, { useEffect, useState } from 'react';

const MyFunctionalComponent = (props) => {

    /* COMPONENT LIFECYCLE */
    function componentMount() {
        //alert("Component rendered");
    }
    function componentUnmount() {
        //alert("Leaving the component");
    }
    useEffect(() => {
        componentMount();
        return () => {
            componentUnmount();
        }
    }, [])

    /* STATE */
    const [age, setAge] = useState(20);

    /* EVENT HANDLING */
    const onChangeAgeInput = (event) => {
        alert("Age has changed");
        setAge(parseInt(event.target.value));
    }
    const showDetails = (prTelephone) => {
        alert(`Name: ${props.name ? props.name : 'John'} | Age: ${age} | Telephone: ${prTelephone}`);
    }

    /* CONDITIONAL RENDERING */
    let JoanAge = () => {
        if (age > 25)
            return (<p>John has more than 25 years</p>)
        else
            return (<p>John has 25 years or less</p>)
    }

    return (
        <div>
            <h2>My Functional Component</h2>

            {/* PROPS */}
            < hr />
            <h4>Name: <b>{props.name ? props.name : "John"}</b></h4>

            {/* STATE */}
            <hr />
            <h4>State</h4>
            <span>
                <b>Age: </b><input value={age} onChange={onChangeAgeInput} />
                <button onClick={() => setAge(age + 1)}>+</button>
                <button onClick={() => setAge(age - 1)}>-</button>
            </span>

            {/* EVENT HANDLING */}
            <hr />
            <h4>Event Handling</h4>
            <button onClick={showDetails.bind(this, 123456789)}>Show Details</button>

            {/* CONDITIONAL RENDERING */}
            <hr />
            <h4>Conditional Rendering</h4>

            {/* EXAMPLE 1 - IF/ELSE */}
            {JoanAge()}

            {/* EXAMPLE 2 - TERNARY OPERATOR */}
            <p>{age > 25 ? 'John has more than 25 years' : 'John has 25 years or less'}</p>

            {/* EXAMPLE 3 - SHORT-CIRCUIT OPERATOR */}
            {age > 25 && <p>John has more than 25 years</p>}
            {age <= 25 && <p>John has 25 years or less </p>}

            {/* EXAMPLE 4 - IMEDIATELY INVOKED FUNCTION */}
            {
                (() => {
                    switch (age) {
                        case 25: return <p>John has 25 years</p>;
                        default: return <p>John has not 25 years</p>;
                    }
                })()
            }

        </div>
    )
}

export default MyFunctionalComponent;