import NavTab from "./NavTab";

function Headers({ rightFeature }) {

    return (
        <div className="bg-black px-3 py-4 text-center d-flex flex-row justify-content-between">
            <div className="mobile_header_feature">
                {rightFeature?
                    (
                        <NavTab />
                    )
                    :
                    (<></>)
                }
            </div>
            <div className="text-center text-md-start fs-2 fw-bold">
                Workout Tracker
            </div>
            <div className="desktop_header_feature">
                Desktop Header Feature
            </div>
        </div>
    )
}

export default Headers;