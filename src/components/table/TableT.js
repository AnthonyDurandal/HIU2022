import { useState } from "react"
import { Table, Modal, Button } from "react-bootstrap"
import '../../styles/TableT.css'

const TableT = ({ data, crud, infoFunction, modifyFunction, deleteFunction }) => {
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [indexToDelete, setIndexToDelete] = useState(null)
    const [modalText, setModalText] = useState("")

    const openDeleteModal = (index) => {
        var text = data.deleteText;
        setIndexToDelete(index);
        data.deleteTextData.map(d=>{
            var ind = 0;
            data.header.forEach((h, i)=>{
                if(h===d)
                    ind = i;
            })
            text = text.replace("{}", data.data[index][ind]);
        })
        setModalText(text)
        setShowDeleteModal(true)
    }

    const closeDeleteModal = () => {
        setIndexToDelete(null)
        setShowDeleteModal(false)
    }

    const lineClass = (data) => {
        if(typeof(data) === 'number') return 'table-number'
        else return ''
    }

    const formatData = (d) => {
        if(typeof(d) === 'number')
            return d.toString().replace(/\B(?=(\d{3})+(?!\d))/g, data.numberSeparator)
        else return d
    }

    return (
        <>
            <Table striped hover>
                <thead>
                    <tr>
                        {
                            data.header.map((h, index)=>(
                                <th key={index}>{h}</th>
                            ))
                        }
                        {
                            crud && <>
                                <th className="text-center"></th>
                                <th className="text-center"></th>
                                <th className="text-center"></th>
                            </>
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        data.data.map((row, index)=>(
                            <tr key={index}>
                                {
                                    (row.map((data, i)=>(
                                        <td key={i} className={lineClass(data)}>{formatData(data)}</td>
                                    )))
                                }
                                { crud &&
                                    <>
                                        <td className="text-center" onClick={()=>{infoFunction(index)}}><i className="bi bi-info-circle table-button"></i></td>
                                        <td className="text-center" onClick={()=>{modifyFunction(index)}}><i className="bi bi-pencil-square text-secondary table-button"></i></td>
                                        <td className="text-center" onClick={()=>{openDeleteModal(index)}}><i className="bi bi-trash3 text-danger table-button"></i></td>
                                    </>
                                }
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
            <Modal show={showDeleteModal}>
                <Modal.Header>
                    <Modal.Title>Suppression</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>{modalText}</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={closeDeleteModal}>Annuler</Button>
                    <Button variant="danger" 
                            onClick={()=>{
                                deleteFunction(indexToDelete)
                                closeDeleteModal()
                                }
                            }
                    >Supprimer</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default TableT