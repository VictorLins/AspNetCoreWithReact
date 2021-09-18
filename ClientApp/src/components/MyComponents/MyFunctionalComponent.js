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

    return (
        <div>
            <h2>
                My Functional Component

                {/* PROPS */}
                < hr />
                <h4>Name: <b>{props.name ? props.name : "John"}</b></h4>

                {/* STATE */}
                <hr />
                <h4>State</h4>
                <span>
                    <b>Age: </b>{age}
                    <button onClick={() => setAge(age + 1)}>+</button>
                    <button onClick={() => setAge(age - 1)}>-</button>
                </span>
            </h2>
        </div>
    )
}

export default MyFunctionalComponent;