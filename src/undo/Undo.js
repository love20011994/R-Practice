// import React, { useState } from "react";

// function Undo() {
//   // const [agree, setAgree] = useState(false);
//   const[state,setState] = useState(false)

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     kush:`007`,
    
//   });

//   function handleCheckboxChange() {
//     console.log(state)
//     setState(!state)

//     // setAgree(event.target.checked);
//   }

//   const handleInputChange = event => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = event => {
//     event.preventDefault();
//     // Your form submission logic goes here
//     console.log(formData);
//   };


  

//   // function handleSubmit(event) {
//   //   event.preventDefault();
//   //   // Handle form submission
//   // }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
//       </label>
//       <br />
//       <label>
//         Email:
//         <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
//       </label>
//       <br />
//       <label>
//         Password:
//         <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
//       </label>
//       <br />
//       <label>
//         <input
        
//           type="checkbox"
//           checked={state}
//           onChange={handleCheckboxChange}
//           name="kush"
//           value={formData}
//         />
//         I agree to the terms and conditions
//       </label>
//       <button type="submit">Submit</button>
      
//     </form>
//   );
  
//  }

// export default Undo


// // import React, { useState } from "react";

// // const UndoExample = () => {
// //   const [text, setText] = useState("");
// //   const [history, setHistory] = useState([]);

// //   const handleChange = (e) => {
// //     setText(e.target.value);
// //     setHistory([...history, e.target.value]);
// //   };

// //   const handleUndo = () => {
// //     if (history.length > 1) {
// //       setHistory(history.slice(0, history.length - 1));
// //       setText(history[history.length - 2]);
// //     }
// //   };

// //   return (
// //     <div>
// //       <input type="text" value={text} onChange={handleChange} />
// //       <button onClick={handleUndo}>Undo</button>
// //     </div>
// //   );
// // };

// // export default UndoExample;

// import React, { useState } from 'react'

// function Undo() {
//   const [userinfo, setUserInfo] = useState({
//     // languages: [],
//     response: [],
//   });
  
//   const handleChange = (e) => {
//     // Destructuring
//     const { value, checked } = e.target;
//     const { response } = userinfo;
      
//     console.log(`${value} is ${checked}`);
     
//     // Case 1 : The user checks the box
//     if (checked) {
//       setUserInfo({
//         // languages: [...languages, value],
//         response: [...response, value],
//       });
//     }
  
//     // Case 2  : The user unchecks the box
//     else {
//       setUserInfo({
//         // languages: languages.filter((e) => e !== value),
//         response: response.filter((e) => e !== value),
//       });
//     }
//   };
    
//   return (
//     <>
//       <div className="container-fluid top ">
//         <div className="container mt-5  pb-5 pt-5">
//           <h3 className="form-head-contact-h3 ">
//             Your programming expertise lies in what languages?{" "}
//           </h3>
  
