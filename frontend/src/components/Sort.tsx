import { ArrowUpAZ, ArrowDownZA } from "lucide-react";
import { useAppContext } from "../context/appContext";

const Sort = () => {

    const { searchTerm, setSearchTerm, sort, setSort } = useAppContext()

    return (
        <div className="flex mb-[1rem] justify-center gap-[2rem] sticky top-0 h-[3rem] bg-green-200 items-center border border-gray-300 rounded-md">
            <p> Sort alphabetically &nbsp; </p>
            <button onClick={() => setSort(!sort)} className='border px-[2rem] rounded-md'>
                {sort ? <ArrowUpAZ className="w-5 h-5" /> : <ArrowDownZA className="w-5 h-5" />}
            </button>
            <p> Search &nbsp; </p>
            <input 
            type="text" 
            value={searchTerm}
            className="border px-[1rem] rounded-md placeholder:text-xs" 
            placeholder="Search by Status, Specimen or Gender."
            onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    );
};

export default Sort;