import React from "react"



export default function Scoring() {
    return(
        <div> 
            <div className="section-bg-armyGreen">
                <h1 className="section-title"> Disc Golf Scoring</h1>
                <h3> Par </h3>
                <p className="section-content"> All holes in Disc golf have a <a className="bold"> Par </a> which is generally set as the average score. Holes may be a par-3, par-4 or par-5 which represents how many <span className="bold"> strokes </span> you can get to achieve par.</p>
                <h3> Strokes </h3>
                <p> Each throw, starting from your initial tee shot, counts as a throw until the disc lands in the cage. </p>
            </div>
        </div>
    )
}