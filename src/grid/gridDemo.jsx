import React from 'react';
import './grid.scss';

export function GridDemo() {

    const [toggleClass, setToggleClass] = React.useState(false);

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
                    <div className={toggleClass ? 'box standard-a' : 'box'} onClick={() => setToggleClass(!toggleClass)}>
                        { toggleClass ? "A - Click to Sort!" : "A - Click to Mix!" }
                    </div>
                    <div className={toggleClass ? 'box standard-b' : 'box'}>B</div>
                    <div className={toggleClass ? 'box standard-c' : 'box'}>C</div>
                    <div className={toggleClass ? 'box standard-d' : 'box'}>D</div>
                    <div className={toggleClass ? 'box standard-e' : 'box'}>E</div>
                    <div className={toggleClass ? 'box standard-f' : 'box'}>F</div>
                </div>
            </div>
        </div>
    );
}
