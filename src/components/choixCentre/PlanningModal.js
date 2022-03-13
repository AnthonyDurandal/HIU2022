import { React, useState } from "react";
import { Modal , Button} from 'react-bootstrap';
import Planning from "../../pages/Planning";
const PlanningModal = (props)=>{
    return(

 <Modal
        size="lg"
        show={props.option.show}
        onHide={props.closeFunction}
            dialogClassName="planning-modal"
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
            Choisisez un créneau
        </Modal.Header>
        {/* <Modal.Body> */}
                <Planning></Planning>
        {/* </Modal.Body> */}
            <Modal.Footer>
            <Button variant="primary"  onClick={props.closeFunction}>Valider</Button>
            <Button variant="danger"  onClick={props.closeFunction}>Fermer</Button>
        </Modal.Footer>
      </Modal>




        // <Modal fullscreen={"modal-90w"} show={props.option.show} onHide={props.closeFunction} aria-labelledby="example-custom-modal-styling-title" >
        //     <Modal.Header closeButton>
        //         <Modal.Title>Reservation</Modal.Title>
        //     </Modal.Header>
        //     <Modal.Body>Woohoo, you're reading this text in a modal!
        //        <Planning></Planning>
        //     </Modal.Body>
        //     <Modal.Footer>
        //         <Button variant="primary"  onClick={props.closeFunction}>Valider</Button>
        //         <Button variant="danger"  onClick={props.closeFunction}>Fermer</Button>
        //     </Modal.Footer>
        // </Modal>
    );
};
export default PlanningModal;