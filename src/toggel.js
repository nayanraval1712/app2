import React, { useState } from 'react';
import AdminMenu from './AdminManu';

export default function Toggel() {
    const [iscall, setCall] = useState(false);

    const buttoncall = () => {
        setCall(!iscall); // Negate the current value of iscall
    };

    return (
        <div style={{  position: 'relative' }}>
            <button onClick={buttoncall}>Toggle</button>
            <div
                style={{ width: AdminMenu ? '200px' : '0', overflow: 'hidden', transition: 'width 0.5s' }}>

                {iscall ? 'Menu is open ' : 'Menu is closed'}
            </div>
        </div >
    );
}

// import React, { useState } from 'react';

// export default function Toggel() {
//   const [isMenuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!isMenuOpen); // Toggle the current state of the menu
//   };

//   return (
//     <div style={{ display: 'flex' }}>
//       <div style={{ width: isMenuOpen ? '200px' : '0', overflow: 'hidden', transition: 'width 0.5s' }}>
//         <ul>
//           <li>Menu Item 1</li>
//           <li>Menu Item 2</li>
//           <li>Menu Item 3</li>
//         </ul>
//       </div>
//       <div>
//         <button onClick={toggleMenu}>Toggle Menu</button>
//         <div>Main Content</div>
//       </div>
//     </div>
//   );
// }
