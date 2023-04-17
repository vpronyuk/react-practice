import data from "../../data.json";
import { Head } from "../Head/Head";
// import css from "./Card.module.css";

// import clsx from "clsx";

import { Container } from "./Card.styled";

export const Card = ({ isOnline, isOffline }) => {
  return data.map((photo) => {
    return (
      <Container key={photo.id}>
        <img src="..." alt={photo.title} />
        <div>
          <h5>Card title: {photo.title}</h5>
          <Head id="id-123" clas="card-title" />
          <a href="http">Go somewhere</a>
        </div>
      </Container>
    );
  });
};

// CSS modules
// export const Card = ({ isOnline }) => {
//   return data.map((photo) => {
//     return (
//       <div
//         key={photo.id}
//         // className={
//         //   isOnline ? `${css.main} ${css.blue}` : `${css.main} ${css.red}`
//         // }
//         // className={clsx(css.main, isOnline && css.blue, !isOnline && css.red)}
//         className={clsx(css.main, {
//           [css.blue]: isOnline,
//           [css.red]: !isOnline,
//         })}
//         // style={{ backgroundColor: "green", textDecoration: "underline" }} - example of inline style
//       >
//         <img src="..." alt={photo.title} className={css.img} />
//         <div>
//           <h5>Card title: {photo.title}</h5>
//           <Head id="id-123" clas="card-title" />
//           <a href="http">Go somewhere</a>
//         </div>
//       </div>
//     );
//   });
// };

// ================= for Bootstrap
// export const Card = () => {
//   return data.map((photo) => {
//     return (
//       <div key={photo.id} className="card" style={{ width: "18rem" }}>
//         <img src="..." className="card-img-top" alt={photo.title} />
//         <div className="card-body">
//           <h5 clasName="card-title">Card title: {photo.title}</h5>
//           <Head id="id-123" clas="card-title" />
//           <a href="http" className="btn btn-primary">
//             Go somewhere
//           </a>
//         </div>
//       </div>
//     );
//   });
// };
