import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export const AddExercisePage = () => {

    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('lbs');
    const [date, setDate] = useState('');

    const history = useHistory();

    const addExercise = async () => {
        const newExercise = { name, reps, weight, unit, date };
        const response = await fetch('/exercises', {
            method: 'post',
            body: JSON.stringify(newExercise),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 201) {
            alert("Successfully added the exercise!");
        } else {
            alert(`Failed to add exercise, status code = ${response.status}`);
        }
        history.push("/");
    };


    return (
        <>
            <article>
                <h2>Add Exercise</h2>
                <p>Use the below inputs to add a new exercise to the database.</p>
                <form onSubmit={(e) => { e.preventDefault(); }}>
                    <fieldset>

                        <table>

                            <tr>
                                <th>
                                    <label for="name">Exercise name</label>
                                </th>
                                <th>
                                    <label for="reps">Reps</label>
                                </th>
                                <th>
                                    <label for="weight">Weight</label>
                                </th>
                                <th>
                                    <label for="unit">Unit</label>
                                </th>
                                <th>
                                    <label for="date">Date</label>
                                </th>
                            </tr>

                            <tr>
                                <td>
                                    <input
                                        type="text"
                                        placeholder="Name of the exercise"
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                        id="name"
                                        minLength="1"
                                        required />
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        value={reps}
                                        placeholder="Reps of the exercise"
                                        onChange={e => setReps(e.target.value)}
                                        id="reps"
                                        min="1"
                                        required />
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        placeholder="Weight of the exercise"
                                        value={weight}
                                        onChange={e => setWeight(e.target.value)}
                                        id="weight"
                                        min="1"
                                        required />
                                </td>
                                <td>
                                    <select id="unit" required="require" value={unit} onChange={e => setUnit(e.target.value)}>
                                        <option value="lbs" >lbs</option>
                                        <option value="kgs" >kgs</option>
                                    </select>

                                </td>
                                <td>
                                    <input
                                        type="date"
                                        placeholder="Date of the exercise"
                                        value={date}
                                        onChange={e => setDate(e.target.value)}
                                        id="date"
                                        required />
                                </td>
                            </tr>

                        </table>

                        <label for="submit">
                            <button
                                type="submit"
                                onClick={addExercise}
                                id="submit"
                            >Add Exercise</button></label>
                    </fieldset>
                </form>
            </article>
        </>
    );
}

export default AddExercisePage;