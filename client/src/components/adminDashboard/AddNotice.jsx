import DashboardNavbar from "./DashboardNavbar.jsx";

export const AddNotice = () => {
    return (
        <>
            <div className="min-h-[70vh] bg-base-100 flex flex-col md:flex-row place-content-evenly items-center gap-8 px-8">
                <div className="card max-w-xl w-full shadow-3xl bg-base-100">
                    <div className="card-body card-bordered border-base-300 rounded-box">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg">Title</span>
                            </label>
                            <input type="text" placeholder="Title" className="input input-bordered"/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg">Notice</span>
                            </label>
                            <input type="text" placeholder="Notice" className="input input-bordered"/>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-outline">Publish</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};