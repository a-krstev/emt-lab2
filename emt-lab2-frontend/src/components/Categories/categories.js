import React from 'react';

const Categories = (props) => {

    return (
        <div className={"container mm-4 mt-5"}>
            <div className={"row"}>
                <div className={"table-responsive"}>
                    <table className={"table table-striped"}>
                        <thead>
                        <tr>
                            <th scope={"col"}>Category</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.categories.map((term, index) => {
                            return (
                                <tr key={index}>
                                    <td>{term}</td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Categories;