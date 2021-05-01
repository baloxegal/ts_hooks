import React, { useEffect, useState } from 'react';

export default function Header (props: any) {

    const date = Data();

    return(

        <div className="App-header">
            <h1>
                {props.text}
            </h1>
            <h2>{date}</h2>
        </div>
    ) 

}

const Data = () => {
    var today = new Date();
    var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    const[dateToday, setCount] = useState(date);

    useEffect(() =>{
       document.title = "Exchange";
    });

    return dateToday;
    
}

// const Header = (props: any) => {
//     return(

//         <div className="App-header">
//             <h1>
//                 {props.text}
//             </h1>
//         </div>) 
// }

        // <div style={{background: "url(https://i.postimg.cc/ZnHTP71s/aircraft-airplane-boat-1575833.jpg)"}} className="page-holder bg-cover">

        //     <div className="container py-5">
        //         <header className="text-center text-white py-5">
        //             <h1 className="display-4 font-weight-bold mb-4">Cel mai bun curs valutar din Moldova</h1>
        //             <p className="lead mb-0">Create a responsive full-page background image window using Bootstrap 4.</p>
        //             <p className="font-italic">Snippet By <a href="https://bootstrapious.com" className="text-white">
        //                 <u>Bootstrapious</u></a>
        //             </p>
        //         </header>

        //         <div className="text-white">
        //             <p className="lead">It's not a good approch to deal directly with <code className="bg-white px-2 py-1 rounded">body</code> So, create a wrapper container and make it a full-window height.</p>
        //             <p className="lead">Set the wrapper initial height to full window height using <code className="bg-white px-2 py-1 rounded">min-height: 100vh</code></p>
        //             <p className="lead">Use <code className="bg-white px-2 py-1 rounded">.bg-cover</code> to make the background fit all viewports.</p>
        //         </div>

        //     </div>
        // </div>)    
//}

//export default Header;