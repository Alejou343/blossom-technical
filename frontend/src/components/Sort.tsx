import { ArrowUpAZ, ArrowDownZA } from "lucide-react";

const Sort = ({ sort, setSort }) => {

    return (
        <div className="flex my-[1rem] justify-center">
            <p> Ordenar alfabéticamente &nbsp; </p>
            <button onClick={() => setSort(!sort)} className='border px-[2rem] rounded-md'>
            {sort ? <ArrowUpAZ className="w-5 h-5" /> : <ArrowDownZA className="w-5 h-5" />}
            </button>
        </div>
    );
};

export default Sort;