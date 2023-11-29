import {Link} from "react-router-dom";

const DashboardNavbar = () => {

    return (
        <>
            <div className="flex justify-evenly bg-base-100 items-center max-h-[1vh] mt-7">
                <div>
                    <Link to={"/admin/nasha"}>
                        <button className="btn btn-ghost text-lg font-semibold"
                        >
                            Nasha Muckti Centers
                        </button>
                    </Link>
                </div>
                <Link to={"/admin/patients"}>
                    <div>
                        <button className="btn btn-ghost text-lg font-semibold"
                        >
                            Patients
                        </button>
                    </div>
                </Link>
                <Link to={"/admin/notice"}>
                    <div>
                        <button className="btn btn-ghost text-lg"
                        >
                            Add Notice
                        </button>
                    </div>
                </Link>
            </div>
        </>
    );
};

export default DashboardNavbar;