import React from 'react';

const Department = () => {
    return (
        <div className="card w-full bg-base-100">
            <h1 className="text-2xl px-4 mt-4 mb-4">Department</h1>
            <div className="card w-full  bg-base-200 ">

             <div className="grid gird-cols-1 lg:grid-cols-3 gap-4 mt-8 mx-auto">
             <div className="px-8">
                    <h2 className="text-xl">Department</h2>
                   <div className="grid lg:grid-cols-1 mt4">
                   <select class="select  mt-4 w-full max-w-xs">
                        <option disabled selected>Select</option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                        <option>Greedo</option>
                        <option>Greedo</option>
                    </select>
                    <input type="text" placeholder="Department" class="input input-bordered 
                     w-full max-w-xs mt-6 mb-4" />
                   </div>
                </div>
                <div>
                <h2 className="text-xl">Designation</h2>
                <div className="grid lg:grid-cols-1 mt4">
                   <select class="select  mt-4 w-full max-w-xs">
                        <option disabled selected>Designation</option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                        <option>Greedo</option>
                        <option>Greedo</option>
                    </select>
                    <input type="text" placeholder="Designation" class="input input-bordered 
                     w-full max-w-xs mt-6 mb-4" />
                   </div>
                </div>
                <div>
                <h2 className="text-xl">Description</h2>
                <textarea class="textarea w-96 h-40" placeholder="Description"></textarea>
                </div>
             </div>
             <div className="flex mx-auto gap-4 mb-4 mt-4"> 
                <button class="btn btn-success">Add</button>
                <button class="btn btn-primary">Edit</button>
                <button class="btn btn-error">Delete</button>   
             </div>
            
            </div>
            <div className="flex items-center px-12 justify-between">
                <p>Admin</p>
                <input type="text" placeholder="admin" class="input input-bordered 
                     w-full max-w-xs mt-6 mb-4" />
             </div>
        </div>
    );
};

export default Department;