const CreatePage = () => {
    const tokenData = {};

    return (
        <section className={"font-sans text-sm lg:text-base"}>
            <div className={"overflow-x-auto"}>
                <ul className="steps my-12">
                    <li data-content="?" className="step step-primary">Basic</li>
                    <li data-content="!" className="step step-primary">Logo</li>
                    <li data-content="✓" className="step step-neutral">Screenshots</li>
                    <li data-content="✕" className="step step-neutral">Category</li>
                    <li data-content="★" className="step step-neutral">Links</li>
                    {/* <li data-content="●" className="step step-neutral">Step 7</li> */}
                </ul>
            </div>

            <section>
                <form>
                    <div className="card w-96 bg-neutral h-64 mx-auto text-neutral-content lg:w-3/5 lg:h-96">
                        <div className="card-body">
                            <div className="card-actions justify-end absolute right-4">
                                <button className="btn btn-square btn-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </div>
                            <h2 className="card-title">Notice!</h2>
                            {/* <p>We are using cookies for no reason.</p> */}
                            {/* <div className="card-actions justify-end">
                                <button className="btn btn-primary">Accept</button>
                                <button className="btn btn-ghost">Deny</button>
                            </div> */}
                            <div className={""}>
                                <header className={""}>Kindly fill the important details about your App before we register it on Nine.</header>
                                <ol className={""}>
                                    {/*<header>Guidelines:</header>*/}
                                    <li>Required fields have the asterisk symbol on them</li>
                                    <li>Use an App name that identifies your App</li>
                                    <li>Don't try to add an App you did not create or build or have permission to register on Nine.
                                        Strong penalty exist for users that engage in such acts.</li>
                                </ol>
                            </div>
                        </div>
                    </div>

                    <section className={"relative w-full mx-auto my-2 px-4 lg:w-3/5"}>
                        <div className="form-control w-full bg-orange-100 mx-auto">
                            <label className="label">
                                <span className="label-text">What is your name?</span>
                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        </div>
                    </section>
                </form>
            </section>

            <section>

            </section>
        </section>
    )
}

export default CreatePage;