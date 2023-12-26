import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const DELETE = process.env.REACT_APP_DELETE;
const DATA_API = process.env.REACT_APP_DATA_API;


const PatListing2 = () => {
    const [patdata, patdatachange] = useState(null);
    // const history = useNavigate();
    const navigate = useNavigate();


    useEffect(() => {
        fetch(DATA_API).then((res) => {
            return res.json();
        }).then((resp) => {
            patdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])

    const LoadEdit = (_id) => {
        console.log(_id)
        navigate("/patients/edit/" + _id);
    }

    const Removefunction = async (_id) => {





        try {
            const res = await axios.post(DELETE, { _id });
            console.log(res);

            if (res.data === "fail to delete") {
                alert("Unable to delete");
            } else if (res.data === "deleted") {
                navigate("/Dash2", { state: { _id: _id } });
            }
        } catch (e) {
            console.log(e);
        }
    };









    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>Patient Listing</h2>
                </div>
                <div className="card-body">

                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>ID</td>
                                <td>Blood Grp</td>
                                <td>Rh</td>
                                <td>DOC</td>
                                <td>Days</td>
                                <td>DOE</td>
                                <td>Quantity</td>
                                <td>Patient Name</td>
                                <td>Age</td>
                                <td>Gender</td>
                                <td>Weight</td>
                                <td>Contact</td>

                            </tr>
                        </thead>

                        <tbody>

                            {patdata &&
                                patdata.map(item => (
                                    <tr key={item._id}>
                                        <td>{item.id}</td>
                                        <td>{item.bloodgrp}</td>
                                        <td>{item.Rh}</td>
                                        <td>{item.DOC}</td>
                                        <td>{item.days}</td>
                                        <td>{item.DOE}</td>
                                        <td>{item.Quantity}</td>
                                        <td>{item.name}</td>
                                        <td>{item.age}</td>
                                        <td>{item.gender}</td>
                                        <td>{item.weight}</td>
                                        <td>{item.number}</td>
                                        <td><a onClick={() => { LoadEdit(item._id) }} className="btn btn-success">Edit</a>
                                            <a onClick={() => { Removefunction(item._id) }} className="btn btn-danger">Remove</a>
                                        </td>

                                    </tr>
                                ))
                            }

                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    );
}

export default PatListing2;
