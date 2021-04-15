import React from 'react';
import {Link} from "react-router-dom";

const BookTerm = (props) => {

    return (

        <tr>
            <td>{props.term.name}</td>
            <td>{props.term.category}</td>
            <td>{props.term.author.name} {props.term.author.surname}</td>
            <td>{props.term.availableCopies}</td>
            <td className={"text-right"}>
                <Link className={"btn btn-info"}
                      onClick={() => props.onEdit(props.term.id)}
                      to={`/books/edit/${props.term.id}`}>
                    Edit
                </Link>
                <a title={"Delete"} className={"btn btn-danger ml-2"}
                   onClick={() => props.onDelete(props.term.id)}
                   href={""}>
                    Delete
                </a>
                <Link className={"btn btn-secondary ml-2"}
                      onClick={() => props.onMark(props.term.id)}
                      to={"#"}>
                    Mark As Taken
                </Link>
            </td>
        </tr>
    );
};

export default BookTerm;