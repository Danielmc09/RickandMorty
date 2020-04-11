const Character = () => {
    const view = `
        <div class="character-inner">
            <article class="character-card">
                <img class="image" alt="name"> 
                <h2>Name</name>
            </article>    
            <article class="character-card">
                <h3>Episodios:</h3>
                <h3>Estado:</h3>
                <h3>Especies:</h3>
                <h3>Gender:</h3>
                <h3>Origen:</h3>
                <h3>Ultima Ubicacion:</h3>
            </article> 
        </div>
    `;
    return view;
};

export default Character;