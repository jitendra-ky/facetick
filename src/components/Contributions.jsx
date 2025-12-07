import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const micorsoftContributionCard = (
    <div className="card_container glass highlighted-contribution-card w-[380px] h-[210px] rounded-2xl rounded-tl-[89px] p-2.5 flex flex-col justify-between bg-white/10 shadow-lg backdrop-blur-md">
        <div className="card-head h-[30%] flex flex-row items-center">
            <div className="card-head-left h-[50px] w-[59px] overflow-hidden flex items-center justify-center">
                <img src="static/icons/dragonfly-icon-200.png" alt="" className="w-[90%]" />
            </div>
            <div className="card-head-middle flex-1 px-2.5">
                <div className="org-name text-lg font-bold pb-1.5">Microsoft</div>
                <div className="repo-name text-sm text-gray-400">Lorem ipsum dolor.</div>
            </div>
            <div className="">
                <ul className="flex flex-col">
                    <li className="tag tag-danger !my-[1px] !py-[1px]">Open PRs: 3</li>
                    <li className="tag tag-primary !my-[1px] !py-[1px]">Merged PRs: 5</li>
                    <li className="tag tag-success !my-[1px] !py-[1px]">Fixed issues: 5</li>
                </ul>
            </div>
        </div>
        <div className="card-body flex-grow">
            <div className="card-body-top py-2 text-base font-semibold">Key Contribution</div>
            <div className="card-body-desc text-sm text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium quisquam earum nam enim molestiae facere soluta consectetur corrupti numquam voluptas.
            </div>
        </div>
        <div className="card-footer">
            <ul className="flex gap-1 m-1">
                <li className="tag bg-gray-200 text-gray-700 rounded px-2 py-0.5 text-xs">Python</li>
                <li className="tag bg-gray-200 text-gray-700 rounded px-2 py-0.5 text-xs">Java</li>
                <li className="tag bg-gray-200 text-gray-700 rounded px-2 py-0.5 text-xs">Django</li>
            </ul>
        </div>
    </div>
)

const heatmap = (
    <div className="flex gap-1 p-2.5 border-b border-gray-300">
        {[...Array(52)].map((_, weekIndex) => (
        <div className="flex flex-col gap-1" key={weekIndex}>
            {[...Array(7)].map((_, dayIndex) => {
                const level = Math.floor(Math.random() * 5);
                let color = 'bg-gray-200';
                if (level === 1) color = 'bg-lime-200';
                if (level === 2) color = 'bg-green-300';
                if (level === 3) color = 'bg-green-600';
                if (level === 4) color = 'bg-green-900';
                return (
                    <div
                        className={`w-4 h-4 rounded transition-colors duration-300 ${color}`}
                        key={dayIndex}
                    ></div>
                );
            })}
        </div>
        ))}
    </div>
)

const statsWeb = (
    <div className="w-full h-full rounded-lg">
        <svg viewBox="0 0 200 200" className="w-full h-full">
            <line x1="100" y1="30"  x2="100" y2="170" className="stroke-white stroke-1" />
            <line x1="30"  y1="100" x2="170" y2="100" className="stroke-white stroke-1" />
            <polygon points="100,50 150,100 100,150 50,100" className="fill-green-500/30 stroke-green-400 stroke-2" />
            <circle cx="100" cy="50"  r="2" className="fill-white stroke-green-400 stroke-1" />
            <circle cx="150" cy="100"   r="2" className="fill-white stroke-green-400 stroke-1" />
            <circle cx="100" cy="150" r="2" className="fill-white stroke-green-400 stroke-1" />
            <circle cx="50"  cy="100"   r="2" className="fill-white stroke-green-400 stroke-1" />
            <text x="100" y="15"  textAnchor="middle" className="text-[0.4rem] fill-gray-300">
                2%<tspan x="100" dy="1.2em">Code review</tspan>
            </text>
            <text x="180" y="100" textAnchor="middle" className="text-[0.4rem] fill-gray-300">
                10%<tspan x="180" dy="1.2em">Issues</tspan>
            </text>
            <text x="100" y="180" textAnchor="middle" className="text-[0.4rem] fill-gray-300">
                8%<tspan x="100" dy="1.2em">Pull requests</tspan>
            </text>
            <text x="20"  y="100" textAnchor="middle" className="text-[0.4rem] fill-gray-300">
                80%<tspan x="20" dy="1.2em">Commits</tspan>
            </text>
        </svg>
    </div>
);


function Contributions() {
    return (
        <div className="contributions-section mycontainer py-8">
            <div className="title text-2xl font-bold mb-6">Open-Source Contributions</div>
            <div className="highlighted-contributions-section flex justify-around gap-4 flex-wrap">
                {micorsoftContributionCard}
                {micorsoftContributionCard}
                {micorsoftContributionCard}
            </div>
            <div className="mt-5 rounded-xl flex flex-col items-center glass">
                {heatmap}
                <div className="flex w-full">
                    <div className="flex-1"></div>
                    <div className="mr-12 border-l border-gray-300">{statsWeb}</div>
                </div>
            </div>
        </div>
    );
}

export default Contributions;


