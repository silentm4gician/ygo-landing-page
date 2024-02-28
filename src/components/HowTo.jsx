
const HowTo = () => 
{
    return (
        <div className="w-[30%] sm:w-[50%] p-4 bg-gradient-to-b from-transparent from-1% via-stone-950 via-50% to-transparent to-99% rounded-lg">
            <h2 id="how_to_play" className="text-center text-xl font-semibold bg-gradient-to-l from-transparent from-1% via-stone-950 via-50% to-transparent to-99% rounded-lg p-2 w-[100%] ">How To Play</h2>
            <iframe className="w-[100%] h-64 rounded-lg" src="https://www.youtube.com/embed/55gsu3_36Fs?si=BWhlpOxIBQB3oIEH&amp;start=9" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
    )
}

export default HowTo