import {Link} from "react-router-dom";

export const NashaLogin = () => {
    return (
        <>
            <div className="min-h-[70vh] bg-base-100 flex flex-col md:flex-row place-content-evenly items-center gap-8 px-8">
                <div className="card max-w-xl w-full shadow-3xl bg-base-100">
                    <div className="card-body card-bordered border-base-300 rounded-box">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg">Kendra ID</span>
                            </label>
                            <input type="text" placeholder="Kendra ID" className="input input-bordered"/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered"/>
                            {/*<label className="label">*/}
                            {/*    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>*/}
                            {/*</label>*/}
                        </div>
                        <div className="form-control mt-6">
                            <Link to={"/nasha/admin/patients"}><button className="btn btn-outline">Login</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

