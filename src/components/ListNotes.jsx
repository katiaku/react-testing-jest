import React from 'react'

const ListNotes = ({ notes }) => {
    return (
        <ul className="list-notes">
            {notes.map((note, i) => (
                <li key={i}>{ note }</li>
            ))}
        </ul>
    );
};

export default ListNotes;
