import React, { useState } from 'react';

function MovieForm(props) {

    const [ title, setTitle ] = useState(props.movie.title);
    const [ description, setDescription ] = useState(props.movie.description);

    const updateClicked = () => {
        console.log('hello');
    }


    return (
        <React.Fragment>
            { props.movie ? (
                <div>
                    <label for="title">Title</label><br/>
                    <input id="title" type="text" placeholder="Title" value={title}
                        onChange={ evt=> setTitle(evt.target.value)}
                    /><br/>
                    <label for="description">Description</label><br/>
                    <textarea id="description" type="text" placeholder="Description" value={description}
                        onChange={ evt=> setDescription(evt.target.value)}>
                    </textarea><br/>
                    <button onClick={updateClicked}>Update</button>
                </div>
            ) : null }
        </React.Fragment>    
    )
}

export default MovieForm;