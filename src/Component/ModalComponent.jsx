import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

const ModalComponent = ({ isVisible, setIsVisible, booksData, setBooksData}) => {

    const [bookName,setBookName] = useState('');
    const [author, setAuthor] = useState('');
    const [publisher,setPublisher] = useState('');
    const [issueTo, setIssueingTo] = useState('');

    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >
            <Modal show={isVisible} onHide={() => setIsVisible(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Issue Book</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Name of the Book"
                        className="mb-3"
                    >
                        <Form.Control type="textarea" placeholder="Book Name" onChange={(e) => setBookName(e.target.value)} />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Author"
                        className="mb-3"
                    >
                        <Form.Control type="textarea" placeholder="Author" onChange={(e) => setAuthor(e.target.value)} />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Publisher"
                        className="mb-3"
                    >
                        <Form.Control type="textarea" placeholder="Publisher" onChange={(e) => setPublisher(e.target.value)} />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Issueing To"
                        className="mb-3"
                    >
                        <Form.Control type="textarea" placeholder="Issueing To" onChange={(e) => setIssueingTo(e.target.value)} />
                    </FloatingLabel>

                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary" onClick={() => {
                        setBooksData([{ id: Math.random() * 10000, bookName: bookName, author: author, issueTo: issueTo, issuedOn: new Date(), publisher: publisher }, ...booksData]);
                        setIsVisible(false);
                    }}>Submit</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ModalComponent;