import axios from "axios";
import { useEffect, useState } from "react";

const baseURL = "http://localhost:3001";

const Acceder = () => {
    let [datos, setDatos] = useState({});
    const [frase, setfrase] = useState('esta es una prueba');

    const obtenerEnums = async () =>{
        try {
            const response = await axios(baseURL + "/api/enums");
            setDatos(response.data.data);
            console.log(datos);
            // console.log(datos);
          } catch (err) {
            console.error(err);
          }
    }

    useEffect(() => {
        obtenerEnums()
        
    }, []);

    return (
        <div className="container">
            <div>
                {frase}
            </div>

            <div>
                {datos!=null ? (<ul>
                    {Object.keys(datos).map(i=>(
                        <div>
                            <li>{i}</li> 
                            {i != null && (
                            <ul>
                                {Object.keys(datos[i]).map(u=>(
                                <li>{u}</li>
                                 ))}
                            </ul>

                            )}
                        </div>
                    ))}
                </ul>) : "no hay datos"}
            </div>
            {/* <div>
                {datos?.enumAreaEncargada.map((item,i)=>(
                    <li>{item}</li>
                ))}
            </div> */}
            {/* <div>{datos!=null ? datos.map(dato => (
                <li>
                    {dato?.enumAreaEncargada}
                </li>
            )): "No tengo datos"
        }</div> */}
            <form>
                <div class="row mb-3">
                    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                        <input type="email" class="form-control" id="inputEmail3" />
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="inputPassword3" class="col-sm-2 col-form-label">Contraseña</label>
                    <div class="col-sm-10">
                        <input type="password" class="form-control" id="inputPassword3" />
                    </div>
                </div>


                <button type="submit" class="btn btn-primary">Ingresar</button>
            </form>
        </div>
    );
}

export default Acceder;