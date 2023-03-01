import { useState } from "react";

export const style = 'px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8';

export const headingStyle = 'text-2xl text-center mt-20 mb-10 uppercase font-bold hover:text-primary';

const button = `bg-primary `;
//banner slider data
export const slides = [
    {
        picture: "https://images.unsplash.com/photo-1606724776606-8cb9515a086b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w0NDMzNDY0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        subHeading: 'welcome',
        heading: 'lorem ipsum',
        description:
            'loIpsum dolores ipsum est sanctus dolore. Justo ipsum magna sit sit sed et, elitr dolor tempor dolores eos invidunt sanctus.',

    },
    {
        picture: "https://images.unsplash.com/photo-1615920292087-6d9f818e9e13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJhbCUyMGJlYXV0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        subHeading: 'welcome',
        heading: 'lorem ipsum',
        description:
            'loIpsum dolores ipsum est sanctus dolore. Justo ipsum magna sit sit sed et, elitr dolor tempor dolores eos invidunt sanctus.',

    },
    {
        picture: "https://images.unsplash.com/photo-1511525499366-bc3f823bacb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG5hdHVyYWwlMjBiZWF1dHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        subHeading: 'welcome',
        heading: 'lorem ipsum',
        description:
            'loIpsum dolores ipsum est sanctus dolore. Justo ipsum magna sit sit sed et, elitr dolor tempor dolores eos invidunt sanctus.',
    },
    {
        picture: "https://images.unsplash.com/photo-1613379293095-d81837c1502d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG5hdHVyYWwlMjBiZWF1dHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        subHeading: 'welcome',
        heading: 'lorem ipsum',
        description:
            'loIpsum dolores ipsum est sanctus dolore. Justo ipsum magna sit sit sed et, elitr dolor tempor dolores eos invidunt sanctus.',
    },
];


// readmore component  =-------------------------------


export const ReadMore = ({ children }) => {

    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);

    return (
        <p className="text text-lg my-4">
            {isReadMore ? text.slice(0, 100) : text}
            <span onClick={() => setIsReadMore(!isReadMore)} className="read-or-hide font-bold text-sm text-red-700 italic">
                {isReadMore ? "...read more" : "...show less"}
            </span>
        </p>
    );
};


//star
export const star = <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-currenttext-blue-700"><path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path></svg>;
//testomonial section

export const reviews = [
    {
        name: "jordan",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptas animi repudiandae dignissimos doloribus magni! Corporis quaerat quasi doloremque?"
    },
    {
        name: "jordan",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptas animi repudiandae dignissimos doloribus magni! Corporis quaerat quasi doloremque?"
    },
    {
        name: "jordan",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptas animi repudiandae dignissimos doloribus magni! Corporis quaerat quasi doloremque?"
    },
    {
        name: "jordan",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptas animi repudiandae dignissimos doloribus magni! Corporis quaerat quasi doloremque?"
    },
    {
        name: "jordan",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptas animi repudiandae dignissimos doloribus magni! Corporis quaerat quasi doloremque?"
    },
    {
        name: "jordan",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptas animi repudiandae dignissimos doloribus magni! Corporis quaerat quasi doloremque?"
    },
    {
        name: "jordan",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptas animi repudiandae dignissimos doloribus magni! Corporis quaerat quasi doloremque?"
    },
    {
        name: "jordan",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptas animi repudiandae dignissimos doloribus magni! Corporis quaerat quasi doloremque?"
    },
    {
        name: "jordan",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptas animi repudiandae dignissimos doloribus magni! Corporis quaerat quasi doloremque?"
    },
];
