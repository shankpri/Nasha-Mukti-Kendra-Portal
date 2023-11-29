import {Link} from "react-router-dom";

const NashaPatientNav = () => {
    return (
        <>
            <div className="flex justify-between bg-base-100 items-center max-h-[1vh] px-[8rem] mt-7">
                <div className="flex-1">
                    <Link to={"/nasha/admin/newpatient"}>
                        <button className={"btn btn-outline btn-sm"}>
                            New Patient
                        </button>
                    </Link>
                </div>
                <div className="flex-1">
                    <Link to={"/nasha/admin/patients"}>
                        <button className={"btn btn-outline btn-sm"}>
                            View Patients
                        </button>
                    </Link>
                </div>
                <div className="flex-1">
                    <Link to={"/nasha/admin/notices"}>
                        <button className={"btn btn-outline btn-sm"}>
                            Notices
                        </button>
                    </Link>
                </div>
                <div className="flex gap-4">
                    <input type="text" placeholder={"Search By ID"}
                           className="input input-bordered border-base-600 w-[24rem]"/>
                    <button className="btn btn-ghost btn-circle btn-outline border-base-300">
                        <svg className="w-8 h-8 fill-current" fill="none" stroke="currentColor" strokeWidth={2}
                             viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"/>
                        </svg>
                    </button>
                </div>
            </div>
        </>
    );
};



export default NashaPatientNav;