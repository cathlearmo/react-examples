import React from 'react';
import './grid.scss';

export function GridDemo() {

    return (
        <div className="grid-parent">
            <div className="left-grid">
                <h2>Brickwork Grid</h2>
                <div className="wrapper">
                    <div className="box a">A</div>
                    <div className="box b">B</div>
                    <div className="box c">C</div>
                    <div className="box d">D</div>
                </div>
            </div>
            <div className="right-grid">
                <h2>Standard Grid</h2>
                <div className="wrapper">
                    <div className="box standard-a">A</div>
                    <div className="box standard-b">B</div>
                    <div className="box standard-c">C</div>
                    <div className="box standard-d">D</div>
                    <div className="box standard-e">E</div>
                    <div className="box standard-f">F</div>
                </div>
            </div>
        </div>
    );
}
