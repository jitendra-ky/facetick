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

function Contributions() {
    return (
        <div className="contributions-section mycontainer py-8">
            <div className="title text-2xl font-bold mb-6">Open-Source Contributions</div>
            <div className="highlighted-contributions-section flex justify-around gap-4 flex-wrap">
                {micorsoftContributionCard}
                {micorsoftContributionCard}
                {micorsoftContributionCard}
            </div>
        </div>
    );
}

export default Contributions;


