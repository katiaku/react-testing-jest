import React from 'react'

const ListNotes = ({ notes = [] }) => {
    return (
        <div className="list-notes" aria-label="list-notes">
            {notes.map((note, i) => (
                <div key={i}>{ note }</div>
            ))}
        </div>
    );
};

export default ListNotes;
