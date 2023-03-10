import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Custom.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCard = ({ service }) => {

    const { country, desc, price, rating, review, place, img, _id } = service;
    return (
        <div className="antialiased bg-gray-200 text-gray-900 font-sans p-6">
            <div className="container mx-auto">
                <div className="flex flex-wrap -mx-4">
                    <div className="px-4 mx-auto lg:max-w-7xl md:items-center grid">
                        <span href="" className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                            <div className="relative pb-48 overflow-hidden">
                                <PhotoProvider>
                                    <PhotoView src={img}>
                                        <img className="absolute inset-0 h-full w-full object-cover" src={img} alt="" />
                                    </PhotoView>
                                </PhotoProvider>

                            </div>
                            <div className="p-4">
                                <span className="inline-block px-2 py-1 leading-none bg-primary  text-white  rounded-3xl font-semibold uppercase tracking-wide text-xs">{country}</span>
                                <h2 className="mt-2 mb-2  font-bold">{place}</h2>
                                <p className="text-sm">{desc.slice(0, 100)}</p>
                                <div className="mt-3 flex items-center">
                                    <span className="text-sm font-semibold">Price:</span>&nbsp;<span className="font-bold text-xl">{price}</span>&nbsp;<span className="text-sm font-semibold">€</span>
                                </div>
                            </div>
                            <div className="p-4 border-t border-b text-xs text-gray-700">
                                <span className="flex items-center mb-2">
                                    <i className="far fa-clock fa-fw mr-2 text-gray-900"></i> {review} review
                                </span>
                                <span className="flex items-center">
                                    <i className="far fa-address-card fa-fw text-gray-900 mr-2"></i>
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-currenttext-blue-700"><path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path></svg>
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-currenttext-blue-700"><path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path></svg>
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-currenttext-blue-700"><path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path></svg><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-currenttext-blue-700"><path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path></svg><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current text-gray-400"><path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path></svg><span className="ml-2">{rating}</span>
                                </span>
                            </div>
                            <div className="p-4 ">
                                <Link to={`/service/${_id}`}>
                                    <button className='btn btn-primary  text-white p-2 rounded-sm text-center flex w-full'>View Details</button>

                                </Link>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ServiceCard;