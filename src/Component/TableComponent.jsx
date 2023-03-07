import Table from 'react-bootstrap/Table';

const TableComponent = ({ booksData, setBooksData }) => {

  const heading = ["Name", "Author", "Publisher", "Issued To", "Issued On"];
  const content = () => {
    return (
        booksData.map((book, index) => {
            let date = book.issuedOn.getDate() + " " + (book.issuedOn.toLocaleString('default', { month: 'long' })) + " " + book.issuedOn.getFullYear();
            return (<tr>
                <td>{index + 1}</td>
                <td>{book?.bookName}</td>
                <td>{book?.author}</td>
                <td>{book?.publisher}</td>
                <td>{book?.issueTo}</td>
                <td>{date}</td>
                <td onClick={() => {
                    let newBookData = booksData.filter(oldBook => oldBook.id != book.id);
                    setBooksData(newBookData);
                    setTimeout(() => {
                        alert("Successufully deleted");
                    },0);
                }} >Remove</td>
            </tr>)
        })
    );
  }

    return (
        <Table responsive>
            <thead>
                <tr>
                    <th>#</th>
                    {heading.map((title, index) => {
                        return <th key={index}>{title}</th>
                    })}
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                {booksData.length>0 && content()}
            </tbody>
        </Table>
    );
}

export default TableComponent;