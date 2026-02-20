function Tracker() {

    return (
        <div className="progress_visual_div border rounded w-100 d-flex flex-row flex-wrap px-1 pt-2">
            <div className="each_day_week border">Monday</div>
            <div className="each_day_week border">Tuesday</div>
            <div className="each_day_week border">Wednesday</div>
            <div className="each_day_week border">Thursday</div>
            <div className="each_day_week border">Friday</div>
            <div className="each_day_week border">Saturday</div>
            <div className="each_day_week border">Sunday</div>
        </div>
    )
}

export default Tracker;