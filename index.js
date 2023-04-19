import express from 'express';

const application = express();  

const studentsFunction = (request, respose) => {
    respose.send("<h1> <u> Students </u> </h1>" + 
                 "<ul> <li> <h2> Momen Ahmed Abdelhay </h2> </li> </ul>" +
                 "<ul> <li> <h2> Ahmed Mohammed Ali </h2> </li> </ul>" +
                 "<ul> <li> <h2> Karim Mohammed Ahmed </h2> </li> </ul>" +
                 "<ul> <li> <h2> Yasser Adelrahman Mohammed </h2> </li> </ul>" +
                 "<ul> <li> <h2> Mohmmed Ali Ahmed </h2> </li> </ul>")
};

application.get('/students', studentsFunction);

application.listen(1000);