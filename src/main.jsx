import { createRoot } from "react-dom/client";
import 'antd/dist/reset.css';
import './index.css';
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(<App />);
// fetch('http://localhost/api/v1/contests/titanic')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error('Ошибка:', error));