//           <form>
//             <div className="row">
//               <div className="col-md-6">
//                 <div className="form-check m-3">
//                   <input
//                     className="form-check-input"
//                     type="checkbox"
//                     name="languages"
//                     value="Javascript"
//                     id="flexCheckDefault"
//                     onChange={handleChange}
//                   />
//                   <label
//                     className="form-check-label"
//                     htmlFor="flexCheckDefault"
//                   >
//                       Javascript
//                   </label>
//                 </div>
//                 <div className="form-check m-3">
//                   <input
//                     className="form-check-input"
//                     type="checkbox"
//                     name="languages"
//                     value="Python"
//                     id="flexCheckDefault"
//                     onChange={handleChange}
//                   />
//                   <label
//                     className="form-check-label"
//                     htmlFor="flexCheckDefault"
//                   >
//                       Python
//                   </label>
//                 </div>
//                 <div className="form-check m-3">
//                   <input
//                     className="form-check-input"
//                     type="checkbox"
//                     name="languages"
//                     value="Java"
//                     id="flexCheckDefault"
//                     onChange={handleChange}
//                   />
//                   <label
//                     className="form-check-label"
//                     htmlFor="flexCheckDefault"
//                   >
//                       Java
//                   </label>
//                 </div>
//                 <div className="form-check m-3">
//                   <input
//                     className="form-check-input"
//                     type="checkbox"
//                     name="languages"
//                     value="PHP"
//                     id="flexCheckDefault"
//                     onChange={handleChange}
//                   />
//                   <label
//                     className="form-check-label"
//                     htmlFor="flexCheckDefault"
//                   >
//                       PHP
//                   </label>
//                 </div>
//               </div>
//               <div className="col-md-6">
//                 <div className="form-check m-3">
//                   <input
//                     className="form-check-input"
//                     type="checkbox"
//                     name="languages"
//                     value="C#"
//                     id="flexCheckDefault"
//                     onChange={handleChange}
//                   />
//                   <label
//                     className="form-check-label"
//                     htmlFor="flexCheckDefault"
//                   >
//                       C#
//                   </label>
//                 </div>
//                 <div className="form-check m-3">
//                   <input
//                     className="form-check-input"
//                     type="checkbox"
//                     name="languages"
//                     value="C++"
//                     id="flexCheckDefault"
//                     onChange={handleChange}
//                   />
//                   <label
//                     className="form-check-label"
//                     htmlFor="flexCheckDefault"
//                   >
//                       C++
//                   </label>
//                 </div>
//                 <div className="form-check m-3">
//                   <input
//                     className="form-check-input"
//                     type="checkbox"
//                     name="languages"
//                     value="C"
//                     id="flexCheckDefault"
//                     onChange={handleChange}
//                   />
//                   <label
//                     className="form-check-label"
//                     htmlFor="flexCheckDefault"
//                   >
//                       C
//                   </label>
//                 </div>
//                 <div className="form-check m-3">
//                   <input
//                     className="form-check-input"
//                     type="checkbox"
//                     name="languages"
//                     value="Typescript"
//                     id="flexCheckDefault"
//                     onChange={handleChange}
//                   />
//                   <label
//                     className="form-check-label"
//                     htmlFor="flexCheckDefault"
//                   >
//                       Typescript
//                   </label>
//                 </div>
//               </div>
//             </div>
  
//             <div className="form-floating mt-3 mb-3 text-center">
//               <label htmlFor="exampleFormControlTextarea1">
//                 You're proficient in the following languages :{"  "}
//               </label>
//               <textarea
//                 className="form-control text"
//                 name="response"
//                 value={userinfo.response}
//                 placeholder="The checkbox values will be displayed here "
//                 id="floatingTextarea2"
//                 style={{ height: "150px" }}
//                 onChange={handleChange}
//               ></textarea>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Undo
// import React from 'react'


// import React from 'react'
// import  { useState } from "react";

// function Undo() {
//   const [selectedOption, setSelectedOption] = useState("");

//   const options = [
//     { id: 1, value: "Option 1" },
//     { id: 2, value: "Option 2" },
//     { id: 3, value: "Option 3" },
//   ];

//   const handleOptionChange = (event) => {
//     setSelectedOption(event.target.value);
//   };
//   return (
//     <div>
//        {options.map((option) => (
//         <div key={option.id}>
//           <input
//             type="radio"
//             id={option.id}
//             name="option"
//             value={option.value}
//             checked={selectedOption === option.value}
//             onChange={handleOptionChange}
//           />
//           <label htmlFor={option.id}>{option.value}</label>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default Undo

import React, { Component, lazy } from 'react'
import { useRoutes } from "react-router-dom";

// import ComponentB from '../Routing-6/component/ComponentB'
const ComponentB = lazy(()=>import('../Routing-6/component/ComponentB'))
function Undo() {
  const element = useRoutes([
    {
      path: "/love",
      element:  <ComponentB/>,
     
    }

  ]
  
  )
  return (
   
    element

  
  )
}

export default Undo
