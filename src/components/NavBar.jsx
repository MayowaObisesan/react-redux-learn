import { Link } from "react-router-dom";

const NavBar = ({ header, showAddAppButton = false, showSearch, showProfile, hideVerifiedButton, children }) => {
    const isLoggedIn = false;
    return (
        <section className="navbar bg-base-100">
            <div className="flex-1">
                <Link to={"/"} className="btn btn-ghost normal-case text-xl">{header || "UI"}</Link>
            </div>
            <div className="flex-none gap-2">
                {/*<div className="form-control">*/}
                {/*    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />*/}
                {/*</div>*/}
                {
                    showSearch !== false
                    && <Link to={"/search"} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </Link>
                }

                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            {
                                isLoggedIn
                                    ? <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    : <div className={"btn btn-circle"}></div>
                            }
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between p-3">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a className={"p-3"}>Settings</a></li>
                        <li><a className={"p-3"}>Logout</a></li>
                    </ul>
                </div>
                <div className="divider divider-horizontal"></div>
                <Link to={"new"} className="btn btn-success">List your App</Link>
            </div>
        </section>
    )
}

export default NavBar;