
import { Component } from 'react';
class Appointment extends Component {

    constructor(props) {

        super(props);
        this.customersArray = props.customers;
        console.log(this.customersArray);
        console.log(props);
    }

    render() {
        return (
            <table className="cstTable primary table-striped">
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Appointment Time</th>
                </tr>
                {this.customersArray.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.firstName}</td>
                            <td>{val.lastName}</td>
                            <td>{val.appointmentTime}</td>
                        </tr>
                    )
                })}
            </table>

        )
    }
}


export default Appointment;