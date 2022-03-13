import { React, useState } from "react";
import { Modal , Button} from 'react-bootstrap';
const PlanningModal = (props)=>{
    return(
        <Modal show={props.option.show} onHide={props.closeFunction} >
            <Modal.Header closeButton>
                <Modal.Title>Reservation</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!
                <table>
                    <tr>
                        <td>tatat</td>
                        </tr>    
                </table> 
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary"  onClick={props.closeFunction}>Valider</Button>
                <Button variant="danger"  onClick={props.closeFunction}>Fermer</Button>
            </Modal.Footer>
        </Modal>
    );
};
export default PlanningModal;