import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const update_api = process.env.REACT_APP_UPDATE_API;
const data_api = process.env.REACT_APP_DATA_API;



const PatEdit = () => {
    const { _id } = useParams();
    const history = useNavigate();
    //const [empdata, empdatachange] = useState({});

    useEffect(() => {
        axios.get(data_api)
            .then((response) => {
                const patientsList = response.data;

                // Find the patient with the matching id
                const patient = patientsList.find((patient) => patient._id === _id);

                if (patient) {
                    // Use the patient data to set the state
                    idchange(patient.id || "");
                    bloodgrpchange(patient.bloodgrp || ""); // Use default value if patient.bloodgrp is undefined
                    Rhchange(patient.Rh || "");
                    DOCchange(patient.DOC || "");
                    dayschange(patient.days || "");
                    DOEchange(patient.DOE || "");
                    Quantitychange(patient.Quantity || "");
                    namechange(patient.name || "");
                    agechange(patient.age || "");
                    genderchange(patient.gender || "");
                    weightchange(patient.weight || "");
                    numberchange(patient.number || "");
                    activechange(patient.isactive || true); // Use default value if patient.isactive is undefined
                } else {
                    // Handle the case where no patient with the given id is found
                    console.error(`Patient with id ${id} not found.`);
                }
            })
            .catch((error) => {
                console.error(error);
                // Handle error, e.g., show an error message
            });
    }, [_id]);

    const [id, idchange] = useState("");
    const [bloodgrp, bloodgrpchange] = useState("");
    const [Rh, Rhchange] = useState("");
    const [DOC, DOCchange] = useState("");
    const [days, dayschange] = useState("");
    const [DOE, DOEchange] = useState("");
    const [Quantity, Quantitychange] = useState("");
    const [name, namechange] = useState("");
    const [age, agechange] = useState("");
    const [gender, genderchange] = useState("");
    const [weight, weightchange] = useState("");
    const [number, numberchange] = useState("");
    const [active, activechange] = useState(true);
    const [validation, valchange] = useState(false);


    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        const empdata = { id, bloodgrp, Rh, DOC, days, DOE, Quantity, name, age, gender, weight, number, active };
        console.log(empdata);


        try {

            axios.post(update_api, empdata)
                .then(res => {
                    if (res.data == "fail") {
                        alert("data did not updated")
                    }
                    else if (res.data == "success") {

                        history("/Dash2", { state: { id: id } })


                    }

                })
                .catch(e => {
                    alert("wrong details")
                    console.log(e);
                })

        }
        catch (e) {
            console.log(e);

        }

    }
    return (
        <div>

            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit}>

                        <div className="card" style={{ "textAlign": "left" }}>
                            <div className="card-title">
                                <h2>Patient edit</h2>
                            </div>
                            <div className="card-body">

                                <div className="row">

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>ID</label>
                                            <input value={id} disabled="disabled" className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>BLOODGRP</label>
                                            <input value={bloodgrp} onChange={e => bloodgrpchange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>RH</label>
                                            <input value={Rh} onChange={e => Rhchange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>DOC</label>
                                            <input value={DOC} onChange={e => DOCchange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>DAYS</label>
                                            <input value={days} onChange={e => dayschange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>DOE</label>
                                            <input value={DOE} onChange={e => DOEchange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>QUANTITY</label>
                                            <input value={Quantity} onChange={e => Quantitychange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>NAME</label>
                                            <input value={name} onChange={e => namechange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>AGE</label>
                                            <input value={age} onChange={e => agechange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>GENDER</label>
                                            <input value={gender} onChange={e => genderchange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>WEIGHT</label>
                                            <input value={weight} onChange={e => weightchange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>NUMBER</label>
                                            <input value={number} onChange={e => numberchange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>


                                    <div className="col-lg-12">
                                        <div className="form-check">
                                            <input checked={active} onChange={e => activechange(e.target.checked)} type="checkbox" className="form-check-input"></input>
                                            <label className="form-check-label">Is Active</label>

                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <button className="btn btn-success" type="submit">Save</button>
                                            <Link to="/Dash2" className="btn btn-danger">Back</Link>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
}

export default PatEdit;