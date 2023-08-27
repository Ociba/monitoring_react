import React, { Component } from 'react';
class Rightmodal extends Component {
    render() { 
        return (
            <div className="right-sidebar">
                <div className="slimscrollright">
                    <div className="rpanel-title"> Select Color Panel <span><i className="ti-close right-side-toggle"></i></span> </div>
                    <div className="r-panel-body">
                        <ul id="themecolors" className="m-t-20">
                            <li><b>With Light sidebar</b></li>
                            <li><a href="javascript:void(0)" data-skin="skin-default" className="default-theme">1</a></li>
                            <li><a href="javascript:void(0)" data-skin="skin-green" className="green-theme">2</a></li>
                            <li><a href="javascript:void(0)" data-skin="skin-red" className="red-theme">3</a></li>
                            <li><a href="javascript:void(0)" data-skin="skin-blue" className="blue-theme working">4</a></li>
                            <li><a href="javascript:void(0)" data-skin="skin-purple" className="purple-theme">5</a></li>
                            <li><a href="javascript:void(0)" data-skin="skin-megna" className="megna-theme">6</a></li>
                            <li className="d-block m-t-30"><b>With Dark sidebar</b></li>
                            <li><a href="javascript:void(0)" data-skin="skin-default-dark" className="default-dark-theme ">7</a></li>
                            <li><a href="javascript:void(0)" data-skin="skin-green-dark" className="green-dark-theme">8</a></li>
                            <li><a href="javascript:void(0)" data-skin="skin-red-dark" className="red-dark-theme">9</a></li>
                            <li><a href="javascript:void(0)" data-skin="skin-blue-dark" className="blue-dark-theme">10</a></li>
                            <li><a href="javascript:void(0)" data-skin="skin-purple-dark" className="purple-dark-theme">11</a></li>
                            <li><a href="javascript:void(0)" data-skin="skin-megna-dark" className="megna-dark-theme ">12</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
export default Rightmodal;