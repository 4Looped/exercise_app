import React from 'react';
import { useHistory } from "react-router-dom";
import { useState } from 'react';

export const EditExercisePage = ({ exercise }) => {

    const [name, setName] = useState(exercise.name);
    const [reps, setReps] = useState(exercise.reps);
    const [weight, setWeight] = useState(exercise.weight);
    const [unit, setUnit] = useState(exercise.unit);
    const [date, setDate] = useState(exercise.date);

    const history = useHistory();

    const editExercise = async () => {
        const response = await fetch(`/exercises/${exercise._id}`, {
            method: 'PUT',
            body: JSON.stringify({
                name: name,
                reps: reps,
                weight: weight,
                unit: unit,
                date: date
            }),
            headers: { 'Content-Type': 'application/json', },
        });

        if (response.status === 200) {
            alert("Successfully edited document!");
        } else {
            const errMessage = await response.json();
            alert(`Failed to update document. Status ${response.status}. ${errMessage.Error}`);
        }
        history.push("/");
    }

    return (
        <>
            <article>
                <h2>Edit Exercise</h2>
                <p>Use the below interface to edit an existing exercise.</p>
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
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                        id="name"
                                        required />
                                </td>

                                <td>
                                    <input
                                        type="number"
                                        value={reps}
                                        onChange={e => setReps(e.target.value)}
                                        id="reps"
                                        required />
                                </td>

                                <td>
                                    <input
                                        type="number"
                                        value={weight}
                                        onChange={e => setWeight(e.target.value)}
                                        id="weight"
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
                                        value={date.substring(0, 10)}
                                        onChange={e => setDate(e.target.value)}
                                        id="date"
                                        required
                                    />
                                </td>

                            </tr>

                        </table>

                        <label for="submit">
                            <button
                                onClick={editExercise}
                                id="submit"
                            >Save changes</button></label>
                    </fieldset>
                </form>
            </article>
        </>
    );
}
export default EditExercisePage;