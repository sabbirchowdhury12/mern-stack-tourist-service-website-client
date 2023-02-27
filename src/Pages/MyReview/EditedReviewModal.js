import axios from 'axios';
import React from 'react';
import { toast } from 'react-hot-toast';
import { updateReview } from '../../utilities/APIRoutes';

const EditedReviewModal = ({ text, refetch, setText }) => {


    const handleEdit = async (event) => {
        event.preventDefault();

        const message = event.target.comment.value;
        const updatedReview = {
            message
        };
        const { data } = await axios.put(`${updateReview}/${text._id}`, updatedReview);

        if (data.acknowledged) {
            toast.success('update succesfully');
            setText(null);
            refetch();
        } else {
            toast.error('try again');
        }





    };


    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn  btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <p className='font-bold'>Edit Your Comment</p>
                    <form onSubmit={handleEdit} className='grid grid-cols-1 gap-3 mt-2'>
                        <textarea className="h-40 border mt-1 rounded px-2 w-full bg-gray-50" name='comment' defaultValue={text.comment} cols="30" rows="10"></textarea>
                        <br />
                        <input className='btn btn-secondary w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default EditedReviewModal;