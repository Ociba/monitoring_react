import React, { Component } from 'react';
import  {Link} from 'react-router-dom';

class Table extends Component {
    render () {
        return (
            <React.Fragment>
                <div className='row'>
                    <div className='col-12'>
                        <div className="card">
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="tablesaw table-striped table-hover table-bordered table no-wrap"
                                        data-tablesaw-mode="columntoggle">
                                        <thead>
                                            <tr>
                                                <th scope="col"  className="border">#</th>
                                                <th scope="col" data-tablesaw-sortable-col data-tablesaw-sortable-default-col
                                                    data-tablesaw-priority="3" >Stakeholder</th>
                                                <th scope="col" data-tablesaw-sortable-col data-tablesaw-priority="2" className="border">Agency
                                                </th>
                                                <th scope="col">Location</th>
                                                <th scope="col" data-tablesaw-sortable-col data-tablesaw-priority="4" className="border">CreatedBy
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="title">Avatar</td>
                                                <td>1</td>
                                                <td>2009</td>
                                                <td>83%</td>
                                                <td>$2.7B</td>
                                            </tr> 
                                            <tr>
                                                <td className="title">Titanic</td>
                                                <td>2</td>
                                                <td>1997</td>
                                                <td>88%</td>
                                                <td>$2.1B</td>
                                            </tr> 
                                            <tr>
                                                <td className="title">The Avengers</td>
                                                <td>3</td>
                                                <td>2012</td>
                                                <td>92%</td>
                                                <td>$1.5B</td>
                                            </tr> 
                                            <tr>
                                                <td className="title">Harry Potter</td>
                                                <td>4</td>
                                                <td>2011</td>
                                                <td>96%</td>
                                                <td>$1.3B</td>
                                            </tr>
                                            <tr>
                                                <td className="title">Frozen</td>
                                                <td>5</td>
                                                <td>2013</td>
                                                <td>89%</td>
                                                <td>$1.2B</td>
                                            </tr> 
                                            <tr>
                                                <td className="title">Iron Man 3</td>
                                                <td>6</td>
                                                <td>2013</td>
                                                <td>78%</td>
                                                <td>$1.2B</td>
                                            </tr> 
                                            <tr>
                                                <td className="title">Transformers</td>
                                                <td>7</td>
                                                <td>2011</td>
                                                <td>36%</td>
                                                <td>$1.1B</td>
                                            </tr>
                                            <tr>
                                                <td className="title">The Lord o</td>
                                                <td>8</td>
                                                <td>2003</td>
                                                <td>95%</td>
                                                <td>$1.1B</td>
                                            </tr>
                                            <tr>
                                                <td className="title">Skyfall</td>
                                                <td>9</td>
                                                <td>2012</td>
                                                <td>92%</td>
                                                <td>$1.1B</td>
                                            </tr> 
                                            <tr>
                                                <td className="title">Transformers</td>
                                                <td>10</td>
                                                <td>2014</td>
                                                <td>18%</td>
                                                <td>$1.0B</td>
                                            </tr> 
                                        </tbody>
                                    </table>
                                </div>
                                <div className='row'>
                                    <div className="col-sm-6 mb-2">

                                    </div>
                                    <div className="text-right col-sm-6">
                                        <Link to="/add-stakeholder" className='btn btn-sm waves-effect waves-light btn-primary text-white'>Add Stakeholder (s)</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default Table;