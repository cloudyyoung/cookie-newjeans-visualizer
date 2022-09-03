
const table = [
    ["Producer", "Jinsu Park"],
    ["Composition", ["Jinsu Park", "Ylva Dimberg"]],
    ["Lyrics", ["Gigi", "Ylva Dimberg"]],
    ["Instrumental and Programming", "Jinsu Park"],
    ["Vocal Directing / Arrangement", ["Jungwoo Jang", "Jinsu Park", "Dasom Kyung"]],
    ["Background Vocal", ["NewJeans", "Seongju Heo", "Ylva Dimberg"]],
    ["Recording Engineer", "Buyoen Jeon (HYPE Studio)"],
    ["Recording Studio", "HYPE Studio"],
    ["Mix Engineer", "Buyoen Jeon (HYPE Studio)"],
];

const Header = () => {
    return (
        <>
            <div className="font-bold text-6xl mt-20">Cookie</div>
            <div className="font-medium text-3xl mt-0">NewJeans</div>
            <div className="grid grid-cols-1 font-normal mt-10 text-xs divide-y divide-white/30">
                {table.map(([title, people]) => (
                    <div key={title} className="grid grid-cols-3 gap-2">
                        <div className="font-bold col-span-2">{title}</div>
                        <div className="shrink">
                            {Array.isArray(people) ? people.map((person) => (<div key={person}>{person}</div>)) : people}
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-xs mt-6">
                Disclaimer: This is a fan-made web visualizer, and it has no affiliation with the official music video, the artist, the record label, or any other parties involved in the production of the song.
            </div>
        </>
    );
};

export default Header;